import React from 'react'
import Link from 'next/link'
const MorePackage = ({ allPackages }) => {
    return (
        <>
            <style jsx>
                {`
              /* Enable scrolling with mouse wheel or touch */
              .w-full::-webkit-scrollbar {
                width: 0.5rem;
                height: 0.5rem;
              }
              
              .w-full::-webkit-scrollbar-thumb {
                background-color: rgba(0, 0, 0, 0.1);
                border-radius: 0.25rem;
              }
              
              .w-full::-webkit-scrollbar-track {
                background-color: transparent;
              }
            `}
            </style>
            <div className="w-full pb-1.5 flex gap-2 overflow-x-auto mt-4">
                {
                    allPackages && allPackages.length > 0 &&
                    allPackages.map((item, index) => {
                        return <div key={index} className="aspect-video flex flex-col shrink-0 w-60">
                            <img src={item.gallery[0]} className='object-cover w-full aspect-video rounded shrink-0' alt="" />
                            <h2 className="font-semibold"><Link href={`/package/${item.link}`}>{item.title}</Link></h2>
                        </div>
                    })
                }
            </div>
        </>
    )
}

export default MorePackage