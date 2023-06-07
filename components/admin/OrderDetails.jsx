import { Button } from '@mui/material'
import Link from 'next/link'
import React from 'react'

const OrderDetails = ({ data }) => {
    return (
        <>
            {
                data &&
                <div className="w-full  md:h-screen h-[calc(100vh-56px)] overflow-y-auto md:mt-0 mt-[56px] p-4 bg-[rgb(246,248,252)]">
                    <div className="bg-white rounded p-4">
                        <span className="font-bold text-sm">Booking Number: #{data.bookingNumber}</span>
                        <div className="grid gap-2 md:grid-cols-2 mt-2  text-sm grid-cols-1">
                            <div className="flex gap-2 items-start">
                                <h3 className="font-semibold text-left">Name:</h3>
                                <h3 className="text-left  col-span-2">{data.data.name}</h3>
                            </div>
                            {
                                data.data.nationality &&
                                <div className="flex gap-2 items-start">
                                    <h3 className="font-semibold text-left">Nationality:</h3>
                                    <h3 className="text-left  col-span-2">{data.data.nationality}</h3>
                                </div>
                            }
                            <div className="flex gap-2 items-start">
                                <h3 className="font-semibold text-left">Email:</h3>
                                <h3 className="text-left  col-span-2">{data.data.email}</h3>
                            </div>
                            <div className="flex gap-2 items-start">
                                <h3 className="font-semibold text-left">Phone:</h3>
                                <h3 className="text-left  col-span-2">{data.data.countryCode ? data.data.countryCode : ''}{data.data.phone}</h3>
                            </div>
                            <div className="flex gap-2 items-start">
                                <h3 className="font-semibold text-left">Payment:</h3>
                                <h3 className="text-left  col-span-2">{data.paymentCompleted ? 'Completed' : 'Pending'}</h3>
                            </div>
                            <div className="flex gap-2 items-start">
                                <h3 className="font-semibold text-left">Amount:</h3>
                                <h3 className="text-left  col-span-2">{data.type == 'visa' ? data.data.amount : data.data.traveller.adult * data.data.price[`adult${data.data.occupancy[0].toUpperCase() + data.data.occupancy.slice(1)}`] + data.data.traveller.child * data.data.price.child + data.data.traveller.infant * data.data.price.infant} AED</h3>
                            </div>
                            {
                                data.type == 'package' &&
                                <div className="flex gap-2 items-start">
                                    <h3 className="font-semibold text-left">Pax:</h3>
                                    <h3 className="text-left  col-span-2"> {data.data.traveller.adult + 'x Adult'} {data.data.traveller.child ? '| ' + data.data.traveller.child + 'x Child' : ''} {data.data.infant ? '| ' + data.data.traveller.infant + 'x Infant' : ''} 2x Adult | 2x Child | 1x Infant</h3>
                                </div>
                            }
                        </div>
                        {
                            data.type == 'package' &&
                            <div className="text-sm my-2">
                                <h3 className="font-semibold text-left">Message:</h3>
                                <p>{data.data.message}</p>
                            </div>
                        }
                        <h3 className="font-bold mt-4 mb-2">{data.type == 'visa' ? 'Visa' : 'Package'} Details</h3>
                        <div className="grid gap-2 md:grid-cols-2 text-sm grid-cols-1">
                            <div className="flex gap-2 items-start">
                                <h3 className="font-semibold text-left">Title:</h3>
                                <h3 className="text-left  col-span-2 text-red-400 underline"><Link href={`${data.type=='visa'?'/visa':'/package'}/${data.data.link}`}>{data.data.title}</Link></h3>
                            </div>
                            <div className="flex gap-2 items-start">
                                <h3 className="font-semibold text-left">id:</h3>
                                <h3 className="text-left  col-span-2">{data.data.itemId}</h3>
                            </div>
                        </div>
                        {
                            data.type == 'visa' && data.data.pax == 1 &&
                            <>
                                <h3 className="font-bold mt-4 mb-2">Documents</h3>
                                <div className="grid gap-2 md:grid-cols-2 text-sm grid-cols-1">
                                    <div className="flex flex-col gap-2 items-start relative">
                                        <h3 className="font-semibold text-left">Passport Front Page:</h3>
                                        <Button variant='contained' color='primary' className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"><a target='_blank' href={data.data.passportFrontPage} download={true} >Download</a></Button>
                                        <img src={data.data.passportFrontPage} className='w-full object-contain' alt="passport" />
                                    </div>
                                    <div className="flex flex-col gap-2 items-start relative">
                                        <h3 className="font-semibold text-left">Passport Back Page:</h3>
                                        <Button variant='contained' color='primary' className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"><a target='_blank' href={data.data.passportBackPage} download={true} >Download</a></Button>
                                        <img src={data.data.passportBackPage} className='w-full object-contain' alt="passport" />
                                    </div>
                                    <div className="flex flex-col gap-2 items-start relative">
                                        <h3 className="font-semibold text-left">Photograph:</h3>
                                        <Button variant='contained' color='primary' className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"><a target='_blank' href={data.data.photograph} download={true} >Download</a></Button>
                                        <img src={data.data.photograph} className='w-full object-contain' alt="passport" />
                                    </div>
                                </div>
                            </>
                        }
                    </div>
                </div>
            }
        </>
    )
}

export default OrderDetails