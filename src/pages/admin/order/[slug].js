import React, { useState, useEffect } from 'react'
import IconButton from '@mui/material/IconButton';
import MenuRoundedIcon from '@mui/icons-material/MenuRounded';
import OrderDetails from '../../../../components/admin/OrderDetails';
import { useRouter } from 'next/router';
import Sidebar from '../../../../components/admin/Sidebar';
const page = () => {
    const router = useRouter();
    const {slug} = router.query
    const [data, setData] = useState('')
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
    const fetchOrder = async ()=>{
        const response = await fetch(process.env.NEXT_PUBLIC_DOMAIN + '/api/booking/getone', {
            method: 'POST',
            headers: {
                'content-type': 'application/json',
            },
            body: JSON.stringify({ 'adminPin': process.env.NEXT_ADMIN_PIN, bookingNumber: slug })
        });
        let json = await response.json();
        if (json.success) {
            setData(json.order)
        } else {
            setData('')
        }
    }
    useEffect(() => {
    }, [])
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
                    {
                        data &&
                        <OrderDetails data={data} />
                    }
                    {
                        !data &&

                        <div className="w-full  md:h-screen h-[calc(100vh-56px)] overflow-y-auto md:mt-0 mt-[56px] p-4 bg-[rgb(246,248,252)]">
                            <div className="rounded bg-white p-4">
                                <h2 className="font-bold text-sm text-center">Order Not Found</h2>
                            </div>
                        </div>
                    }
                </div>
            </div>
        </>
    )
}

export default page
export async function getServerSideProps(context) {
    const { slug } = context.params;
    
    return {
        props: {
            data: json,
        }, // will be passed to the page component as props
    }
}