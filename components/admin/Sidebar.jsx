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
import { useUserContext } from '../../cotext/contextapi';
import {ImBlog} from 'react-icons/im'
import Link from 'next/link';
import { Category, Edit, LinkOffSharp, LinkOutlined, MenuBookOutlined, Settings } from '@mui/icons-material';
const Sidebar = ({ activeTab, activeTabSecondary }) => {
    const [packageOpen, setPackageOpen] = useState(true)
    const [visaOpen, setVisaOpen] = useState(true);
    const [blogOpen, setBlogOpen] = useState(true)
    const [settingOpen, setSettingOpen] = useState(true)
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
            <div id="sidebar" className="h-screen bg-[rgb(246,248,252)] overflow-y-auto z-20  duration-150 -left-full p-2 md:w-full w-[300px] md:static fixed  border-r">
                <div className="flex gap-2 items-center">
                    <div className="flex justify-between w-full p-2">
                        <div>
                            <h2 className="font-bold">Holidays</h2>
                            <h3 className="font-semibold text-xs -mt-0.5">@admin</h3>
                        </div>
                        <button aria-label="logout" className='-mr-3 md:block hidden text-blue-600 text-xl'>
                            <HiOutlineLogout />
                        </button>
                        <button onClick={toggleSidebar} aria-label="close" className='md:hidden flex justify-center items-center aspect-square text-blue-600 text-xl'>
                            <CloseOutlinedIcon />
                        </button>
                    </div>
                </div>
                <List
                    sx={{ width: '100%' }}
                    component="nav"
                    aria-labelledby="nested-list-subheader"
                >
                    <ListItemButton href='/admin' selected={activeTab == 'home'}>
                        <ListItemIcon>
                            <HomeRoundedIcon />
                        </ListItemIcon>
                        <ListItemText primary="Home" />
                    </ListItemButton>
                    <ListItemButton selected={activeTab == 'package'} onClick={() => { setPackageOpen(!packageOpen) }}>
                        <ListItemIcon>
                            <ScatterPlotRoundedIcon />
                        </ListItemIcon>
                        <ListItemText primary="Packages" />
                        {packageOpen ? <ExpandLess /> : <ExpandMore />}
                    </ListItemButton>
                    <Collapse in={packageOpen} timeout="auto" unmountOnExit>
                        <List component="div" disablePadding>
                            <ListItemButton href={`/admin/package`} selected={activeTabSecondary ? activeTabSecondary == 'packageview' : false} sx={{ pl: 4 }}>
                                <ListItemIcon>
                                    <VisibilityRoundedIcon />
                                </ListItemIcon>
                                <ListItemText primary="View" />
                            </ListItemButton>
                            <ListItemButton href={`/admin/package/add`} selected={activeTabSecondary ? activeTabSecondary == 'packageadd' : false} sx={{ pl: 4 }}>
                                <ListItemIcon>
                                    <PlaylistAddRoundedIcon />
                                </ListItemIcon>
                                <ListItemText primary="Add" />
                            </ListItemButton>
                        </List>
                    </Collapse>
                    <ListItemButton selected={activeTab == 'visa'} onClick={() => { setVisaOpen(!visaOpen) }}>
                        <ListItemIcon>
                            <FaPassport />
                        </ListItemIcon>
                        <ListItemText primary="Visa" />
                        {visaOpen ? <ExpandLess /> : <ExpandMore />}
                    </ListItemButton>
                    <Collapse in={visaOpen} timeout="auto" unmountOnExit>
                        <List component="div" disablePadding>
                            <ListItemButton href={`/admin/visa`} selected={activeTabSecondary ? activeTabSecondary == 'visaview' : false} sx={{ pl: 4 }}>
                                <ListItemIcon>
                                    <VisibilityRoundedIcon />
                                </ListItemIcon>
                                <ListItemText primary="View" />
                            </ListItemButton>
                            <ListItemButton href={`/admin/visa/add`} selected={activeTabSecondary ? activeTabSecondary == 'visaadd' : false} sx={{ pl: 4 }}>
                                <ListItemIcon>
                                    <PlaylistAddRoundedIcon />
                                </ListItemIcon>
                                <ListItemText primary="Add" />
                            </ListItemButton>
                        </List>
                    </Collapse>
                    <ListItemButton selected={activeTab == 'blog'} onClick={() => { setBlogOpen(!blogOpen) }}>
                        <ListItemIcon>
                            <ImBlog />
                        </ListItemIcon>
                        <ListItemText primary="Blog" />
                        {visaOpen ? <ExpandLess /> : <ExpandMore />}
                    </ListItemButton>
                    <Collapse in={blogOpen} timeout="auto" unmountOnExit>
                        <List component="div" disablePadding>
                            <ListItemButton href={`/admin/blog`} selected={activeTabSecondary ? activeTabSecondary == 'View' : false} sx={{ pl: 4 }}>
                                <ListItemIcon>
                                    <VisibilityRoundedIcon />
                                </ListItemIcon>
                                <ListItemText primary="View" />
                            </ListItemButton>
                            <ListItemButton href={`/admin/blog/publish`} selected={activeTabSecondary ? activeTabSecondary == 'blogadd' : false} sx={{ pl: 4 }}>
                                <ListItemIcon>
                                    <PlaylistAddRoundedIcon />
                                </ListItemIcon>
                                <ListItemText primary="New Blog" />
                            </ListItemButton>
                            <ListItemButton href={`/admin/blog/edit`} selected={activeTabSecondary ? activeTabSecondary == 'edit' : false} sx={{ pl: 4 }}>
                                <ListItemIcon>
                                    <Edit />
                                </ListItemIcon>
                                <ListItemText primary="Edit" />
                            </ListItemButton>
                        </List>
                    </Collapse>
                    <ListItemButton selected={activeTab == 'setting'} onClick={() => { setSettingOpen(!settingOpen) }}>
                        <ListItemIcon>
                            <Settings />
                        </ListItemIcon>
                        <ListItemText primary="Setting" />
                        {settingOpen ? <ExpandLess /> : <ExpandMore />}
                    </ListItemButton>
                    <Collapse in={settingOpen} timeout="auto" unmountOnExit>
                        <List component="div" disablePadding>
                            <ListItemButton href={`/admin/setting/menu`} selected={activeTabSecondary ? activeTabSecondary == 'menu' : false} sx={{ pl: 4 }}>
                                <ListItemIcon>
                                    <LinkOutlined />
                                </ListItemIcon>
                                <ListItemText primary="Menu Link" />
                            </ListItemButton>
                            <ListItemButton href={`/admin/setting/widget`} selected={activeTabSecondary ? activeTabSecondary == 'widget' : false} sx={{ pl: 4 }}>
                                <ListItemIcon>
                                    <Category />
                                </ListItemIcon>
                                <ListItemText primary="Category" />
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
        </>
    )
}

export default Sidebar