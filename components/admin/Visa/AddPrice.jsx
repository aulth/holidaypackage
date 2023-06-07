import React from 'react'
import AddRoundedIcon from '@mui/icons-material/AddRounded';
import { Button, TextField } from '@mui/material';
import 'react-quill/dist/quill.snow.css';
import dynamic from 'next/dynamic';
import modules from '../../quillmodule'
const QuillNoSSRWrapper = dynamic(import('react-quill'), {
    ssr: false,
    loading: () => <p>Loading ...</p>,
})

const AddPrice = () => {
    return (
        <>
            <div className="w-full mt-2">
                <h3 className="font-bold text-sm mb-4">
                    Depart
                </h3>
                <div className="w-full flex gap-2 items-center mt-2">
                    <TextField inputProps={{ required: true }} onChange={(e) => handleItineraryChange(e, field.id, 'highlight')} label="Logo" name='highlight' variant="outlined" />
                    <TextField inputProps={{ required: true }} onChange={(e) => handleItineraryChange(e, field.id, 'title')} label="Flight" name='title' className='w-full' variant="outlined" />
                </div>
                <h3 className="font-semibold text-sm my-2">From</h3>
                <div className="w-full flex gap-2 items-center">
                    <TextField inputProps={{ required: true }} onChange={(e) => handleItineraryChange(e, field.id, 'highlight')} label="Airport Code" name='highlight' variant="outlined" />
                    <TextField inputProps={{ required: true }} onChange={(e) => handleItineraryChange(e, field.id, 'title')} label="Airport Name" name='title' className='w-full' variant="outlined" />
                </div>
                <h3 className="font-semibold text-sm my-2">To</h3>
                <div className="w-full flex gap-2 items-center">
                    <TextField inputProps={{ required: true }} onChange={(e) => handleItineraryChange(e, field.id, 'highlight')} label="Airport Code" name='highlight' variant="outlined" />
                    <TextField inputProps={{ required: true }} onChange={(e) => handleItineraryChange(e, field.id, 'title')} label="Airport Name" name='title' className='w-full' variant="outlined" />
                </div>
                <div className="w-full mt-4 flex gap-2 items-center">
                    <TextField inputProps={{ required: true }} onChange={(e) => handleItineraryChange(e, field.id, 'highlight')} label="Depart Time" name='highlight' className='w-full' variant="outlined" />
                    <TextField inputProps={{ required: true }} onChange={(e) => handleItineraryChange(e, field.id, 'title')} label="Arrival Time" name='title' className='w-full' variant="outlined" />
                </div>
            </div>
        </>
    )
}

export default AddPrice