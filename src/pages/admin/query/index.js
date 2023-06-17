import React, { useState, useEffect } from 'react'
import IconButton from '@mui/material/IconButton';
import MenuRoundedIcon from '@mui/icons-material/MenuRounded';
import { useUserContext } from '../../../../cotext/contextapi';
import Sidebar from '../../../../components/admin/Sidebar';
import Orders from '../../../../components/admin/Orders';
const page = () => {
    const {allOrders, fetchAllOrders} = useUserContext();
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
    useEffect(() => {
      fetchAllOrders();
    }, [])
    return (
        <>
            <div className="container mx-auto h-screen grid grid-cols-1 md:grid-cols-5">
                <Sidebar activeTab={'home'}/>
                <div className="col-span-4 h-screen ">
                    <div className="w-full p-2 z-10 md:hidden fixed top-0 flex gap-1 items-center  bg-[rgb(246,248,252)] border-b border-gray-300">
                        <IconButton onClick={toggleSidebar} aria-label="menu" color='primary'>
                            <MenuRoundedIcon />
                        </IconButton>
                        <h2 className="font-bold">Admin</h2>
                    </div>
                    <Orders fetchAllOrders={fetchAllOrders} allOrders={allOrders} activeIndex={3}/>
                    {/* <OrderDetails/> */}
                    {/* <View/> */}
                </div>
            </div>
        </>
    )
}

export default page