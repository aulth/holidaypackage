import React from 'react'
import List from '@mui/material/List';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import ListItem from '@mui/material/ListItem';
import { Skeleton } from '@mui/material';
const OrderList = ({ orders, fetchAllOrders }) => {
    const getFormattedDate = (str) => {
        const date = new Date(str);
        const month = date.toLocaleString('default', { month: 'long' });
        const day = date.getDate();
        const year = date.getFullYear();
        const formattedDate = `${month} ${day}, ${year}`;
        return formattedDate;
    }
    const updateSeenStatus = async (id) => {
        const response = await fetch('/api/booking/updateseenstatus', {
            method: 'POST',
            headers: {
                'content-type': 'application/json',
            },
            body: JSON.stringify({ id: id })
        });
        let json = await response.json();
        if (!json.success) {
            alert(json.msg)
        }
        fetchAllOrders();

    }
    return (
        <List className='-mt-4'>

            {
                orders && orders.length > 0 && orders.map((order, index) => {
                    return <ListItem key={index} disablePadding className='border-b'>
                        <ListItemButton onClick={()=>{updateSeenStatus(order._id)}} component="a" href={`/admin/order/${order.bookingNumber}`} className='w-full'>
                            <div className="w-full grid grid-cols-2  gap-4">
                                <div className=''>
                                    <h4 className={`${!order.seen?'font-semibold':''}  overflow-x-clip whitespace-nowrap overflow-hidden`}>
                                        {order.data.title && order.data.title}
                                    </h4>
                                    <span className="italic">#{order.bookingNumber}</span>
                                </div>
                                <div className='flex gap-2 justify-end'>
                                    <span className="font-semibold">{getFormattedDate(order.createdAt)}</span>
                                </div>
                            </div>
                        </ListItemButton>
                    </ListItem>
                })
            }
            {
                !orders &&
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
export default OrderList