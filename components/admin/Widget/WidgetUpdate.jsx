import React, { useEffect, useState } from 'react'
import { Button, TextField } from '@mui/material';
import 'react-quill/dist/quill.snow.css';
import dynamic from 'next/dynamic';
import { useRouter } from 'next/router';
import BackdropComponent from '../../BackdropComponent';
const WidgetUpdate = ({content}) => {
    const [loading, setLoading] = useState(false)
    const router = useRouter();
    const [data, setData] = useState(content)
    const handleChange = (e) => {
        e.preventDefault();
        setData({ ...data, [e.target.name]: e.target.value })
        console.log(data)
    }
    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        let response = await fetch('/api/setting/widget/update', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify({ data, adminPin: process.env.NEXT_PUBLIC_ADMIN_PIN })
        })
        let json = await response.json();
        setLoading(false)
        if (json.success) {
            alert(json.msg)
            router.push('/admin/');
        } else {
            alert(json.msg)
        }
    }
    return (
        <>
            <div className="w-full  md:h-screen h-[calc(100vh-56px)] overflow-y-auto md:mt-0 mt-[56px] p-4 bg-[rgb(246,248,252)]">
                <form onSubmit={handleSubmit} className="bg-white rounded p-4">
                    <h2 className="font-bold my-2">Home Page Post Category</h2>
                    <div className="grid gap-2 grid-cols-1 md:grid-cols-2">
                        <TextField value={data.widget1} className='w-full' onChange={handleChange} name='widget1' label="Category 1" variant="standard" />
                        <TextField value={data.widget2}  className='w-full' onChange={handleChange} name='widget2' label="Category 2" variant="standard" />
                        <TextField value={data.widget3}  className='w-full' onChange={handleChange} name='widget3' label="Category 3" variant="standard" />
                        <TextField value={data.widget4}  className='w-full' onChange={handleChange} name='widget4' label="Category 3" variant="standard" />
                    </div>
                    <div className="grid grid-cols-1 gap-2 mt-4">
                        {
                            !loading &&
                            <Button  type='submit' variant='contained' color='primary'>Update</Button>
                        }
                        {
                            loading && <BackdropComponent />
                        }
                    </div>
                </form>
            </div>
        </>
    )
}

export default WidgetUpdate