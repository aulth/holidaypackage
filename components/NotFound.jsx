import Link from 'next/link'
import React from 'react'

const NotFound = () => {
    return (
        <>
            <div className="w-screen h-screen bg-white flex justify-center items-center">
                <div className="flex flex-col">
                    <Link href={"/"}>
                        <img src="/images/404.jpg" alt="" className="w-screen h-screen object-cover" />
                    </Link>
                </div>
            </div>
        </>
    )
}

export default NotFound