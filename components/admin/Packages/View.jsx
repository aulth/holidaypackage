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
import { Skeleton } from '@mui/material';
import { Button } from '@mui/material';
const View = () => {
    const [packages, setPackages] = useState()
    const fetchPackages = async () => {
        const response = await fetch('/api/package/getall')
        let json = await response.json();
        if (json.success) {
            setPackages(json.packages)
        }
    }
    useEffect(() => {
        fetchPackages();
    }, [])
    useEffect(() => {
        if (typeof window != undefined && packages) {
            packages.forEach((item, index) => {
                document.querySelector(`#package-${item._id}`).innerText = extractPlainText(item.overview).slice(0, 50)
            })
        }
    }, [packages])
    const handleOnDelete = async (id) => {
        const response = await fetch('/api/package/delete', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify({ id: id, adminPin: process.env.NEXT_PUBLIC_ADMIN_PIN })
        })
        let json = await response.json();
        if (json.success) {
            fetchPackages();
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
                            packages?.map((item, index) => {
                                return <React.Fragment key={index}>
                                    <ListItem alignItems="flex-start">
                                        <ListItemAvatar>
                                            <Avatar alt="Remy Sharp" src={item.gallery[0]} />
                                        </ListItemAvatar>
                                        <ListItemText
                                            primary={<div className='flex justify-between items-start'><Link href={`/package/${item.link}`}><h3 className='font-bold'>{item.title}</h3></Link><Button onClick={() => { handleOnDelete(item._id) }} variant="contained" className="bg-red-500" size='small' startIcon={<DeleteOutlineRoundedIcon />} color="error">Delete</Button></div>}
                                            secondary={
                                                <React.Fragment className="flex items-start">
                                                    <Typography
                                                        sx={{ display: 'flex' }}
                                                        component="span"
                                                        variant="body2"
                                                        color="text.primary"
                                                        className='-mt-1.5'
                                                        
                                                    >
                                                        {item.country} <span className='ml-1'>-</span> <span className='flex flex-wrap ml-1 text-gray-500' id={`package-${item._id}`}></span>
                                                    </Typography>
                                                    
                                                </React.Fragment>
                                            }
                                        />
                                    </ListItem>
                                    <Divider variant="inset" component="li" />
                                </React.Fragment>
                            })
                        }
                        {
                            !packages &&
                            <>

                                <PackageSkelton />
                                <PackageSkelton />
                                <PackageSkelton />
                                <PackageSkelton />
                                <PackageSkelton />
                            </>
                        }
                    </List>
                </div>
            </div>
        </>
    )
}
const PackageSkelton = () => {
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