import React from 'react';
import WhatshotOutlinedIcon from '@mui/icons-material/WhatshotOutlined';
import { Button } from '@mui/material';
import DoneOutlinedIcon from '@mui/icons-material/DoneOutlined';
const TrendingPackages = () => {
    return (
        <>
            <div className="container mx-auto mt-8">
                <h2 className="text-xl text-red-600 font-bold text-center "><WhatshotOutlinedIcon className='-mt-1.5'  /> Trending Holidays Packages</h2>
                <div className="w-full grid md:grid-cols-3 grid-cols-1 gap-4 p-8 pb-0">
                    <div className="rounded shadow hover:shadow-xl duration-100 relative">
                        <span className="bg-red-600 text-white absolute top-0 left-0 p-1 flex justify-center items-center text-sm">
                            #1
                        </span>
                        <img src="https://source.unsplash.com/random/?armenia/" className='aspect-video rounded object-cover' alt="" />
                        <div className="w-full p-4">
                            <h3 className="font-bold text-red-600">Armenia Tour Package</h3>
                            <h4 className="text-sm"> <span className="font-bold">Valid till: </span> 30/02/2030</h4>
                            <p className="text-sm">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Cupiditate deleniti veniam neque voluptate dolorum quos minima porro.</p>
                            <Button variant='contained' startIcon={<DoneOutlinedIcon />} color='error' className='w-full px-4 py-2 text-center mt-4 bg-red-600'>Book Now</Button>
                        </div>
                    </div>
                    <div className="rounded shadow hover:shadow-xl duration-100 relative">
                        <span className="bg-red-600 text-white absolute top-0 left-0 p-1 flex justify-center items-center text-sm">
                            #2
                        </span>
                        <img src="https://source.unsplash.com/random/?new-york/" className='aspect-video rounded object-cover' alt="" />
                        <div className="w-full p-4">
                            <h3 className="font-bold text-red-600">New York Tour Package</h3>
                            <h4 className="text-sm"> <span className="font-bold">Valid till: </span> 30/02/2030</h4>
                            <p className="text-sm">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Cupiditate deleniti veniam neque voluptate dolorum quos minima porro.</p>
                            <Button variant='contained' startIcon={<DoneOutlinedIcon />} color='error' className='w-full px-4 py-2 text-center mt-4 bg-red-600'>Book Now</Button>
                        </div>
                    </div>
                    <div className="rounded shadow hover:shadow-xl duration-100 relative">
                        <span className="bg-red-600 text-white absolute top-0 left-0 p-1 flex justify-center items-center text-sm">
                            #3
                        </span>
                        <img src="https://source.unsplash.com/random/?germany/" className='aspect-video rounded object-cover' alt="" />
                        <div className="w-full p-4">
                            <h3 className="font-bold text-red-600">Germany Tour Package</h3>
                            <h4 className="text-sm"> <span className="font-bold">Valid till: </span> 30/02/2030</h4>
                            <p className="text-sm">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Cupiditate deleniti veniam neque voluptate dolorum quos minima porro.</p>
                            <Button variant='contained' startIcon={<DoneOutlinedIcon />} color='error' className='w-full px-4 py-2 text-center mt-4 bg-red-600'>Book Now</Button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default TrendingPackages;
