import React from 'react'
import PlaceOutlinedIcon from '@mui/icons-material/PlaceOutlined';
import AssistantPhotoOutlinedIcon from '@mui/icons-material/AssistantPhotoOutlined';
import { Button } from '@mui/material';
const getFormattedDate = (str) => {
    const date = new Date(str);
    const month = date.toLocaleString('default', { month: 'long' });
    const day = date.getDate();
    const year = date.getFullYear();
    const formattedDate = `${month} ${day}, ${year}`;
    return formattedDate;
}
const DateComponent = ({content}) => {
   
    return (
        <div className="w-full flex justify-between items-center rounded-full border bg-gray-100 p-3 mt-4">
            <div className="flex gap-2 items-center">
                <div className="rounded-full bg-red-100 aspect-square w-9 flex justify-center items-center p-1">
                    <PlaceOutlinedIcon className='text-red-400 text-sm' />
                </div>
                <div className='-mt-0.5'>
                    <span className='text-xs'>Start</span>
                    <p className="font-semibold text-sm -mt-0.5">{getFormattedDate(content.start)}</p>
                </div>
            </div>
            <div className="flex gap-2 items-center">
                <div className="rounded-full bg-green-100 aspect-square w-9 flex justify-center items-center p-1">
                    <AssistantPhotoOutlinedIcon className='text-green-400 text-sm' />
                </div>
                <div className='-mt-0.5'>
                    <span className='text-xs'>Finish</span>
                    <p className="font-semibold text-sm -mt-0.5">{getFormattedDate(content.finish)}</p>
                </div>
            </div>
            <Button variant='contained' style={{borderRadius:9999, background:'rgb(239 68 68)'}} color='error' className='rounded-full bg-red-500'>Enquiry</Button>
        </div>
    )
}

export default DateComponent