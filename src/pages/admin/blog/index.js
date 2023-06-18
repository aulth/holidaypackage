import React, { useState, useEffect } from 'react'
import IconButton from '@mui/material/IconButton';
import { HiOutlineLogout } from 'react-icons/hi'
import List from '@mui/material/List';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Collapse from '@mui/material/Collapse';
import ExpandLess from '@mui/icons-material/ExpandLess';
import ExpandMore from '@mui/icons-material/ExpandMore';
import HomeRoundedIcon from '@mui/icons-material/HomeRounded';
import ScatterPlotRoundedIcon from '@mui/icons-material/ScatterPlotRounded';
import VisibilityRoundedIcon from '@mui/icons-material/VisibilityRounded';
import PlaylistAddRoundedIcon from '@mui/icons-material/PlaylistAddRounded';
import { FaPassport } from 'react-icons/fa'
import SpaceDashboardRoundedIcon from '@mui/icons-material/SpaceDashboardRounded';
import CloseOutlinedIcon from '@mui/icons-material/CloseOutlined';
import MenuRoundedIcon from '@mui/icons-material/MenuRounded';
import { useUserContext } from '../../../../cotext/contextapi';
import View from '../../../../components/admin/Packages/View';
import Sidebar from '../../../../components/admin/Sidebar';
import Admin from '../../../../components/blog/admin/Admin';
const page = () => {
    const [packageOpen, setPackageOpen] = useState(true)
    const [visaOpen, setVisaOpen] = useState(true);
    const { allOrders, fetchAllOrders } = useUserContext();
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
                <Sidebar activeTab={'blog'} activeTabSecondary={'view'} />
                <div className="col-span-4 h-screen ">
                    <div className="w-full p-2 z-10 md:hidden fixed top-0 flex gap-1 items-center  bg-[rgb(246,248,252)] border-b border-gray-300">
                        <IconButton onClick={toggleSidebar} aria-label="menu" color='primary'>
                            <MenuRoundedIcon />
                        </IconButton>
                        <h2 className="font-bold">Admin</h2>
                    </div>
                    <Admin />
                </div>
            </div>
        </>
    )
}

export default page