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

const AddFlight = ({setData, data}) => {
    const handleChange = (e, type) => {
        const { name, value } = e.target;
    
        setData((prevData) => ({
            ...prevData,
            flights: {
                ...prevData.flights,
                [type]: {
                    ...prevData.flights[type],
                    [name]: value,
                },
            },
        }));
    };
    
    return (
        <>
            <div className="w-full mt-2">
                <h3 className="font-bold text-sm mb-4">
                    Depart
                </h3>
                <div className="w-full flex gap-2 items-center mt-2">
                    <TextField inputProps={{ required: true }}  label="Logo"  onChange={(e)=>{handleChange(e, 'depart')}} name='logo' variant="outlined" />
                    <TextField inputProps={{ required: true }}  onChange={(e)=>{handleChange(e, 'depart')}} label="Flight" name='flight' className='w-full' variant="outlined" />
                </div>
                <h3 className="font-semibold text-sm my-2">From</h3>
                <div className="w-full flex gap-2 items-center">
                    <TextField inputProps={{ required: true }}   onChange={(e)=>{handleChange(e, 'depart')}} label="Airport Code" name='fromCode' variant="outlined" />
                    <TextField inputProps={{ required: true }}  onChange={(e)=>{handleChange(e, 'depart')}} label="Airport Name" name='from' className='w-full' variant="outlined" />
                </div>
                <h3 className="font-semibold text-sm my-2">To</h3>
                <div className="w-full flex gap-2 items-center">
                    <TextField inputProps={{ required: true }}   onChange={(e)=>{handleChange(e, 'depart')}} label="Airport Code" name='toCode' variant="outlined" />
                    <TextField inputProps={{ required: true }}  onChange={(e)=>{handleChange(e, 'depart')}} label="Airport Name" name='to' className='w-full' variant="outlined" />
                </div>
                <div className="w-full mt-4 flex gap-2 items-center">
                    <TextField inputProps={{ required: true }}   onChange={(e)=>{handleChange(e, 'depart')}} label="Depart Time" name='depart' className='w-full' variant="outlined" />
                    <TextField inputProps={{ required: true }}  onChange={(e)=>{handleChange(e, 'depart')}} label="Arrival Time" name='arrive' className='w-full' variant="outlined" />
                    <TextField inputProps={{ required: true }}  onChange={(e)=>{handleChange(e, 'depart')}} label="Class" name='class' className='w-full' variant="outlined" />

                </div>
            </div>
            <div className="w-full mt-2">
                <h3 className="font-bold text-sm mb-4">
                    Return
                </h3>
                <div className="w-full flex gap-2 items-center mt-2">
                    <TextField inputProps={{ required: true }}   onChange={(e)=>{handleChange(e, 'return')}} label="Logo" name='logo' variant="outlined" />
                    <TextField inputProps={{ required: true }}  onChange={(e)=>{handleChange(e, 'return')}} label="Flight" name='flight' className='w-full' variant="outlined" />
                </div>
                <h3 className="font-semibold text-sm my-2">From</h3>
                <div className="w-full flex gap-2 items-center">
                    <TextField inputProps={{ required: true }}   onChange={(e)=>{handleChange(e, 'return')}} label="Airport Code" name='fromCode' variant="outlined" />
                    <TextField inputProps={{ required: true }}  onChange={(e)=>{handleChange(e, 'return')}} label="Airport Name" name='from' className='w-full' variant="outlined" />
                </div>
                <h3 className="font-semibold text-sm my-2">To</h3>
                <div className="w-full flex gap-2 items-center">
                    <TextField inputProps={{ required: true }}   onChange={(e)=>{handleChange(e, 'return')}} label="Airport Code" name='toCode' variant="outlined" />
                    <TextField inputProps={{ required: true }}  onChange={(e)=>{handleChange(e, 'return')}} label="Airport Name" name='to' className='w-full' variant="outlined" />
                </div>
                <div className="w-full mt-4 flex gap-2 items-center">
                    <TextField inputProps={{ required: true }}   onChange={(e)=>{handleChange(e, 'return')}} label="Depart Time" name='depart' className='w-full' variant="outlined" />
                    <TextField inputProps={{ required: true }}  onChange={(e)=>{handleChange(e, 'return')}} label="Arrival Time" name='arrive' className='w-full' variant="outlined" />
                    <TextField inputProps={{ required: true }}  onChange={(e)=>{handleChange(e, 'return')}} label="Class" name='class' className='w-full' variant="outlined" />
                </div>
            </div>
        </>
    )
}

export default AddFlight