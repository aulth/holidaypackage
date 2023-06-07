import React from 'react';
import WhatshotOutlinedIcon from '@mui/icons-material/WhatshotOutlined';

const WhyBookWithUs = () => {
    return (
        <>
            <div className="container mx-auto my-8">
                <h2 className="text-xl text-red-600 font-bold text-center ">Why Book With Us?</h2>
                <div className="w-full grid md:grid-cols-3 grid-cols-1 gap-4 p-8 pb-0">
                    <div className="rounded shadow  duration-100 relative p-4 border">
                        <div className="w-full flex gap-2 flex-col  justify-center items-center">
                        <img src="https://source.unsplash.com/random/?competitive/" className='aspect-square object-cover w-24 rounded-full' alt="" />
                        <h3 className="font-bold text-lg">
                        Competitive Prices
                        </h3>
                        </div>
                        <p className="text-center">Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic iusto recusandae laborum ab rem.</p>
                    </div>
                    <div className="rounded shadow   duration-100 relative p-4 border">
                        <div className="w-full flex gap-2 flex-col  justify-center items-center">
                        <img src="https://source.unsplash.com/random/?destination/" className='aspect-square object-cover w-24 rounded-full' alt="" />
                        <h3 className="font-bold text-lg">
                        Wide Range of Destinations
                        </h3>
                        </div>
                        <p className="text-center">Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic iusto recusandae laborum ab rem.</p>
                    </div>
                    <div className="rounded shadow   duration-100 relative p-4 border">
                        <div className="w-full flex gap-2 flex-col  justify-center items-center">
                        <img src="https://source.unsplash.com/random/?customer-service/" className='aspect-square object-cover w-24 rounded-full' alt="" />
                        <h3 className="font-bold text-lg">
                        Exceptional Customer Service
                        </h3>
                        </div>
                        <p className="text-center">Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic iusto recusandae laborum ab rem.</p>
                    </div>
                </div>
            </div>
        </>
    );
};

export default WhyBookWithUs;
