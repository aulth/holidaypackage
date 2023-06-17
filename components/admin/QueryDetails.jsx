import { Button } from '@mui/material'
import Link from 'next/link'
import React from 'react'
import { Skeleton } from '@mui/material'
const QueryDetails = ({ data }) => {
    return (
        <>
            {
                data &&
                <div className="w-full  md:h-screen h-[calc(100vh-56px)] overflow-y-auto md:mt-0 mt-[56px] p-4 bg-[rgb(246,248,252)]">
                    <div className="bg-white rounded p-4">
                        <span className="font-bold text-sm">id: #{data._id}</span>
                        <div className="grid gap-2 md:grid-cols-2 mt-2  text-sm grid-cols-1">
                            <div className="flex gap-2 items-start">
                                <h3 className="font-semibold text-left">Name:</h3>
                                <h3 className="text-left  col-span-2">{data.name}</h3>
                            </div>
                            <div className="flex gap-2 items-start">
                                <h3 className="font-semibold text-left">Email:</h3>
                                <h3 className="text-left  col-span-2">{data.email}</h3>
                            </div>
                            <div className="flex gap-2 items-start">
                                <h3 className="font-semibold text-left">Phone:</h3>
                                <h3 className="text-left  col-span-2">{data.phone}</h3>
                            </div>
                            <div className="flex gap-2 items-start">
                                <h3 className="font-semibold text-left">Request</h3>
                                <h3 className="text-left  col-span-2">{data.call ? 'Call' : 'Email'}</h3>
                            </div>
                        </div>
                        <div className="text-sm my-2">
                            <h3 className="font-semibold text-left">Message:</h3>
                            <p>{data.message}</p>
                        </div>
                    </div>
                </div>
            }
            {
                !data &&
                <OrderDetailsKelton />
            }
        </>
    )
}
const OrderDetailsKelton = () => {
    return <>
        <div className="w-full md:h-screen h-[calc(100vh-56px)] overflow-y-auto md:mt-0 mt-[56px] p-4 bg-[rgb(246,248,252)]">
            <div className="bg-white rounded p-4">
                <div className="grid gap-2 md:grid-cols-2 mt-2 text-sm grid-cols-1">
                    <div className="flex gap-2 items-start">
                        <Skeleton variant="text" width={150} />
                    </div>
                    <div className="flex gap-2 items-start">
                        <Skeleton variant="text" width={100} />
                    </div>
                    <div className="flex gap-2 items-start">
                        <Skeleton variant="text" width={200} />
                    </div>
                    <div className="flex gap-2 items-start">
                        <Skeleton variant="text" width={150} />
                    </div>
                    <div className="flex gap-2 items-start">
                        <Skeleton variant="text" width={100} />
                    </div>
                    <div className="flex gap-2 items-start">
                        <Skeleton variant="text" width={150} />
                    </div>
                    <div className="flex gap-2 items-start">
                        <Skeleton variant="text" width={250} />
                    </div>
                </div>
                <div className="text-sm my-2">
                    <Skeleton variant="text" width={300} />
                </div>
                <div className="grid gap-2 md:grid-cols-2 text-sm grid-cols-1">
                    <div className="flex gap-2 items-start">
                        <Skeleton variant="text" width={200} />
                    </div>
                    <div className="flex gap-2 items-start">
                        <Skeleton variant="text" width={100} />
                    </div>
                </div>
                <div className="grid gap-2 md:grid-cols-2 text-sm grid-cols-1 mt-4">
                    <div className="flex flex-col gap-2 items-start relative">
                        <Skeleton variant="rectangular" width={200} height={150} />
                    </div>
                    <div className="flex flex-col gap-2 items-start relative">
                        <Skeleton variant="rectangular" width={200} height={150} />
                    </div>
                    <div className="flex flex-col gap-2 items-start relative">
                        <Skeleton variant="rectangular" width={200} height={150} />
                    </div>
                </div>
            </div>
        </div>
    </>
}
export default QueryDetails