import React, { useState } from 'react'
import { TextField } from '@mui/material'
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import CallIcon from '@mui/icons-material/Call';
import MailIcon from '@mui/icons-material/Mail';
import Backdrop from '@mui/material/Backdrop';
import Modal from '@mui/material/Modal';
import Fade from '@mui/material/Fade';
const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    boxShadow: 24,
};
const NeedAssistance = () => {
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
    const [isCall, setIsCall] = useState(true);
    const [data, setData] = useState({});
    const handleOnChange = (e)=>{
        e.preventDefault();
        setData({...data, [e.target.name]:e.target.value})
    }
    return (
        <>
            <div className="w-full border text-white justify-center items-center  border-red-500 rounded-md flex gap-2 flex-col p-4 bg-red-500">
                <img src="https://img.icons8.com/pastel-glyph/512/FFFFFF/customer-support.png" className='w-1/2' alt="" />
                <h3 className="font-bold text-xl">Need Assistance</h3>
                <h4 className="font-semibold">Book via Phone</h4>
                <a href="tel:+919839098390" className='font-bold text-xl'>+91 9839098309</a>
                <Button  style={{ color: 'red', background:'white', borderColor:'white' }}  onClick={() => { setIsCall(true); handleOpen(); setData({'isCall':true}) }} variant="outlined" startIcon={<CallIcon />} className='mt-2 bg-white text-red-500 border-white w-full focus:bg-white focus:border-white focus:text-red-600 hover:bg-white hover:border-white hover:text-red-600 '>
                    Request a Callback
                </Button>
                <Button   style={{ color: 'red', background:'white', borderColor:'white' }}  variant="outlined"  onClick={() => { setIsCall(false); handleOpen();  setData({'isCall':false})  }}  startIcon={<MailIcon />} className='mt-2 bg-white text-red-500 border-white w-full focus:bg-white focus:border-white focus:text-red-600 hover:bg-white hover:border-white hover:text-red-600'>
                    Send Email Request
                </Button>
            </div>
            <Modal
                aria-labelledby="transition-modal-title"
                aria-describedby="transition-modal-description"
                open={open}
                onClose={handleClose}
                closeAfterTransition
                slots={{ backdrop: Backdrop }}
                slotProps={{
                    backdrop: {
                        timeout: 500,
                    },
                }}
            >
                <Fade in={open}>
                    <Box sx={style} className="flex flex-col ">
                        <h2 className="w-full text-lg font-semibold text-white bg-red-500 p-2 ">{isCall ? 'Request a Callback' : 'Send Email Request'}</h2>
                        <form className="p-4 pt-0 flex flex-col gap-2 ">
                            <TextField onChange={handleOnChange} id="name" name='name' label="Name" className='w-full' variant="standard" />
                            <TextField onChange={handleOnChange} id="email" name='email' label="Email" className='w-full' variant="standard" />
                            <TextField onChange={handleOnChange} id="phone" name='phone' label="Phone" className='w-full' variant="standard" />
                            <textarea onChange={handleOnChange} name="message" id="message" className='w-full border-b focus:border-b-2 border-gray-600 mt-2 rounded focus:border-blue-600 focus:outline-none  outline-1' cols="30" rows="5" placeholder='Message'></textarea>
                            <Button type='submit' variant='contained' color='error' className='mt-4 w-full bg-red-500 text-white'>Submit</Button>
                        </form>
                    </Box>
                </Fade>
            </Modal>
        </>
    )
}

export default NeedAssistance