import React, { useEffect, useState } from 'react'
import Link from 'next/link';
import { Skeleton } from '@mui/material';
const Popular = () => {
    const [data, setData] = useState();
    const getFormattedDate = (str) => {
        const date = new Date(str);
        const month = date.toLocaleString('default', { month: 'long' });
        const day = date.getDate();
        const year = date.getFullYear();
        const formattedDate = `${month} ${day}, ${year}`;
        return formattedDate;
    }
    const fetchData = async () => {
        const response = await fetch('/api/blog/fetchall');
        var json = await response.json();
        if (json.success) {
            json = json.article;
            json?.sort((a, b) => b.views - a.views);
            json = json.filter(item => item.live)
            setData(json);
        }
    }
    useEffect(() => {
        fetchData();
    }, [])

    return (
        <div className="w-full flex gap-4 flex-col p-4">
            <h2 className="font-bold">Popular Articles</h2>
            {
                data && data.length > 0 &&
                <div className='rounded-lg h-60 w-full border border-gray-200 relative flex items-end'>
                    <img src={data && data[0]?.cover} className='h-full w-full object-cover rounded-lg absolute top-0' alt="" />
                    <div className="w-full rounded-lg h-60  absolute top-0 bg-gradient-to-tr from-gray-700 to-transparent"></div>
                    <div className="w-full p-4 z-10 text-white">
                        <button className="text-sm">{data && data[0]?.category[0].toUpperCase()}{data && data[0]?.category.slice(1).toLowerCase()}</button>
                        <Link href={`/blog/${data && data[0]?.link}`} ><h2 className="font-bold text-xl">{data && data[0]?.title.slice(0, 58)}{data && data[0]?.title.length > 57 ? ".." : ""}</h2></Link>
                        <span className='text-sm'>{getFormattedDate(data && data[0]?.createdAt)}</span>
                    </div>
                </div>
            }
            {
                data && data.length <= 0 &&
                <>
                    <div className='rounded-lg h-60 w-full border border-gray-200 relative flex flex-col items-end'>
                        <Skeleton
                            variant="rectangular"
                            animation="wave"
                            height="100%"
                            width="100%"
                            className="absolute top-0 rounded-lg"
                        />
                        <div className="w-full rounded-lg h-60 absolute top-0 bg-gradient-to-tr from-gray-700 to-transparent"></div>
                        <div className="w-full p-4 z-10 text-white">
                            <Skeleton
                                animation="wave"
                                height={20}
                                width={80}
                                style={{ marginBottom: '0.5rem' }}
                            />
                            <Skeleton
                                animation="wave"
                                height={36}
                                width="90%"
                                style={{ marginBottom: '0.5rem' }}
                            />
                            <Skeleton
                                animation="wave"
                                height={16}
                                width={80}
                            />
                        </div>
                    </div>
                </>
            }
            <div className='rounded-lg  w-full  relative flex flex-col gap-4 '>
                {
                    data && data.length > 0 &&
                    data.map((data, index) => {
                        if (index == 0 || index >= 5) {
                            return;
                        }
                        return <div key={index} className="w-full h-16 flex gap-2 justify-start">
                            <div className='w-24 rounded shrink-0'>
                                <img src={data.cover} className='w-full h-full object-cover rounded-lg' alt="" />
                            </div>
                            <div className="flex flex-col">
                                <Link href={`/blog/${data?.link}`} className="font-semibold h-16 overflow-hidden leading-5 hover:text-red-500">{data && data?.title}</Link>
                                <span className='text-sm'>{getFormattedDate(data && data?.createdAt)}</span>
                            </div>
                        </div>
                    })
                }{
                    data && data.length <= 0 &&
                    <>
                    <BlogItemSkelton/>
                    <BlogItemSkelton/>
                    <BlogItemSkelton/>
                    <BlogItemSkelton/>
                    </>
                }
            </div>
        </div>
    )
}

function BlogItemSkelton() {
    return <div className="w-full h-16 flex gap-2 justify-start">
        <div className='w-24 rounded shrink-0'>
            <Skeleton
                variant="rectangular"
                animation="wave"
                height="100%"
                width="100%"
                className="rounded-lg"
            />
        </div>
        <div className="flex w-full flex-col">
            <Skeleton
                animation="wave"
                height={20}
                width="80%"
                style={{ marginBottom: '0.5rem' }}
            />
            <Skeleton
                animation="wave"
                height={16}
                width="40%"
            />
        </div>
    </div>
}
export default Popular