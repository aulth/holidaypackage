import React, { useState, useEffect } from 'react'
import IconButton from '@mui/material/IconButton';
import MenuRoundedIcon from '@mui/icons-material/MenuRounded';
import Sidebar from '../../../../../components/admin/Sidebar';
import { useUserContext } from '../../../../../cotext/contextapi';
import Edit from '../../../../../components/blog/admin/Edit';
const EditPage = ({ data }) => {
    const [packageOpen, setPackageOpen] = useState(true)
    const [visaOpen, setVisaOpen] = useState(true);
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
                <Sidebar activeTab={'blog'} activeTabSecondary={'edit'} />
                <div className="col-span-4 h-screen ">
                    <div className="w-full p-2 z-10 md:hidden fixed top-0 flex gap-1 items-center  bg-[rgb(246,248,252)] border-b border-gray-300">
                        <IconButton onClick={toggleSidebar} aria-label="menu" color='primary'>
                            <MenuRoundedIcon />
                        </IconButton>
                        <h2 className="font-bold">Admin</h2>
                    </div>
                    <Edit article={data} />
                </div>
            </div>
        </>
    )
}

export default EditPage
export async function getServerSideProps(context) {
    const { slug } = context.params
    const response = await fetch(process.env.NODE_ENV == 'production' ? 'https://mohd-usman.vercel.app/api/blog/fetchone' : 'http://localhost:3000/api/blog/fetchone', {
        method: 'POST',
        headers: {
            'content-type': 'application/json',
        },
        body: JSON.stringify({ link: slug })
    })
    var data = await response.json();
    if (data.success) {
        data = data.article;
    } else {
        data = "";
    }
    return {
        props: {
            data: data
        }, // will be passed to the page component as props
    }
}