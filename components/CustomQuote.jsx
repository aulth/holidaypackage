import React, { useEffect, useState } from 'react'
import { Button, TextField } from '@mui/material';
import 'react-quill/dist/quill.snow.css';

import { DatePicker } from '@mui/x-date-pickers';
import { useRouter } from 'next/router';
import BackdropComponent from './BackdropComponent';
import { Toaster, toast } from 'react-hot-toast';
const CustomQuote = () => {
    const [loading, setLoading] = useState(false)
    const router = useRouter();
    const [data, setData] = useState('')
    const handleChange = (e) => {
        e.preventDefault();
        setData({ ...data, [e.target.name]: e.target.value })
        console.log(data)
    }
    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        let response = await fetch('/api/quote/add', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify({ data, adminPin: process.env.NEXT_PUBLIC_ADMIN_PIN })
        })
        let json = await response.json();
        setLoading(false)
        if (json.success) {
            toast.success(json.msg)
        } else {
            toast.error(json.msg)
        }
    }
    return (
        <>
            <Toaster position="top-right" />
            <div className="w-full min-h-screen overflow-y-auto md:mt-0 mt-[56] p-4 bg-[rgb(246,248,252)]">
                <h2 className="font-bold text-lg text-center text-red-600 mt-16">Get A Custom Quote for Your Desired Holiday Package</h2>
                <form onSubmit={handleSubmit} className="">
                    <div className="grid gap-4 grid-cols-1 md:grid-cols-2 bg-white rounded p-4 mt-5">
                        <TextField required className='w-full' inputProps={{ required: true }} onChange={handleChange} name='name' label="Name" variant="outlined" />
                        <TextField required className='w-full' inputProps={{ required: true }} onChange={handleChange} name='email' label="Email" variant="outlined" />
                        <TextField required className='w-full' inputProps={{ required: true, inputMode: 'numeric' }} onChange={handleChange} name='phone' label="Phone" variant="outlined" />
                        <TextField required className='w-full' inputProps={{ required: true, inputMode: 'numeric' }} onChange={handleChange} name='pax' label="Number of Pax" variant="outlined" />
                        <TextField required className='w-full' inputProps={{ required: true }} onChange={handleChange} name='departureCity' label="Departure City" variant="outlined" />
                        <TextField required className='w-full' inputProps={{ required: true }} onChange={handleChange} name='destinationCity' label="Destination City" variant="outlined" />
                        <TextField required className='w-full' inputProps={{ required: true, inputMode: 'numeric' }} onChange={handleChange} name='days' label="No of days" variant="outlined" />
                        <DatePicker required disablePast label="Departure Date" variant="standard" onChange={(value) => { setData({ ...data, date: value.$d }) }} />
                        <textarea onChange={handleChange} name="message" placeholder='Message' className='col-span-2 focus:outline focus:border-none focus:outline-blue-400 p-2 rounded-sm border border-gray-400'></textarea>
                    </div>
                {
                    !loading &&
                    <div className="flex justify-end">
                        <Button type='submit' variant='contained'  color='primary' className='my-4 '>Submit</Button>
                    </div>
                }
                {
                    loading &&
                    <BackdropComponent/>
                }
                </form>
            </div>
        </>
    )
}

export default CustomQuote