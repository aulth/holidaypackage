import React from 'react'
import Navbar from '../../../components/blog/Navbar'

const page = ({ data, slug }) => {
    return (
        <>
            <Navbar />
            {data && JSON.stringify(data)}
            {slug}
        </>
    )
}

export default page

export async function getServerSideProps(context) {
    const {slug} = context.params
    // const response = await fetch(`${process.env.NEXT_PUBLIC_DOMAIN}/api/blog/fetchone`, {
    //     method: 'POST',
    //     headers: {
    //         'content-type': 'application/json',
    //     },
    //     body: JSON.stringify({ link: 'the-power-of-exercise-physical-and-mental-benefits' }),
    // });

    // let data = await response.json();
    // console.log(data)
    // if (data.success) {
    //     data = data.article;
    // } else {
    //     data = null;
    // }
    const data = ""
    return {
        props: {
            data: data,
            slug:slug
        },
    }
}