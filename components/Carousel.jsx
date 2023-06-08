import React, { useEffect, useState } from 'react';
import { Swiper, SwiperSlide } from "swiper/react";
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import BeachAccessOutlinedIcon from '@mui/icons-material/BeachAccessOutlined';
import AirplanemodeActiveOutlinedIcon from '@mui/icons-material/AirplanemodeActiveOutlined';
import BusinessOutlinedIcon from '@mui/icons-material/BusinessOutlined';
import { GiPassport } from 'react-icons/gi';
import { Autocomplete, TextField } from '@mui/material';
import Link from 'next/link';
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
// import required modules
import { Autoplay, Pagination, Navigation } from "swiper";
var destinations;
const Carousel = ({ content }) => {
    destinations = ([...new Set(content.map(item => item.country))].map(country => ({ title: country, link: '/search/'+country.toLowerCase().split(' ').join('-') })))
    useEffect(() => {
    }, [])
    return (
        <>
            <style jsx>
                {`
                    .slide-image {
                        width: 100%;
                        height: 100vh;
                        object-fit: cover;
                    }
                    .centered-div {
                        position: absolute;
                        top: 50%;
                        left: 50%;
                        transform: translate(-50%, -50%);
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
                className="mySwiper"
            >
                <div className="centered-div z-20 container flex flex-col justify-center items-center">
                    <h2 className="text-4xl md:mx-0 mx-4 text-white font-bold text-center my-8 -mt-8" style={{ textShadow: '2px 2px 4px rgba(0, 0, 0, 0.5)' }}>Find Your Perfect Adventure</h2>
                    <div className="flex md:flex-row justify-center bg-red-600 gap-4 w-3/4 items-center ">
                        <button className="flex bg-red-500 px-2 md:h-[40px] h-[60px] md:gap-1 justify-center items-center flex-col md:flex-row text-white">
                            <BeachAccessOutlinedIcon />
                            <span className='md:text-base text-sm'>Holidays</span>
                        </button>
                        <button className="flex px-2 md:h-[40px] h-[60px] md:gap-1 justify-center items-center flex-col md:flex-row text-white">
                            <AirplanemodeActiveOutlinedIcon />
                            <span className='md:text-base text-sm'>Flights</span>
                        </button>
                        <button className="flex px-2 md:h-[40px] h-[60px] md:gap-1 justify-center items-center flex-col md:flex-row text-white">
                            <BusinessOutlinedIcon />
                            <span className='md:text-base text-sm'>Hotels</span>
                        </button>
                        <button className="flex px-2 md:h-[40px] h-[60px] md:gap-1 justify-center items-center flex-col md:flex-row text-white">
                            <GiPassport className='text-2xl' />
                            <span className='md:text-base text-sm'>Visa</span>
                        </button>
                    </div>
                    <div className="flex md:flex-row flex-col gap-2 w-3/4 items-center bg-[rgb(255,255,255)] backdrop-blur p-2">
                        {/* <input placeholder='Where you want to go..' type="text" className="w-full h-10 px-3 focus:outline-none bg-base-100 rounded-lg text-lg" /> */}
                        <Autocomplete
                            options={destinations}
                            getOptionLabel={(option) => option.title}
                            className='w-full my-1'
                            renderInput={(params) => (
                                <TextField
                                    {...params}
                                    label="Where you want to go.."
                                    variant="standard"
                                    fullWidth
                                    className='-mt-1'
                                    InputLabelProps={{
                                        style: { marginTop: -2 },
                                    }}
                                />
                            )}
                            renderOption={(props, option) => (
                                <li {...props}>
                                    <Link href={option.link}>{option.title}</Link>
                                </li>
                            )}
                        />
                        <button className='flex items-center justify-center md:w-auto w-full bg-red-500 text-white rounded-lg h-10 px-4'>
                            <SearchOutlinedIcon />
                            Search
                        </button>
                    </div>
                </div>
                <SwiperSlide>
                    <div>
                        <img className='slide-image' src="https://source.unsplash.com/random/?train/" alt="Image" />
                        <div className="slide-subtitle absolute bottom-0 left-0 text-white text-xl   border-l-4 pl-4 mb-8 ml-8 border-red-600">
                            <p style={{ textShadow: '2px 2px 4px rgba(0, 0, 0, 0.5)' }}>Armenia Holiday Package</p>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div>
                        <img className='slide-image' src="https://source.unsplash.com/random/?nature/" alt="Image" />
                        <div className="slide-subtitle absolute bottom-0 left-0 text-white text-xl   border-l-4 pl-4 mb-8 ml-8 border-red-600">
                            <p style={{ textShadow: '2px 2px 4px rgba(0, 0, 0, 0.5)' }}>Armenia Holiday Package</p>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div>
                        <img className='slide-image' src="https://source.unsplash.com/random/?tour/" alt="Image" />
                        <div className="slide-subtitle absolute bottom-0 left-0 text-white text-xl   border-l-4 pl-4 mb-8 ml-8 border-red-600">
                            <p style={{ textShadow: '2px 2px 4px rgba(0, 0, 0, 0.5)' }}>Armenia Holiday Package</p>
                        </div>
                    </div>
                </SwiperSlide>
                {/* Add more slides with subtitles */}
            </Swiper>
        </>
    );
};

export default Carousel;
