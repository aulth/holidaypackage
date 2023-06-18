import React from 'react'
import Navbar from '../../../components/blog/Navbar'
import Head from 'next/head'
import ArticleComponent from '../../../components/blog/article/ArticleComponent'
import Footer from '../../../components/Footer'
const Page = ({ data, slug }) => {
    return (
        <>
            <Navbar />
            {data && data.live && (
                <>
                    <Head>
                        {/* Meta tags */}
                        <title>{data.title.slice(0, 69)}</title>
                        <meta name="title" content={data.title.slice(0, 69)} />
                        <meta name="description" content={data.content.slice(0, 150).replace(/<[^>]+>/g, '')} />
                    </Head>
                    <ArticleComponent data={data} />
                </>
            )}
            {!data && (
                <div className="container m-auto md:px-12 px-4 py-4">
                    This article is not available {slug}
                </div>
            )}
            {data && !data.live && (
                <div className="container m-auto md:px-12 px-4 py-4">This article has been made private</div>
            )}
            <Footer />
        </>
    )
}

export default Page

export async function getServerSideProps(context) {
    const { slug } = context.params
    const response = await fetch(`${process.env.NEXT_PUBLIC_DOMAIN}/api/blog/fetchone`, {
        method: 'POST',
        headers: {
            'content-type': 'application/json',
        },
        body: JSON.stringify({ link: slug }),
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
            slug: slug
        },
    }
}