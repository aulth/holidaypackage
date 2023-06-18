import React, { useState, useEffect } from 'react'
import IconButton from '@mui/material/IconButton';
import MenuRoundedIcon from '@mui/icons-material/MenuRounded';
import Sidebar from '../../../../components/admin/Sidebar';
import MenuLinkAdd from '../../../../components/admin/Menu/MenuLinkAdd';
const page = () => {
    const [data, setData] = useState('')
    const fetchmenuLink = async () => {
        const response = await fetch('/api/setting/menulink/fetch');
        let json = await response.json();
        if (json.success) {
            setData(json.menuLink)
        } else {
            setData('')
        }
    }
    useEffect(() => {
        fetchmenuLink();
    }, [])
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
                <Sidebar activeTab={'setting'} activeTabSecondary={'menu'} />
                <div className="col-span-4 h-screen ">
                    <div className="w-full p-2 z-10 md:hidden fixed top-0 flex gap-1 items-center  bg-[rgb(246,248,252)] border-b border-gray-300">
                        <IconButton onClick={toggleSidebar} aria-label="menu" color='primary'>
                            <MenuRoundedIcon />
                        </IconButton>
                        <h2 className="font-bold">Admin</h2>
                    </div>
                    <MenuLinkAdd content={data} />
                </div>
            </div>
        </>
    )
}

export default page