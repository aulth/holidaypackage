import React, { useState, useEffect } from 'react'
import Navbar from '../../components/Visa/Navbar'
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper } from '@mui/material';

const page = () => {
    const [paymentCompleted, setPaymentCompleted] = useState(false);
    const [data, setData] = useState();
    const [item, setItem] = useState();
    const updatePaymentStatus = async (sessionId) => {
        let response = await fetch('/api/booking/updatepayment', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify({ sessionId: sessionId })
        })
        let json = await response.json();
        if (!json.success) {
            console.log(json.msg);
        } else {
            setData(json.data);
            console.log(json.data)
            setPaymentCompleted(true)
            fetchItem(json.data.data.link, json.data.type);
        }
    }
    const validatePayment = async (sessionId) => {
        let responseData = await fetch('/api/stripe/validate', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify({ sessionId: sessionId })
        });
        let json = responseData.json();
        if (!json.success) {
            updatePaymentStatus(sessionId);
        } else {
            setPaymentCompleted(true);
        }
    }
    const fetchItem = async (link, type) => {
        let url = `/api/${type}/getone`;
        console.log(url)
        console.log(link)
        let response = await fetch(url, {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify({ link: link })
        })
        let json = await response.json();
        console.log(json)
        if (json.success) {
            console.log(json)
            if (type == 'visa') {
                setItem(json.visa)
            } else {
                setItem(json.package)
            }
        }
    }
    useEffect(() => {
        if (typeof window != undefined) {
            if (localStorage.getItem('sessionId')) {
                validatePayment(localStorage.getItem('sessionId'));
                localStorage.removeItem('sessionId')
            }
        }
    }, [])

    return (
        <>
            <Navbar />
            <hr className='mt-[60px]' />
            {
                paymentCompleted && data &&
                <div className="w-full bg-gray-50 p-4 min-h-[calc(100vh-61px)] flex justify-center items-center">
                    <div className="md:w-96 w-full bg-white rounded border border-gray-200">
                        <div className="w-full flex justify-center py-2 mt-4">
                            <CheckCircleIcon className='text-green-600 text-4xl' />
                        </div>
                        <h2 className="font-bold text-center">
                            We received your order!
                        </h2>
                        <p className="text-sm text-center">Your order #{data.bookingNumber} completed</p>
                        <br />
                        <hr />
                        <div className="grid md:grid-cols-2 md:gap-8 gap-4 grid-cols-1 p-4">
                            <div>
                                <p className="text-sm">
                                    {data.data.name}
                                </p>
                                <p className="text-sm">
                                    {data.data.email}
                                </p>
                                <p className='text-sm'>
                                    {data.data.countryCode} {data.data.phone}
                                </p>
                            </div>
                            <div>
                                <p className="text-sm">
                                    {data.data.nationality}
                                </p>
                                {
                                    data.data.type == 'visa' &&
                                    <p className="text-sm">
                                        {data.data.pax} Pax
                                    </p>
                                }
                                {
                                    data.data.type == 'package' &&
                                    <>
                                        <p className="text-sm">
                                            {data.data.traveller.adult} x adult
                                        </p>
                                        <p className="text-sm">
                                            {data.data.traveller.child} x child
                                        </p>
                                        <p className="text-sm">
                                            {data.data.traveller.infant} x infant
                                        </p>
                                    </>
                                }
                            </div>
                        </div>
                        <hr />
                        <div className="w-full flex justify-between items-start p-4">
                            {
                                item && <div className="flex gap-2 justify-center items-start">
                                    <img src={item.gallery[0]} className='w-20 aspect-video object-cover rounded' alt="" />
                                    <div>
                                        <h4 className="font-bold">{item.title}</h4>
                                        <h5 className="font-semibold text-xs">#{item._id}</h5>
                                    </div>
                                </div>
                            }
                            <h4 className="font-bold">
                                {
                                    data.data.type == 'visa' && data.data.amount
                                }
                                {
                                    data.data.type == 'package' &&
                                    data.data.traveller.adult * data.data.price[`adult${data.data.occupancy[0].toUpperCase() + data.data.occupancy.slice(1)}`] + data.data.traveller.child * data.data.price.child + data.data.traveller.infant * data.data.price.infant
                                }
                            </h4>
                        </div>
                        <hr />
                        <div className="p-4">
                            <h3 className="font-bold uppercase mb-2">ORDER TOTAL</h3>
                            <TableContainer  >
                                <Table size='small'>
                                    {
                                        data.data.type == 'visa' &&
                                        <TableBody>
                                            <TableRow sx={{ border: 0 }}>
                                                <TableCell align="left">Subtotal</TableCell>
                                                <TableCell align="right">{data.data.amount}</TableCell>
                                            </TableRow>
                                            <TableRow className='border-t-2 border-b-2 border-gray-200'>
                                                <TableCell align="left" className='font-semibold'>Total</TableCell>
                                                <TableCell align="right" className='font-semibold'>{data.data.amount}</TableCell>
                                            </TableRow>
                                        </TableBody>
                                    }
                                    {
                                        data.data.type == 'package' &&
                                        <TableBody>
                                            <TableRow sx={{ border: 0 }}>
                                                <TableCell align="left">Adult</TableCell>
                                                <TableCell align="right">{data.data.traveller.adult * data.data.price[`adult${data.data.occupancy[0].toUpperCase() + data.data.occupancy.slice(1)}`]}</TableCell>
                                            </TableRow>
                                            <TableRow>
                                                <TableCell align="left">Child</TableCell>
                                                <TableCell align="right">{data.data.traveller.child * data.data.price.child}</TableCell>
                                            </TableRow>
                                            <TableRow>
                                                <TableCell align="left">Infant</TableCell>
                                                <TableCell align="right">{data.data.traveller.infant * data.data.price.infant}</TableCell>
                                            </TableRow>
                                            <TableRow className='border-t-2 border-b-2 border-gray-200'>
                                                <TableCell align="left" className='font-semibold'>Total</TableCell>
                                                <TableCell align="right" className='font-semibold'>{data.data.traveller.adult * data.data.price[`adult${data.data.occupancy[0].toUpperCase() + data.data.occupancy.slice(1)}`] + data.data.traveller.child * data.data.price.child + data.data.traveller.infant * data.data.price.infant}</TableCell>
                                            </TableRow>
                                        </TableBody>
                                    }
                                </Table>
                            </TableContainer>
                        </div>
                    </div>
                </div>
            }
            {
                !paymentCompleted &&
                <div className="w-full bg-gray-50 p-4 min-h-[calc(100vh-61px)] flex justify-center items-center">
                    <div className="w-80 bg-white rounded border border-gray-200 animate-pulse">
                        <div className="w-full flex justify-center py-2 mt-4">
                            <div className="h-12 w-12 bg-gray-200 rounded-full"></div>
                        </div>
                        <div className="px-4 flex flex-col gap-2">
                            <div className="h-6 bg-gray-200 rounded my-2"></div>
                            <div className="h-4 bg-gray-200 rounded"></div>
                        </div>
                        <br />
                        <hr />
                        <div className="grid md:grid-cols-2 md:gap-8 gap-4 grid-cols-1 p-4">
                            <div className='flex flex-col gap-2'>
                                <div className="h-4 bg-gray-200 rounded"></div>
                                <div className="h-4 bg-gray-200 rounded"></div>
                                <div className="h-4 bg-gray-200 rounded"></div>
                            </div>
                            <div>
                                <div className="h-4 bg-gray-200 rounded"></div>
                                <div className="h-4 bg-gray-200 rounded"></div>
                            </div>
                        </div>
                        <hr />
                        <div className="w-full flex justify-between items-start p-4">
                            <div className="flex gap-2 justify-center items-start">
                                {/* Loading image */}
                                <div className="h-20 w-20 bg-gray-200 rounded"></div>
                                <div>
                                    <h4 className="font-bold">
                                        {/* Loading text */}
                                        <div className="h-6 bg-gray-200 rounded"></div>
                                    </h4>
                                    <h5 className="font-semibold text-xs">
                                        {/* Loading text */}
                                        <div className="h-4 bg-gray-200 rounded"></div>
                                    </h5>
                                </div>
                            </div>
                            <h4 className="font-bold">
                                {/* Loading text */}
                                <div className="h-6 bg-gray-200 rounded"></div>
                            </h4>
                        </div>
                        <hr />
                        <div className="p-4">
                            <h3 className="font-bold uppercase mb-2">ORDER TOTAL</h3>
                            <TableContainer>
                                <Table size="small">
                                    <TableBody>
                                        <TableRow >
                                            <TableCell align="left">
                                                <p className="h-4 bg-gray-200 rounded"></p>
                                            </TableCell>
                                            <TableCell align="right">
                                                <p className="h-4 bg-gray-200 rounded"></p>
                                            </TableCell>
                                        </TableRow>
                                        <TableRow>
                                            <TableCell align="left">
                                                <p className="h-4 bg-gray-200 rounded"></p>
                                            </TableCell>
                                            <TableCell align="right">
                                                <p className="h-4 bg-gray-200 rounded"></p>
                                            </TableCell>
                                        </TableRow>
                                        <TableRow>
                                            <TableCell align="left">
                                                <p className="h-4 bg-gray-200 rounded"></p>
                                            </TableCell>
                                            <TableCell align="right">
                                                <p className="h-4 bg-gray-200 rounded"></p>
                                            </TableCell>
                                        </TableRow>
                                        <TableRow className="border-t-2 border-b-2 border-gray-200">
                                            <TableCell align="left" className="font-semibold">
                                                <p className="h-6 bg-gray-200 rounded"></p>
                                            </TableCell>
                                            <TableCell align="right" className="font-semibold">
                                                <p className="h-6 bg-gray-200 rounded"></p>
                                            </TableCell>
                                        </TableRow>
                                    </TableBody>
                                </Table>
                            </TableContainer>
                        </div>
                    </div>
                </div>

            }
        </>
    )
}

export default page