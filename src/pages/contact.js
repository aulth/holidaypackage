import React from 'react'
import Navbar from '../../components/Navbar'
import { TextField, Button } from '@mui/material'
const page = () => {
  const handleOnChange = ()=>{

  }
  const handleOnSubmit = ()=>{

  }
  return (
    <>
<Navbar/>
<div className="container mx-auto mt-[70px] p-4">
<h2 className="font-bold text-lg text-center text-red-600">Contact</h2>
<form onSubmit={handleOnSubmit} className="w-full border rounded-md flex gap-2  my-4 flex-col p-4 sticky top-0">
                <TextField onChange={handleOnChange} id="name" name='name' label="Name" variant="standard" />
                <TextField onChange={handleOnChange} id="email" name='email' label="Email" variant="standard" />
                <TextField onChange={handleOnChange} id="phone" name='phone' label="Phone" variant="standard" />
                <textarea onChange={handleOnChange} name="message" id="query" className='w-full border-b focus:border-b-2 border-gray-600 mt-2 rounded focus:border-blue-600 focus:outline-none  outline-1' cols="30" rows="5" placeholder='Message'></textarea>
                <Button type='submit' variant='contained' color='error' className='mt-4 bg-red-500 text-white'>Contact</Button>
            </form>
</div>
    </>
  )
}

export default page