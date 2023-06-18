import React from 'react'
import FmdGoodOutlinedIcon from '@mui/icons-material/FmdGoodOutlined';
import CallOutlinedIcon from '@mui/icons-material/CallOutlined';
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined';
const Footer = () => {
    return (
        <>
            <footer className="relative box-border z-10 bg-white pt-20 pb-10 lg:pt-[120px] lg:pb-20">
                <div className="container mx-auto">
                    <div className=" flex flex-wrap md:-mt-20 -mt-10">
                        <div className="w-full px-4 sm:w-2/3 lg:w-3/12">
                            <div className="mb-10 w-full">
                                <a href="#" className="mb-6 inline-block max-w-[160px]">
                                    <h2 className="font-bold text-xl">Holidays</h2>
                                </a>
                                <p className="text-body-color mb-7 text-sm">
                                   Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore illo ullam magnam inventore architecto aspernatur eligendi.
                                </p>
                                <p className="text-dark flex items-center text-sm font-medium">
                                    <span className="text-primary mr-3">
                                        <CallOutlinedIcon className='text-white bg-red-600 rounded-full p-1' />
                                    </span>
                                    <a href='#'>+91 9839098390</a>
                                </p>
                                <p className="text-dark flex items-center text-sm font-medium my-2">
                                    <span className="text-primary mr-3">
                                        <EmailOutlinedIcon className='text-white bg-red-600 rounded-full p-1' />
                                    </span>
                                    <a href='#'>email@gmail.com</a>
                                </p>
                                <p className="text-dark flex items-center text-sm font-medium my-2">
                                    <span className="text-primary mr-3">
                                        <FmdGoodOutlinedIcon className='text-white bg-red-600 rounded-full p-1' />
                                    </span>
                                    <a href='#'>New Delhi 110025</a>
                                </p>
                            </div>
                        </div>
                        <div className="w-full px-4 sm:w-1/2 lg:w-2/12">
                            <div className="mb-10 w-full">
                                <h4 className="text-dark mb-5 text-lg font-semibold">Resources</h4>
                                <ul className='text-sm'>
                                    <li>
                                        <a href="#" className="text-body-color hover:text-primary mb-2 inline-block leading-loose">
                                            Tour
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#" className="text-body-color hover:text-primary mb-2 inline-block leading-loose">
                                            Our Products
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#" className="text-body-color hover:text-primary mb-2 inline-block leading-loose">
                                            User Flow
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#" className="text-body-color hover:text-primary mb-2 inline-block leading-loose">
                                            User Strategy
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className="w-full px-4 sm:w-1/2 lg:w-2/12">
                            <div className="mb-10 w-full">
                                <h4 className="text-dark mb-5 text-lg font-semibold">Company</h4>
                                <ul className='text-sm'>
                                    <li>
                                        <a href="#" className="text-body-color hover:text-primary mb-2 inline-block leading-loose">
                                            About 
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#" className="text-body-color hover:text-primary mb-2 inline-block leading-loose">
                                            Contact &amp; Support
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#" className="text-body-color hover:text-primary mb-2 inline-block leading-loose">
                                            Success History
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#" className="text-body-color hover:text-primary mb-2 inline-block leading-loose">
                                            Setting &amp; Privacy
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className="w-full px-4 sm:w-1/2 lg:w-2/12">
                            <div className="mb-10 w-full">
                                <h4 className="text-dark mb-5 text-lg font-semibold">Quick Links</h4>
                                <ul className='text-sm'>
                                    <li>
                                        <a href="#" className="text-body-color hover:text-primary mb-2 inline-block leading-loose">
                                            Premium Support
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#" className="text-body-color hover:text-primary mb-2 inline-block leading-loose">
                                            Our Services
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#" className="text-body-color hover:text-primary mb-2 inline-block leading-loose">
                                            Know Our Team
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#" className="text-body-color hover:text-primary mb-2 inline-block leading-loose">
                                            Download App
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className="w-full px-4 sm:w-1/2 lg:w-3/12">
                            <div className="mb-10 w-full">
                                <h4 className="text-dark mb-5 text-lg font-semibold">Follow Us On</h4>
                                <div className="mb-6 flex items-center">
                                    <a href="#" className="text-dark   mr-3 flex h-8 w-8 items-center justify-center rounded-full  sm:mr-4 lg:mr-3 xl:mr-4">
                                        <img src="/icon/fb.png" alt="" />
                                    </a>
                                    <a href="#" className="text-dark   mr-3 flex h-8 w-8 items-center justify-center rounded-full  sm:mr-4 lg:mr-3 xl:mr-4">
                                        <img src="/icon/instagram.png" alt="" />
                                    </a>
                                    <a href="#" className="text-dark   mr-3 flex h-8 w-8 items-center justify-center rounded-full  sm:mr-4 lg:mr-3 xl:mr-4">
                                        <img src="/icon/wp.png" alt="" />
                                    </a>
                                    <a href="#" className="text-dark   mr-3 flex h-8 w-8 items-center justify-center rounded-full  sm:mr-4 lg:mr-3 xl:mr-4">
                                        <img src="/icon/tripadvisor.png" alt="" />
                                    </a>
                                    
                                </div>
                                <p className="text-body-color text-sm">© 2023 Holidays</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div>
                    <span className="absolute left-0 bottom-0 z-[-1]">
                        <svg width={217} height={229} viewBox="0 0 217 229" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M-64 140.5C-64 62.904 -1.096 1.90666e-05 76.5 1.22829e-05C154.096 5.49924e-06 217 62.904 217 140.5C217 218.096 154.096 281 76.5 281C-1.09598 281 -64 218.096 -64 140.5Z" fill="url(#paint0_linear_1179_5)" />
                            <defs>
                                <linearGradient id="paint0_linear_1179_5" x1="76.5" y1={281} x2="76.5" y2="1.22829e-05" gradientUnits="userSpaceOnUse">
                                    <stop stopColor="#3056D3" stopOpacity="0.08" />
                                    <stop offset={1} stopColor="#C4C4C4" stopOpacity={0} />
                                </linearGradient>
                            </defs>
                        </svg>
                    </span>
                    <span className="absolute top-10 right-10 z-[-1]">
                        <svg width={75} height={75} viewBox="0 0 75 75" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M37.5 -1.63918e-06C58.2107 -2.54447e-06 75 16.7893 75 37.5C75 58.2107 58.2107 75 37.5 75C16.7893 75 -7.33885e-07 58.2107 -1.63918e-06 37.5C-2.54447e-06 16.7893 16.7893 -7.33885e-07 37.5 -1.63918e-06Z" fill="url(#paint0_linear_1179_4)" />
                            <defs>
                                <linearGradient id="paint0_linear_1179_4" x1="-1.63917e-06" y1="37.5" x2={75} y2="37.5" gradientUnits="userSpaceOnUse">
                                    <stop stopColor="#13C296" stopOpacity="0.31" />
                                    <stop offset={1} stopColor="#C4C4C4" stopOpacity={0} />
                                </linearGradient>
                            </defs>
                        </svg>
                    </span>
                </div>
            </footer>
            {/* ====== Footer Section End */}

        </>
    )
}

export default Footer