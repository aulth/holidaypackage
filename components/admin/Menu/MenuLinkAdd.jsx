import React, { useEffect, useState } from 'react'
import { Button, TextField } from '@mui/material';
import 'react-quill/dist/quill.snow.css';
import dynamic from 'next/dynamic';
import BackdropComponent from '../../BackdropComponent';
import { Toaster, toast } from 'react-hot-toast';
const MenuLinkAdd = ({ content }) => {
    const [loading, setLoading] = useState(false)
    const [data, setData] = useState(content)
    const handleChange = (e) => {
        e.preventDefault();
        setData({ ...data, [e.target.name]: e.target.value })
        console.log(data)
    }
    useEffect(() => {
        setData(content)
    }, [content])

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        let response = await fetch('/api/setting/menulink/update', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify({ data, adminPin: process.env.NEXT_PUBLIC_ADMIN_PIN })
        })
        let json = await response.json();
        setLoading(false)
        if (json.success) {
            toast.success(json.msg)
        } else {
            alert(json.msg)
        }
    }
    return (
        <>
            <Toaster position='top-right' />
            <div className="w-full  md:h-screen h-[calc(100vh-56px)] overflow-y-auto md:mt-0 mt-[56px] p-4 bg-[rgb(246,248,252)]">
                {
                    data &&
                    <form onSubmit={handleSubmit} className="bg-white rounded p-4">
                        <h2 className="font-bold my-2">Menu Link</h2>
                        <div className="grid gap-2 grid-cols-1 md:grid-cols-2">
                            <TextField value={data.menuTitle1} className='w-full' onChange={handleChange} name='menuTitle1' label="Title - 1" variant="standard" />
                            <TextField value={data.menuLink1} className='w-full' onChange={handleChange} name='menuLink1' label="Link - 1" variant="standard" />
                            <TextField value={data.menuTitle2} className='w-full' onChange={handleChange} name='menuTitle2' label="Title - 2" variant="standard" />
                            <TextField value={data.menuLink2} className='w-full' onChange={handleChange} name='menuLink2' label="Link - 2" variant="standard" />
                            <TextField value={data.menuTitle3} className='w-full' onChange={handleChange} name='menuTitle3' label="Title - 3" variant="standard" />
                            <TextField value={data.menuLink3} className='w-full' onChange={handleChange} name='menuLink3' label="Link - 3" variant="standard" />
                            <TextField value={data.menuTitle4} className='w-full' onChange={handleChange} name='menuTitle4' label="Title - 4" variant="standard" />
                            <TextField value={data.menuLink4} className='w-full' onChange={handleChange} name='menuLink4' label="Link - 4" variant="standard" />
                            <TextField value={data.menuTitle5} className='w-full' onChange={handleChange} name='menuTitle5' label="Title - 5" variant="standard" />
                            <TextField value={data.menuLink5} className='w-full' onChange={handleChange} name='menuLink5' label="Link - 5" variant="standard" />
                        </div>
                        <div className="grid grid-cols-1 gap-2 mt-4">
                            {
                                !loading &&
                                <Button type='submit' variant='contained' color='primary'>Update</Button>
                            }
                            {
                                loading && <BackdropComponent />
                            }
                        </div>
                    </form>
                }
            </div>
        </>
    )
}

export default MenuLinkAdd