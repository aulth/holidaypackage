import React, { useEffect, useState } from 'react'
import { Button, TextField } from '@mui/material';
import ChooseHighlight from './ChooseHighlight';
import ChooseCountry from './ChooseCountry';
import 'react-quill/dist/quill.snow.css';
import dynamic from 'next/dynamic';
import modules from '../../quillmodule'
import AddItinerary from './AddItinerary';
import AddInclusions from './AddInclusions';
import AddExclusions from './AddExclusions';
import { DatePicker } from '@mui/x-date-pickers';
import AddFlight from './AddFlight';
import UploadPhoto from './UploadPhoto';
import { useRouter } from 'next/router';
import BackdropComponent from '../../BackdropComponent';
const QuillNoSSRWrapper = dynamic(import('react-quill'), {
    ssr: false,
    loading: () => <p>Loading ...</p>,
})

const Add = () => {
    const [loading, setLoading] = useState(false)
    const router = useRouter();
    const [data, setData] = useState({
        flights: {
            depart: {},
            return: {},
        },
    })
    const handleChange = (e) => {
        e.preventDefault();
        setData({ ...data, [e.target.name]: e.target.value })
        console.log(data);
    }
    const handlePriceChange = (e) => {
        e.preventDefault();
        setData((prevData) => ({
            ...prevData, price: {
                ...prevData.price,
                [e.target.name]: e.target.value
            }
        }))
    }
    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        console.log(data)
        let response = await fetch('/api/package/add', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify({ data, adminPin: process.env.NEXT_ADMIN_PIN })
        })
        let json = await response.json();
        setLoading(false)
        if (json.success) {
            router.push('/admin/package');
        } else {
            alert(json.msg)
        }
    }
    return (
        <>
            <div className="w-full  md:h-screen h-[calc(100vh-56px)] overflow-y-auto md:mt-0 mt-[56px] p-4 bg-[rgb(246,248,252)]">
                <form onSubmit={handleSubmit} className="bg-white rounded p-4">
                    <h2 className="font-bold my-2">Add Package</h2>
                    <div className="grid gap-2 grid-cols-1 md:grid-cols-2">
                        <TextField className='w-full' inputProps={{ required: true }} onChange={handleChange} name='title' label="Title" variant="standard" />
                        <TextField className='w-full' inputProps={{ required: true }} onChange={handleChange} name='duration' label="Duration" variant="standard" />
                        <ChooseHighlight data={data} setData={setData} />
                        <ChooseCountry setData={setData} />
                        <DatePicker disablePast label="Start" onChange={(value) => { setData({ ...data, start: value }) }} className='mt-3' />
                        <DatePicker disablePast label="Finish" onChange={(value) => { setData({ ...data, finish: value }) }} className='mt-3' />
                    </div>
                    <div className="grid grid-cols-1 gap-2 mt-4">
                        <div className="w-full">
                            <h3 className="font-bold text-sm  mb-2">
                                Overview
                            </h3>
                            <QuillNoSSRWrapper onChange={(value) => { setData({ ...data, overview: value }) }} placeholder='Overview' modules={modules} theme="snow" />
                        </div>
                        <AddItinerary setData={setData} />
                        <div className="grid grid-cols-1 gap-3 md:grid-cols-2">
                            <AddInclusions setData={setData} />
                            <AddExclusions setData={setData} />
                        </div>
                        <AddFlight setData={setData} data={data} />
                        <h3 className="font-bold text-sm  mt-2">
                            Price
                        </h3>
                        <div className="grid grid-cols-1 gap-3 md:grid-cols-2">
                            <TextField className='w-full mt-1' inputProps={{ required: true, inputMode: 'numeric' }} onChange={handlePriceChange} name='adultSingle' label="Adult Single Occupancy" variant="outlined" />
                            <TextField className='w-full md:mt-1' inputProps={{ required: true, inputMode: 'numeric' }} onChange={handlePriceChange} name='adultDouble' label="Adult Double Occupancy" variant="outlined" />
                            <TextField className='w-full ' inputProps={{ required: true, inputMode: 'numeric' }} onChange={handlePriceChange} name='adultTriple' label="Adult Triple Occupancy" variant="outlined" />
                            <TextField className='w-full ' inputProps={{ required: true, inputMode: 'numeric' }} onChange={handlePriceChange} name='child' label="Child" variant="outlined" />
                            <TextField className='w-full ' inputProps={{ required: true, inputMode: 'numeric' }} onChange={handlePriceChange} name='infant' label="Infant" variant="outlined" />
                        </div>
                        <div className="w-full mt-2">
                            <h3 className="font-bold text-sm  mb-2">
                                Terms and Conditions
                            </h3>
                            <QuillNoSSRWrapper onChange={(value) => { setData({ ...data, termConditions: value }) }} placeholder='termConditions' modules={modules} theme="snow" />
                        </div>
                        <div className="w-full mt-2">
                            <h3 className="font-bold text-sm  mb-2">
                                Photos
                            </h3>
                            <UploadPhoto data={data} setData={setData} />
                        </div>
                        {
                            !loading &&
                            <Button disabled={!data.title || !data.gallery || !data.duration || !data.highlights || !data.overview || !data.itinerary || !data.inclusions || !data.exclusions || !data.start || !data.finish || !data.price || !data.termConditions} type='submit' variant='contained' color='primary'>Add Package</Button>
                        }
                        {
                            loading && <BackdropComponent />
                        }
                    </div>
                </form>
            </div>
        </>
    )
}

export default Add