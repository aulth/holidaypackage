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
import { Button } from '@mui/material';
const View = () => {
    const [packages, setPackages] = useState()
    const fetchPackages = async () => {
        const response = await fetch('/api/package/getall')
        let json = await response.json();
        console.log(json)
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
            body: JSON.stringify({ id: id, adminPin: process.env.NEXT_ADMIN_PIN })
        })
        let json = await response.json();
        console.log(json)
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
                                            primary={<div className='flex justify-between items-start'><Link href={`/package/${item.link}`}><h3 className='font-bold'>{item.title}</h3></Link><Button onClick={()=>{handleOnDelete(item._id)}} variant="contained" className="bg-red-500" size='small' startIcon={<DeleteOutlineRoundedIcon />} color="error">Delete</Button></div>}
                                            secondary={
                                                <React.Fragment>
                                                    <Typography
                                                        sx={{ display: 'inline' }}
                                                        component="span"
                                                        variant="body2"
                                                        color="text.primary"
                                                    >
                                                        {item.country}
                                                    </Typography>
                                                    <span className='flex flex-wrap -mt-1.5' id={`package-${item._id}`}></span>
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
                            <h3 className="font-bold text-sm text-center">No Package Found</h3>
                        }
                    </List>
                </div>
            </div>
        </>
    )
}

export default View