import React from 'react';
import WhatshotOutlinedIcon from '@mui/icons-material/WhatshotOutlined';
import { Button } from '@mui/material';
import DoneOutlinedIcon from '@mui/icons-material/DoneOutlined';
import Link from 'next/link';
const TrendingPackages = ({ top3Packages }) => {
    function formatDate(dateString) {
        const date = new Date(dateString);
        const day = date.getDate();
        const month = date.getMonth() + 1; // Months are zero-based, so we add 1
        const year = date.getFullYear();

        // Pad single-digit day and month with leading zero if needed
        const formattedDay = day < 10 ? '0' + day : day;
        const formattedMonth = month < 10 ? '0' + month : month;

        return formattedDay + '/' + formattedMonth + '/' + year;
    }
    function extractPlainText(html) {
        const plainText = html.replace(/<[^>]+>/g, '');
        return plainText.trim();
      }
    return (
        <>
            <div className="container mx-auto mt-8">
                <h2 className="text-xl text-red-600 font-bold text-center "><WhatshotOutlinedIcon className='-mt-1.5' /> Trending Holidays Packages</h2>
                <div className="w-full grid md:grid-cols-3 grid-cols-1 gap-4 p-8 pb-0">
                    {
                        top3Packages && top3Packages.length > 0 &&
                        top3Packages.map((item, index) => {
                            return <div key={index} className="rounded shadow hover:shadow-xl duration-100 relative">
                                <span className="bg-red-600 text-white absolute top-0 left-0 p-1 flex justify-center items-center text-sm">
                                    #{index + 1}
                                </span>
                                <img src={item.gallery[0]} className='aspect-video rounded object-cover' alt="" />
                                <div className="w-full p-4">
                                    <h3 className="font-bold text-red-600">{item.title}</h3>
                                    <h4 className="text-sm"> <span className="font-bold">Valid till: </span> {formatDate(item.start)}</h4>
                                    <p className="text-sm">{extractPlainText(item.overview).slice(0,150)}</p>
                                    <Link href={`/package/${item.link}`}>
                                        <Button variant='contained' startIcon={<DoneOutlinedIcon />} color='error' className='w-full px-4 py-2 text-center mt-4 bg-red-600'>Book Now</Button>
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

export default TrendingPackages;
