import React from 'react'
import Navbar from '../../../components/blog/Navbar'
import PostComment from '../../../components/blog/article/PostComment'
import Comment from '../../../components/blog/article/Comment'
import Popular from '../../../components/blog/home/Popular'
import Subscribe from '../../../components/blog/home/Subscribe'
const Page = ({ data, slug }) => {
    return (
        <>
            <Navbar />
            {data && JSON.stringify(data)}
            <div className="container m-auto flex gap-4 flex-col xl:flex-row xl:px-16 px-4 py-4">
                <div className="w-full flex flex-col gap-4 xl:w-[60%]">
                    {/* <div className="w-full rounded-lg bg-white ">
                        <Body data={data} />
                    </div> */}
                    {/* <div className="w-full rounded-lg bg-white ">
                        <YouMightLike category={data.category} />
                    </div> */}
                    <div className="w-full rounded-lg bg-white ">
                        <Comment data={data.remarks} />
                    </div>
                    <div className="w-full rounded-lg bg-white ">
                        <PostComment id={data._id} />
                    </div>
                </div>
                <aside className="w-full flex flex-col gap-4 xl:w-[40%]">
                    <div className="w-full rounded-lg bg-white">
                        <Popular />
                    </div>
                    <div className="w-full rounded-lg bg-white">
                        <Subscribe />
                    </div>
                </aside>
            </div>
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