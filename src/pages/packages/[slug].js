import React, { useEffect, useState } from 'react'
import Navbar from '../../../components/Packages/Navbar'
import Carousel from '../../../components/Packages/Carousel'
import IconButton from '@mui/material/IconButton';
import MenuOutlinedIcon from '@mui/icons-material/MenuOutlined';
import CloseOutlinedIcon from '@mui/icons-material/CloseOutlined';
import Itinerary from '../../../components/Packages/Itinerary';
import InclusionsExclusions from '../../../components/Packages/InclusionsExclusions';
import Flights from '../../../components/Packages/Flights';
import Overview from '../../../components/Packages/Overview';
import Pricing from '../../../components/Packages/Pricing';
import Gallery from '../../../components/Packages/Gallery';
import Date from '../../../components/Packages/Date';
import TermsAndConditions from '../../../components/Packages/TermsAndConditions';
import BookNow from '../../../components/Packages/BookNow';
import MenuOpenOutlinedIcon from '@mui/icons-material/MenuOpenOutlined';
import NeedAssistance from '../../../components/Packages/NeedAssistance';
import MorePackage from '../../../components/Packages/MorePackage';
import Footer from '../../../components/Footer';
import NotFound from '../../../components/NotFound';
const page = ({ data, allPackages }) => {
    const [tourDetailHeadline, setTourDetailHeadline] = useState('Overview')
    const toggleMenu = () => {
        if (typeof window != undefined) {
            if (document.querySelector('#tour-details').classList.contains('h-0')) {
                document.querySelector('#tour-details').classList.remove('h-0');
                document.querySelector('#tour-details').classList.add('h-auto');
                document.querySelector('#open-menu').classList.add('hidden');
                document.querySelector('#close-menu').classList.remove('hidden');
            } else {
                document.querySelector('#tour-details').classList.remove('h-auto');
                document.querySelector('#tour-details').classList.add('h-0');
                document.querySelector('#open-menu').classList.remove('hidden');
                document.querySelector('#close-menu').classList.add('hidden');
            }
        }
    }
    useEffect(() => {
        if (typeof window != undefined && data) {
            const overview = document.querySelector('#overview');
            const itinerary = document.querySelector('#itinerary');
            const incExc = document.querySelector('#incExc');
            const flights = document.querySelector('#flights');
            const dateAndPrice = document.querySelector('#dateAndPrice');
            const gallery = document.querySelector('#gallery');
            const TC = document.querySelector('#TC');

            const buttons = document.querySelectorAll('.details-btn');

            const observer = new IntersectionObserver((entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        const currentSectionId = entry.target.id;
                        setTourMenuHeadline(currentSectionId)
                        buttons.forEach((button) => {
                            button.classList.remove('bg-red-500');
                        });
                        document.querySelector(`#${currentSectionId}-btn`).classList.add('bg-red-500');
                    }
                });
            }, {
                root: null,
                rootMargin: '50px',
                threshold: 0.6, // Adjusted threshold to 0.2 (20% of the element is visible)
            });

            observer.observe(overview);
            observer.observe(itinerary);
            observer.observe(incExc);
            observer.observe(flights);
            observer.observe(dateAndPrice);
            observer.observe(gallery);
            observer.observe(TC);

        }
    }, [])
    const setTourMenuHeadline = (id) => {
        if (typeof window != undefined) {
            switch (id) {
                case 'overview':
                    setTourDetailHeadline('Overview');
                    break;
                case 'itinerary':
                    setTourDetailHeadline('Itinerary');
                    break;
                case 'incExc':
                    setTourDetailHeadline('Inclusions/Exclusions');
                    break;
                case 'flights':
                    setTourDetailHeadline('Flights');
                    break;
                case 'dateAndPrice':
                    setTourDetailHeadline('Date & Price');
                    break;
                case 'gallery':
                    setTourDetailHeadline('Gallery');
                    break;
                case 'TC':
                    setTourDetailHeadline('Terms & Conditions');
                    break;
                default:
                    break;
            }
        }
    }
    console.log(data)
    return (
        <>
            {
                data &&
                <div className="overflow-x-hidden   h-screen relative ">
                    <Navbar />
                    <Carousel content={data} />
                    {/* Tour Details Menu  */}
                    <div className="w-screen  bg-gray-600  sticky top-[60px] z-10 ">
                        <div className="container mx-auto flex flex-col justify-center items-center ">
                            <div className="w-full px-6 py-2 md:hidden flex justify-between bg-red-500 text-white items-center">
                                <h3 className="font-bold ">{tourDetailHeadline}</h3>
                                <button id="open-menu" onClick={toggleMenu} className='text-white' color="error">
                                        <MenuOutlinedIcon />
                                </button>
                                <button onClick={toggleMenu} id="close-menu" aria-label="tour-details" className='text-white hidden' color="error">
                                        <CloseOutlinedIcon />
                                </button>
                            </div>
                            <ul id="tour-details" className="flex md:h-auto  md:flex-row h-0 duration-100 overflow-y-hidden md:w-auto w-full flex-col items-start  text-white ">
                                <li id='overview-btn' className='  details-btn hover:bg-white hover:text-black px-6 py-3 md:w-auto w-full'><a href="#overview">Overview</a></li>
                                <li id='itinerary-btn' className='hover:bg-white details-btn hover:text-black px-6 py-3 md:border-l md:w-auto w-full'><a href="#itinerary">Itinerary</a></li>
                                <li id='incExc-btn' className='hover:bg-white details-btn hover:text-black px-6 py-3 md:border-l md:w-auto w-full'><a href="#incExc">Inclusions/Exclusions</a></li>
                                <li id='flights-btn' className='hover:bg-white details-btn hover:text-black px-6 py-3 md:border-l md:w-auto w-full'><a href="#flights">Flights</a></li>
                                <li id='dateAndPrice-btn' className='hover:bg-white details-btn hover:text-black px-6 py-3 md:border-l md:w-auto w-full'><a href="#dateAndPrice">Date & Price</a></li>
                                <li id='gallery-btn' className='hover:bg-white details-btn hover:text-black px-6 py-3 md:border-l md:w-auto w-full'><a href="#gallery">Gallery</a></li>
                                <li id='TC-btn' className='hover:bg-white details-btn hover:text-black px-6 py-3 md:border-l md:w-auto w-full md:border-r'><a href="#TC">T&C</a></li>
                            </ul>
                        </div>
                    </div>

                    <div className="container grid grid-cols-1 md:grid-cols-3 gap-4 mx-auto">
                        <div className="md:col-span-2 p-4">
                            {/* overview  */}
                            <h2 id='overview' className="text-2xl scroll-mt-[120px] font-bold text-red-600 uppercase">Overview</h2>
                            {/* Itinerary  */}
                            <Overview content={data} />
                            <div id='itinerary' className="w-full  scroll-mt-[120px]  flex flex-col z-10">
                                <h2 className="text-xl font-bold text-red-600 uppercase my-2">Itinerary</h2>
                                <Itinerary content={data} />
                            </div>
                            {/* inclusions/exclusions  */}
                            <div id='incExc' className="w-full flex  scroll-mt-[120px] flex-col my-4">
                                <h2 className="text-xl font-bold text-red-600 uppercase">Inclusions / Exclusions</h2>
                                <InclusionsExclusions content={data} />
                            </div>
                            {/* Flights  */}
                            <div id='flights' className="w-full flex scroll-mt-[120px]  flex-col my-4">
                                <h2 className="text-xl font-bold text-red-600 uppercase">Flights</h2>
                                <Flights content={data} />
                            </div>
                            {/* Date & Prices */}
                            <div id='dateAndPrice' className="w-full flex scroll-mt-[120px]  flex-col my-4">
                                <h2 className="text-xl font-bold text-red-600 uppercase">Date & Prices</h2>
                                <Date content={data} />
                                <Pricing content={data} />
                            </div>
                            <div id='gallery' className="w-full flex  scroll-mt-[120px]  flex-col my-4">
                                <h2 className="text-xl font-bold text-red-600 uppercase">Gallery</h2>
                                <Gallery content={data} />
                            </div>
                            <div id='TC' className="w-full flex  scroll-mt-[120px] flex-col mt-4">
                                <h2 className="text-xl font-bold text-red-600 uppercase">Terms & Conditions</h2>
                                <TermsAndConditions content={data} />
                            </div>
                        </div>
                        <div className="p-4 flex flex-col gap-4 overflow-y-auto ">
                            <BookNow content={data} />
                            <NeedAssistance />
                        </div>
                    </div>
                    <div className="container mx-auto p-4">
                        <h2 className="text-xl font-bold text-red-600 uppercase">Explore Other Packages</h2>
                        <MorePackage allPackages={allPackages} />
                    </div>
                    <Footer />
                </div>
            }
            {
                !data &&
                <NotFound />
            }
        </>
    )
}

export default page
export async function getServerSideProps(context) {
    const { slug } = context.params
    let data = require('./../../../public/data.json');
    let allPackages = data;
    data = data.filter(data => data.link == slug);
    if (data.length > 0) {
        data = data[0];
    } else {
        data = "";
    }
    return {
        props: {
            data: data,
            allPackages: allPackages,
        }, // will be passed to the page component as props
    }
}