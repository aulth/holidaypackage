import React, { useEffect, useState } from 'react'
import Navbar from '../../../components/Packages/Navbar'
import Carousel from '../../../components/Carousel'
import DoneOutlinedIcon from '@mui/icons-material/DoneOutlined';
import Link from 'next/link';
import { Button } from '@mui/material';
import Footer from '../../../components/Footer';
import NotFound from '../../../components/NotFound';
const page = ({ data, allPackage }) => {
    useEffect(() => {

    }, [])
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
            {
                data &&
                <>
                    <Navbar />
                    <Carousel content={allPackage} />
                    <div className="container mx-auto mt-8">
                        <h2 className="text-xl text-red-600 font-bold text-center ">{data && data.length > 0 && data[0].country} Packages</h2>
                        <div className="w-full grid md:grid-cols-3 grid-cols-1 gap-4 p-8 pb-4">
                            {
                                data && data.length > 0 &&
                                data.map((item, index) => {
                                    return <div key={index} className="rounded shadow hover:shadow-xl duration-100 relative">
                                        <img src={item.gallery[0]} className='aspect-video rounded object-cover' alt="" />
                                        <div className="w-full p-4">
                                            <h3 className="font-bold text-red-600">{item.title}</h3>
                                            <h4 className="text-sm"> <span className="font-bold">Valid till: </span> {formatDate(item.start)}</h4>
                                            <p className="text-sm">{extractPlainText(item.overview).slice(0, 150)}</p>
                                            <Link href={`/package/${item.link}`}>
                                                <Button variant='contained' startIcon={<DoneOutlinedIcon />} color='error' className='w-full px-4 py-2 text-center mt-4 bg-red-600'>Book Now</Button>
                                            </Link>
                                        </div>
                                    </div>
                                })
                            }
                        </div>
                    </div>
                    <Footer />
                </>
            }
            {
                !data &&
                <NotFound />
            }
        </>
    )
}

export default page
export async function getServerSideProps(context) {
    let { slug } = context.params
    slug = slug.toLowerCase();
    let data = await fetch(`${process.env.NEXT_PUBLIC_DOMAIN}/api/package/getall`);
    data = await data.json();
    data = data.packages
    let allPackage = data;
    data = data.filter(item => item.country.toLowerCase().split(' ').join('-') == slug);
    if (data.length > 0) {
        data = data
    } else {
        data = "";
    }
    return {
        props: {
            data: data,
            allPackage: allPackage
        }, // will be passed to the page component as props
    }
}