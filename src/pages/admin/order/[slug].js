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
import Orders from '../../../../components/admin/Orders';
import { useUserContext } from '../../../../cotext/contextapi';
import OrderDetails from '../../../../components/admin/OrderDetails';
const page = ({ data }) => {
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
                <div id="sidebar" className="h-screen bg-[rgb(246,248,252)] z-20  duration-150 -left-full p-2 md:w-full w-[300px] md:static fixed  border-r">
                    <div className="flex gap-2 items-center">
                        <div className="flex justify-between w-full p-2">
                            <div>
                                <h2 className="font-bold">Holidays</h2>
                                <h3 className="font-semibold text-xs -mt-0.5">@admin</h3>
                            </div>
                            <IconButton aria-label="logout" className='-mr-3 md:block hidden' color="primary">
                                <HiOutlineLogout />
                            </IconButton>
                            <IconButton onClick={toggleSidebar} aria-label="close" className='md:hidden flex justify-center items-center aspect-square' color="primary">
                                <CloseOutlinedIcon />
                            </IconButton>
                        </div>
                    </div>
                    <List
                        sx={{ width: '100%' }}
                        component="nav"
                        aria-labelledby="nested-list-subheader"
                    >
                        <ListItemButton>
                            <ListItemIcon>
                                <HomeRoundedIcon />
                            </ListItemIcon>
                            <ListItemText primary="Home" />
                        </ListItemButton>
                        <ListItemButton onClick={() => { setPackageOpen(!packageOpen) }}>
                            <ListItemIcon>
                                <ScatterPlotRoundedIcon />
                            </ListItemIcon>
                            <ListItemText primary="Packages" />
                            {packageOpen ? <ExpandLess /> : <ExpandMore />}
                        </ListItemButton>
                        <Collapse in={packageOpen} timeout="auto" unmountOnExit>
                            <List component="div" disablePadding>
                                <ListItemButton sx={{ pl: 4 }}>
                                    <ListItemIcon>
                                        <VisibilityRoundedIcon />
                                    </ListItemIcon>
                                    <ListItemText primary="View" />
                                </ListItemButton>
                                <ListItemButton sx={{ pl: 4 }}>
                                    <ListItemIcon>
                                        <PlaylistAddRoundedIcon />
                                    </ListItemIcon>
                                    <ListItemText primary="Add" />
                                </ListItemButton>
                            </List>
                        </Collapse>
                        <ListItemButton onClick={() => { setVisaOpen(!visaOpen) }}>
                            <ListItemIcon>
                                <FaPassport />
                            </ListItemIcon>
                            <ListItemText primary="Visa" />
                            {visaOpen ? <ExpandLess /> : <ExpandMore />}
                        </ListItemButton>
                        <Collapse in={visaOpen} timeout="auto" unmountOnExit>
                            <List component="div" disablePadding>
                                <ListItemButton sx={{ pl: 4 }}>
                                    <ListItemIcon>
                                        <VisibilityRoundedIcon />
                                    </ListItemIcon>
                                    <ListItemText primary="View" />
                                </ListItemButton>
                                <ListItemButton sx={{ pl: 4 }}>
                                    <ListItemIcon>
                                        <PlaylistAddRoundedIcon />
                                    </ListItemIcon>
                                    <ListItemText primary="Add" />
                                </ListItemButton>
                            </List>
                        </Collapse>
                        <ListItemButton>
                            <ListItemIcon>
                                <SpaceDashboardRoundedIcon />
                            </ListItemIcon>
                            <ListItemText primary="Dashboard" />
                        </ListItemButton>
                    </List>
                </div>
                <div className="col-span-4 h-screen ">
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
    const response = await fetch('http://localhost:3000/api/booking/getone', {
        method: 'POST',
        headers: {
            'content-type': 'application/json',
        },
        body: JSON.stringify({ 'adminKey': process.env.NEXT_ADMIN_NKEY, bookingNumber: slug })
    });
    let json = await response.json();
    if (json.success) {
        json = json.order
    } else {
        json = '';
    }
    return {
        props: {
            data: json,
        }, // will be passed to the page component as props
    }
}