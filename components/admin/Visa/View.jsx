import React, { useEffect, useState } from 'react'
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import Divider from '@mui/material/Divider';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Avatar from '@mui/material/Avatar';
import Typography from '@mui/material/Typography';
import Link from 'next/link';
import DeleteOutlineRoundedIcon from '@mui/icons-material/DeleteOutlineRounded';
import { Button, Skeleton } from '@mui/material';
const View = () => {
    const [visas, setVisas] = useState()
    const fetchVisa = async () => {
        const response = await fetch('/api/visa/getall')
        let json = await response.json();
        if (json.success) {
            setVisas(json.visas)
        }
    }
    useEffect(() => {
        fetchVisa();

    }, [])
    useEffect(() => {
        if (typeof window != undefined && visas) {
            visas.forEach((visa, index) => {
                document.querySelector(`#visa-${visa._id}`).innerText = extractPlainText(visa.overview).slice(0, 50)
            })
        }
    }, [visas])
    const handleOnDelete = async (id) => {
        const response = await fetch('/api/visa/delete', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify({ id: id, adminPin: process.env.NEXT_PUBLIC_ADMIN_PIN })
        })
        let json = await response.json();
        if (json.success) {
            fetchVisa();
        }
    }
    function extractPlainText(html) {
        // Create a temporary element
        var tempElement = document.createElement('div');
        // Set the HTML content
        tempElement.innerHTML = html;
        // Get the plain text representation
        var plainText = tempElement.innerText;
        // Clean up temporary element
        tempElement = null;
        // Return the plain text
        return plainText;
    }
    return (
        <>
            <div className="w-full  md:h-screen h-[calc(100vh-56px)] overflow-y-auto md:mt-0 mt-[56px] p-4 bg-[rgb(246,248,252)]">
                <div className="bg-white rounded p-4">
                    <List sx={{ width: '100%' }}>
                        {
                            visas?.map((item, index) => {
                                return <React.Fragment key={index}>
                                    <ListItem alignItems="flex-start">
                                        <ListItemAvatar>
                                            <Avatar alt="Remy Sharp" src={item.gallery[0]} />
                                        </ListItemAvatar>
                                        <ListItemText
                                            primary={<div className='flex justify-between items-start'><Link href={`/visa/${item.link}`}><h3 className='font-bold'>{item.title}</h3></Link><Button onClick={()=>{handleOnDelete(item._id)}} variant="contained" className="bg-red-500" size='small' startIcon={<DeleteOutlineRoundedIcon/>} color="error">Delete</Button></div>}
                                            secondary={
                                                <React.Fragment className="flex items-start gap-1">
                                                    <Typography
                                                        sx={{ display: 'inline' }}
                                                        component="span"
                                                        variant="body2"
                                                        color="text.primary"
                                                    >
                                                        {item.country}
                                                    </Typography>
                                                    <span className='flex flex-wrap -mt-1.5' id={`visa-${item._id}`}></span>
                                                </React.Fragment>
                                            }
                                        />
                                    </ListItem>
                                    <Divider variant="inset" component="li" />
                                </React.Fragment>
                            })
                        }
                        {
                            !visas &&
                            <>
                            <VisaSkelton/>
                            <VisaSkelton/>
                            <VisaSkelton/>
                            <VisaSkelton/>
                            <VisaSkelton/>
                            </>
                        }
                    </List>
                </div>
            </div>
        </>
    )
}
const VisaSkelton = () => {
    return <>
        <ListItem alignItems="flex-start">
            <ListItemAvatar>
                <Skeleton variant="circular" width={40} height={40} />
            </ListItemAvatar>
            <ListItemText
                primary={<Skeleton variant="text" width={200} />}
                secondary={<Skeleton variant="text" width={100} />}
            />
        </ListItem>
        <Divider variant="inset" component="li" />
    </>
}
export default View