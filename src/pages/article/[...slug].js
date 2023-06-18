import React, { useEffect, useState } from 'react'
import Navbar from '../../../components/Packages/Navbar'
import Carousel from '../../../components/Visa/Carousel'
import IconButton from '@mui/material/IconButton';
import MenuOutlinedIcon from '@mui/icons-material/MenuOutlined';
import CloseOutlinedIcon from '@mui/icons-material/CloseOutlined';
import Itinerary from '../../../components/Packages/Itinerary';
import InclusionsExclusions from '../../../components/Packages/InclusionsExclusions';
import Flights from '../../../components/Packages/Flights';
import Overview from '../../../components/Packages/Overview';
import Pricing from '../../../components/Packages/Pricing';
import Gallery from '../../../components/Packages/Gallery';
import Date from '../../../components/Packages/DateComponent';
import TermsAndConditions from '../../../components/Packages/TermsAndConditions';
import BookNow from '../../../components/Packages/BookNow';
import MenuOpenOutlinedIcon from '@mui/icons-material/MenuOpenOutlined';
import NeedAssistance from '../../../components/Packages/NeedAssistance';
import MoreVisa from '../../../components/Visa/MoreVisa';
import Footer from '../../../components/Footer';
import Documents from '../../../components/Visa/Documents';
import NotFound from '../../../components/NotFound';
import Booking from '../../../components/Visa/Book/Booking';
const page = ({ data, link }) => {
    useEffect(() => {
        // incrementView();
    }, [])
    // const incrementView = async () => {
    //     const response = await fetch('/api/visa/incrementviews', {
    //         method: 'POST',
    //         headers: {
    //             'content-type': 'application/json',
    //         },
    //         body: JSON.stringify({ link: link })
    //     });
    // }
    return (
        <>
            {
                data &&
                <div className="overflow-x-hidden   h-screen relative ">
                    <Navbar />
                    {/* Tour Details Menu  */}
                    {JSON.stringify(data)}
                </div>
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
    const link = context.params.slug[0];
    let data = await fetch(`${process.env.NEXT_PUBLIC_DOMAIN}/api/blog/fetchall`);
    data = await data.json();
    data = data.article;
    data = data.filter(data => data.link == link);
    if (data.length > 0) {
        data = data[0];
    } else {
        data = "";
    }
    return {
        props: {
            data: data,
            link: link
        }, // will be passed to the page component as props
    }
}