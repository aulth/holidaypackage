import React from 'react'
import Navbar from '../../../components/blog/Navbar'
import ArticleComponent from '../../../components/blog/article/ArticleComponent'

const page = ({ data }) => {
    return (
        <>
            <Navbar />
            {data && JSON.stringify(data)}
        </>
    )
}

export default page

export async function getServerSideProps(context) {
    const {slug} = context.params
    console.log(slug)
    const response = await fetch(`${process.env.NEXT_PUBLIC_DOMAIN}/api/blog/fetchone`, {
        method: 'POST',
        headers: {
            'content-type': 'application/json',
        },
        body: JSON.stringify({ link: 'the-power-of-exercise-physical-and-mental-benefits' }),
    });

    let data = await response.json();
    console.log(data)
    if (data.success) {
        data = data.article;
    } else {
        data = null;
    }
    return {
        props: {
            data: data,
        },
    }
}