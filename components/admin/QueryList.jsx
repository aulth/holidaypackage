import React, {useState, useEffect} from 'react'
import List from '@mui/material/List';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import ListItem from '@mui/material/ListItem';
import { Skeleton } from '@mui/material';
const QueryList = ({ orders, fetchAllOrders }) => {
    const [data, setData] = useState('')
    // const getFormattedDate = (str) => {
    //     const date = new Date(str);
    //     const istOffset = 330; // IST offset in minutes
    //     const istTime = new Date(date.getTime() + istOffset * 60 * 1000);
    
    //     const month = istTime.toLocaleString('default', { month: 'long' });
    //     const day = istTime.getDate();
    //     const year = istTime.getFullYear();
    //     const hour = istTime.getHours();
    //     const minute = istTime.getMinutes();
    //     const second = istTime.getSeconds();
    
    //     const formattedDateTime = `${day}/${month}/${year} ${hour}:${minute}:${second}`;
    //     return formattedDateTime;
    // }
    const getFormattedDate = (str) => {
        const date = new Date(str);
        const month = date.toLocaleString('default', { month: 'long' });
        const day = date.getDate();
        const year = date.getFullYear();
        const formattedDate = `${month} ${day}, ${year}`;
        return formattedDate;
    }
    const fetchQuery = async () => {
        const response = await fetch('/api/query/getall', {
            method: 'POST',
            headers: {
                'content-type': 'application/json',
            },
            body: JSON.stringify({ adminPin:process.env.NEXT_PUBLIC_ADMIN_PIN })
        });
        let json = await response.json();
        if (!json.success) {
            alert(json.msg)
        }
        setData(json.query)
    }
    const updateSeenStatus = async (id) => {
        const response = await fetch('/api/query/updateseenstatus', {
            method: 'POST',
            headers: {
                'content-type': 'application/json',
            },
            body: JSON.stringify({ id: id })
        });
        let json = await response.json();
        console.log(json)
        if (!json.success) {
            alert(json.msg)
        }
        fetchQuery();
    }
useEffect(() => {
    fetchQuery();
}, [])

    return (
        <List className='-mt-4'>
            {
                data && data.length > 0 && data.map((item, index) => {
                    return <ListItem key={index} disablePadding className='border-b'>
                        <ListItemButton onClick={()=>{updateSeenStatus(item._id)}} component="a" href={`/admin/query/${item._id}`} className='w-full'>
                            <div className="w-full grid grid-cols-2  gap-4">
                                <div className=''>
                                    <h4 className={`${!item.seen?'font-semibold':''}  overflow-x-clip whitespace-nowrap overflow-hidden`}>
                                        {item.name && item.name}
                                    </h4>
                                    <span className="italic">{item.phone}</span>
                                </div>
                                <div className='flex gap-2 justify-end'>
                                    <span className="font-semibold">{getFormattedDate(item.createdAt)}</span>
                                </div>
                            </div>
                        </ListItemButton>
                    </ListItem>
                })
            }
            {
                !data &&
                <>
                <OrderListSkeleton/>
                <OrderListSkeleton/>
                <OrderListSkeleton/>
                <OrderListSkeleton/>
                <OrderListSkeleton/>
                <OrderListSkeleton/>
                <OrderListSkeleton/>
                </>
            }
        </List >
    )
}
const OrderListSkeleton = () => {
    return (
        <ListItem disablePadding className='border-b'>
            <ListItemButton className='w-full'>
                <div className="w-full grid grid-cols-2 gap-4">
                    <div className=''>
                        <Skeleton variant="text" width={200} />
                        <Skeleton variant="text" width={100} />
                    </div>
                    <div className='flex gap-2 justify-end'>
                        <Skeleton variant="text" width={100} />
                    </div>
                </div>
            </ListItemButton>
        </ListItem>
    );
}
export default QueryList