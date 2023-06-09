import Link from 'next/link'
import React, { useEffect } from 'react'
import { AiOutlineShareAlt } from 'react-icons/ai'
import toast, { Toaster } from 'react-hot-toast';
import { RiPencilFill } from 'react-icons/ri'
const Body = ({ data }) => {
    const getFormattedDate = (str) => {
        const date = new Date(str);
        const month = date.toLocaleString('default', { month: 'long' });
        const day = date.getDate();
        const year = date.getFullYear();
        const formattedDate = `${month} ${day}, ${year}`;
        return formattedDate;
    }
    useEffect(() => {
        if (typeof window != undefined) {
            document.querySelector('.body').innerHTML = data.content;
        }
    }, [data])
    const shareData = {
        title: data.title,
        text: data.content.slice(0, 150).replace(/<[^>]+>/g, '') + "..",
        url: `${process.env.NEXT_PUBLIC_DOMAIN}/blog/article/${data.link}`
    };

    const sharePost = async () => {
        try {
            if (!navigator.canShare) {
                toast.error(`Your browser doesn't support the Web Share API.`);
                return;
            }
            await navigator.share(shareData);
        } catch (err) {
            // Handle cancellation or other errors
            if (err.name === 'AbortError') {
                toast.info('Share action cancelled.');
            } else {
                toast.error('Failed to share post.');
            }
        }
    };

    return (
        <>
            <Toaster position='top-right' />
            <div className="w-full rounded-lg p-4">
                <nav className="text-sm text-cyan-500">
                    <ol className='list-none p-0 text-black inline-flex gap-1'>
                        <li className="flex gap-1 items-center">
                            <Link href={'/blog'} className='hover:text-red-600 text-red-600 hover:underline'>Home</Link>
                            &gt;
                        </li>
                        {
                            data.category.split(', ').map((item, index) => (
                                <React.Fragment key={index}>
                                    <li className="flex items-center">
                                        <Link href={`/blog/category/${item.toLowerCase()}`} className="hover:text-red-700 text-red-600 hover:underline">
                                            {item.charAt(0).toUpperCase() + item.slice(1).toLowerCase()}
                                        </Link>
                                    </li>
                                    {index < data.category.split(' ').length - 1 && '>'}
                                </React.Fragment>
                            ))
                        }
                    </ol>
                </nav>
                <h1 className="font-bold text-2xl mt-2 capitalize">{data.title}</h1>
                <div className="w-full flex justify-between items-center text-sm mt-2">
                    <time class="text-gray-500 text-sm"><span class="mr-1">Published:</span> {getFormattedDate(data.createdAt)}</time>
                    <button onClick={sharePost} className='hover:text-cyan-500'><AiOutlineShareAlt /></button>
                </div>
                <main className='mt-4 body article-body clear-none'>
                </main>
            </div>
        </>
    )
}

export default Body