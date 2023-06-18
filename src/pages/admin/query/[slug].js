import React, { useState, useEffect } from 'react'
import IconButton from '@mui/material/IconButton';
import MenuRoundedIcon from '@mui/icons-material/MenuRounded';
import Sidebar from '../../../../components/admin/Sidebar';
import QueryDetails from '../../../../components/admin/QueryDetails';
import { useRouter } from 'next/router';
const page = () => {
    const router = useRouter();
    const { slug } = router.query;
    const [data, setData] = useState('')
    const fetchQuery = async () => {
        const response = await fetch('/api/query/getone', {
            method: 'POST',
            headers: {
                'content-type': 'application/json',
            },
            body: JSON.stringify({ 'adminPin': process.env.NEXT_PUBLIC_ADMIN_PIN, id: slug })
        });
        let json = await response.json();
        console.log(json)
        if (json.success) {
            setData(json.query)
        } else {
            setData('')
        }
    }
    useEffect(() => {
        fetchQuery();
    }, [slug])
    const toggleSidebar = () => {
        if (typeof window != undefined) {
            let sidebar = document.querySelector('#sidebar');
            if (sidebar.classList.contains('-left-full')) {
                sidebar.classList.remove('-left-full');
                sidebar.classList.add('left-0')
            } else {
                sidebar.classList.remove('left-0')
                sidebar.classList.add('-left-full');
            }
        }
    }
   
    return (
        <>
            <div className="container mx-auto h-screen grid grid-cols-1 md:grid-cols-5">
                <Sidebar activeTab={''} />
                <div className="col-span-4 h-screen ">
                    <div className="w-full p-2 z-10 md:hidden fixed top-0 flex gap-1 items-center  bg-[rgb(246,248,252)] border-b border-gray-300">
                        <IconButton onClick={toggleSidebar} aria-label="menu" color='primary'>
                            <MenuRoundedIcon />
                        </IconButton>
                        <h2 className="font-bold">Admin</h2>
                    </div>
                    <QueryDetails data={data} />
                </div>
            </div>
        </>
    )
}

export default page