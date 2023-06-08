import React from 'react'
import Navbar from '../../components/Navbar'

const page = () => {
  return (
    <>
<Navbar/>
<div className="container mx-auto mt-[70px] p-4">
<h2 className="font-bold text-lg text-center text-red-600">About</h2>
<p className="text-justify my-4">
    Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur officiis dignissimos quas dolor similique! Non ipsa consequatur esse, quis quo officia eligendi adipisci nam excepturi ut amet odio distinctio tempora?
</p>
</div>
    </>
  )
}

export default page