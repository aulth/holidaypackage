import React, { useEffect, useState } from 'react';
import { Swiper, SwiperSlide } from "swiper/react";
import { emphasize, styled } from '@mui/material/styles';
import Breadcrumbs from '@mui/material/Breadcrumbs';
import Chip from '@mui/material/Chip';
import HomeIcon from '@mui/icons-material/Home';
import FileDownloadOutlinedIcon from '@mui/icons-material/FileDownloadOutlined';
import ForwardToInboxOutlinedIcon from '@mui/icons-material/ForwardToInboxOutlined';
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
// import required modules
import { Autoplay, Pagination, Navigation } from "swiper";
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import Backdrop from '@mui/material/Backdrop';
import Modal from '@mui/material/Modal';
import Fade from '@mui/material/Fade';
import { TextField } from '@mui/material'
import ForwardToInboxIcon from '@mui/icons-material/ForwardToInbox';
import ShareIcon from '@mui/icons-material/Share';
import IconButton from '@mui/material/IconButton';
import Link from 'next/link';
const Carousel = ({ content }) => {
    const StyledBreadcrumb = styled(Chip)(({ theme }) => {
        const backgroundColor =
            theme.palette.mode === 'light'
                ? theme.palette.grey[100]
                : theme.palette.grey[800];
        return {
            backgroundColor,
            height: theme.spacing(3),
            color: theme.palette.text.primary,
            fontWeight: theme.typography.fontWeightRegular,
            '&:hover, &:focus': {
                backgroundColor: emphasize(backgroundColor, 0.06),
            },
            '&:active': {
                boxShadow: theme.shadows[1],
                backgroundColor: emphasize(backgroundColor, 0.12),
            },
        };
    });
    const style = {
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: 400,
        bgcolor: 'background.paper',
        boxShadow: 24,
    };
    const [open, setOpen] = React.useState(false);
    const [data, setData] = useState({});
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
    const handleOnChange = (e) => {
        e.preventDefault();
        setData({ ...data, [e.target.name]: e.target.value })
        console.log(data)
    }
    useEffect(() => {
        console.log(content)
    }, [])
    const handleOnShare = ()=>{
        if (navigator.share) {
            // Function to share the current page
            navigator.share({
                title: document.title,
                url: window.location.href
            })
                .then(() => console.log("Successfully shared"))
                .catch(error => console.log("Error sharing:", error));
        } else {
            console.log("Web Share API is not supported in this browser.");
        }
    }
    return (
        <>
            <style jsx>
                {`
                    .slide-image {
                        width: 100%;
                        height: calc(100vh - 60px);
                        object-fit: cover;
                    }
                    .centered-div {
                        position: absolute;
                        top: 50%;
                        left: 50%;
                        transform: translate(-50%, -50%);
                        height:calc(100vh - 60px);
                    }
                    .breadcrumb::before {
                        color: white;
                    }
                   
                `}
            </style>
            <Swiper
                spaceBetween={30}
                centeredSlides={true}
                autoplay={{
                    delay: 2500,
                    disableOnInteraction: false,
                }}
                pagination={{
                    clickable: true,
                }}
                modules={[Autoplay, Pagination, Navigation]}
                className="mySwiper mt-[60px]"
            >
                <div className="container mx-auto">
                    <Breadcrumbs aria-label="breadcrumb" className='absolute z-20  top-0 mt-4 ml-4 breadcrumb'>
                        <StyledBreadcrumb
                            component="a"
                            href="/"
                            label="Home"
                            icon={<HomeIcon fontSize="small" />}
                        />
                        <StyledBreadcrumb component="a" href="/visa" label="Visa"
                        />
                        <StyledBreadcrumb
                            label={content.title}
                        />
                    </Breadcrumbs>
                </div>
                <div className="container mx-auto relative">
                    <div className="flex  z-20 flex-col absolute bottom-0 left-0 mb-8 ml-8 text-white">
                        <h2 className='text-3xl font-bold' style={{ textShadow: '2px 2px 4px rgba(0, 0, 0, 0.5)' }}>{content.title}</h2>
                        <div className="flex gap-2 my-4 items-center">
                            <div className="flex items-center gap-2">
                                <Button disabled color='error' style={{ color: 'red' }} className=' font-semibold bg-white   px-2 py-1'>AED {content.price}</Button>
                                <Button variant='contained' color='error' className=' font-semibold bg-red-600 text-white px-2 py-1'><Link href={`/visa/${content.link}/book`}>Book Visa</Link></Button>
                            </div>
                        </div>
                        <div className="flex gap-2 my-2 items-center">
                            <div className="flex items-center gap-2">
                                <Button onClick={handleOpen} variant='outlined' startIcon={<ForwardToInboxOutlinedIcon />} color='error' className=' border-white  font-semibold  text-white px-2 py-1'>E-mail</Button>
                                <Button onClick={handleOnShare} variant='outlined' startIcon={<ShareIcon />} color='error' className=' border-white  font-semibold  text-white px-2 py-1'>Share</Button>
                            </div>
                        </div>
                    </div>
                </div>
                {
                    content.gallery.map((image, index) => {
                        return <SwiperSlide key={index}>
                            <div>
                                <img className='slide-image' src={image} alt="Image" />
                            </div>
                        </SwiperSlide>
                    })
                }
                {/* Add more slides with subtitles */}
            </Swiper>
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
                        <h2 className="w-full text-lg font-semibold text-white bg-red-500 p-2 ">Send to email</h2>
                        <form className="p-4 pt-0 flex flex-col gap-2 ">
                            <TextField onChange={handleOnChange} id="email" name='email' label="Email" className='w-full mt-4' variant="standard" />
                            <Button endIcon={<ForwardToInboxIcon />} type='submit' variant='contained' color='error' className='mt-4 w-full bg-red-500 text-white'>Send</Button>
                        </form>
                    </Box>
                </Fade>
            </Modal>
        </>
    );
};

export default Carousel;
