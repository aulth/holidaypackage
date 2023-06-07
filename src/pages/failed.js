import React, { useState, useEffect } from 'react'
import Navbar from '../../components/Visa/Navbar'
import CancelRoundedIcon from '@mui/icons-material/CancelRounded';
const page = () => {
    return (
        <>
            <Navbar />
            <hr className='mt-[60px]' />
            <div className="w-full bg-gray-50 p-4 min-h-[calc(100vh-61px)] flex justify-center items-center">
                <div className="md:w-96 w-full bg-white rounded border border-gray-200">
                    <div className="w-full flex justify-center py-2 mt-4">
                        <CancelRoundedIcon className='text-red-600 text-4xl' />
                    </div>
                    <h2 className="font-bold text-center">
                        Order failed!
                    </h2>
                    <p className="text-sm text-center">Your order could not be completed</p>
                    <br />
                    <hr />
                </div>
            </div>
        </>
    )
}

export default page