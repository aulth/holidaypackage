import React, { useEffect, useState } from 'react'
import Navbar from '../../../components/Packages/Navbar'

import NotFound from '../../../components/NotFound';
import Booking from '../../../components/Visa/Book/Booking';
import ArticleComponent from '../../../components/blog/article/ArticleComponent';
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
                <div className="overflow-x-hidden h-screen relative ">
                    <Navbar />
                    {/* Tour Details Menu  */}
                    {/* <ArticleComponent data={data} /> */}
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