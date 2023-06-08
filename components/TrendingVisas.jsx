import React from 'react';
import WhatshotOutlinedIcon from '@mui/icons-material/WhatshotOutlined';
import RemoveRedEyeOutlinedIcon from '@mui/icons-material/RemoveRedEyeOutlined';
import { Button } from '@mui/material';
import Link from 'next/link';
const TrendingVisas = ({ top3Visas }) => {
    return (
        <>
            <div className="container mx-auto my-8">
                <h2 className="text-xl text-red-600 font-bold text-center"><WhatshotOutlinedIcon className='-mt-1.5' /> Trending Visas</h2>
                <div className="w-full grid md:grid-cols-3 grid-cols-1 gap-4 p-8 pb-0">
                    {
                        top3Visas && top3Visas.length > 0 &&
                        top3Visas.map((item, index) => {
                            return <div key={index} className="rounded shadow hover:shadow-xl duration-100 relative">
                                <span className="bg-red-600 text-white absolute top-0 left-0 p-1 flex justify-center items-center text-sm">
                                    #{index + 1}
                                </span>
                                <img src={item.gallery[0]} className='aspect-video rounded-t object-cover' alt="" />
                                <div className="w-full p-4">
                                    <h3 className="font-bold text-red-600 ">{item.title}</h3>
                                    <h4 className="text-sm font-bold">From: AED {item.price}</h4>
                                    <Link href={`/visa/${item.link}`}>
                                        <Button variant='contained' startIcon={<RemoveRedEyeOutlinedIcon />} color='error' className='w-full px-4 py-2 text-center mt-4 bg-red-600'>View Visa</Button>
                                    </Link>
                                </div>
                            </div>
                        })
                    }
                </div>
            </div>
        </>
    );
};

export default TrendingVisas;
