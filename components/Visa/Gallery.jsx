import React from 'react'

const Gallery = ({ content }) => {
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
                    content.gallery.map((image, index) => {
                        return <div key={index} className="aspect-video shrink-0">
                            <img src={image} className='object-cover w-40 aspect-video rounded shrink-0' alt="" />
                        </div>
                    })
                }
            </div>
        </>
    )
}

export default Gallery