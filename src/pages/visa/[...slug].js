import React, { useEffect, useState } from 'react'
import Navbar from '../../../components/Packages/Navbar'
import Carousel from '../../../components/Visa/Carousel'
import IconButton from '@mui/material/IconButton';
import MenuOutlinedIcon from '@mui/icons-material/MenuOutlined';
import CloseOutlinedIcon from '@mui/icons-material/CloseOutlined';
import Itinerary from '../../../components/Packages/Itinerary';
import InclusionsExclusions from '../../../components/Packages/InclusionsExclusions';
import Flights from '../../../components/Packages/Flights';
import Overview from '../../../components/Packages/Overview';
import Pricing from '../../../components/Packages/Pricing';
import Gallery from '../../../components/Packages/Gallery';
import Date from '../../../components/Packages/DateComponent';
import TermsAndConditions from '../../../components/Packages/TermsAndConditions';
import BookNow from '../../../components/Packages/BookNow';
import MenuOpenOutlinedIcon from '@mui/icons-material/MenuOpenOutlined';
import NeedAssistance from '../../../components/Packages/NeedAssistance';
import MoreVisa from '../../../components/Visa/MoreVisa';
import Footer from '../../../components/Footer';
import Documents from '../../../components/Visa/Documents';
import NotFound from '../../../components/NotFound';
import Booking from '../../../components/Visa/Book/Booking';
const page = ({ data, allVisa, isBooking, link }) => {
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
        if (typeof window != undefined && data && !isBooking) {
            const overview = document.querySelector('#overview');
            const documentRequired = document.querySelector('#documentRequired');
            const incExc = document.querySelector('#incExc');
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
            observer.observe(incExc);
            observer.observe(TC);
            observer.observe(documentRequired);

        }
    }, [])
    const setTourMenuHeadline = (id) => {
        if (typeof window != undefined) {
            switch (id) {
                case 'overview':
                    setTourDetailHeadline('Overview');
                    break;
                case 'incExc':
                    setTourDetailHeadline('Inclusions/Exclusions');
                    break;
                case 'documentRequired':
                    setTourDetailHeadline('Documents');
                    break;
                case 'TC':
                    setTourDetailHeadline('Terms & Conditions');
                    break;
                default:
                    break;
            }
        }
    }
    useEffect(() => {
        incrementView();
    }, [])
    const incrementView = async () => {
        const response = await fetch('/api/visa/incrementviews', {
            method: 'POST',
            headers: {
                'content-type': 'application/json',
            },
            body: JSON.stringify({ link: link })
        });
    }
    return (
        <>
            {
                data && !isBooking &&
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
                                <li id='incExc-btn' className='hover:bg-white details-btn hover:text-black px-6 py-3 md:border-l md:w-auto w-full'><a href="#incExc">Inclusions/Exclusions</a></li>
                                <li id='TC-btn' className='hover:bg-white details-btn hover:text-black px-6 py-3 md:border-l md:w-auto w-full md:border-r'><a href="#TC">T&C</a></li>
                                <li id='documentRequired-btn' className='hover:bg-white details-btn hover:text-black px-6 py-3 md:border-l md:w-auto w-full'><a href="#documentRequired">Documents</a></li>
                            </ul>
                        </div>
                    </div>

                    <div className="container grid grid-cols-1 md:grid-cols-3 gap-4 mx-auto">
                        <div className="md:col-span-2 p-4">
                            {/* overview  */}
                            <h2 id='overview' className="text-2xl scroll-mt-[120px] font-bold text-red-600 uppercase">Overview</h2>
                            <Overview content={data} />
                            {/* inclusions/exclusions  */}
                            <div id='incExc' className="w-full flex  scroll-mt-[120px] flex-col my-4">
                                <h2 className="text-xl font-bold text-red-600 uppercase">Inclusions / Exclusions</h2>
                                <InclusionsExclusions content={data} />
                            </div>
                            <div id='TC' className="w-full flex  scroll-mt-[120px] flex-col mt-4">
                                <h2 className="text-xl font-bold text-red-600 uppercase">Terms & Conditions</h2>
                                <TermsAndConditions content={data} />
                            </div>
                            <div id='documentRequired' className="w-full flex  scroll-mt-[120px] flex-col mt-4">
                                <h2 className="text-xl font-bold text-red-600 uppercase">Documents Required</h2>
                                <Documents />
                            </div>
                        </div>
                        <div className="p-4 flex flex-col gap-4 overflow-y-auto ">
                            <NeedAssistance />
                        </div>
                    </div>
                    <div className="container mx-auto p-4">
                        <h2 className="text-xl font-bold text-red-600 uppercase">Explore Other Visa</h2>
                        <MoreVisa allVisa={allVisa} />
                    </div>
                    <Footer />
                </div>
            }
            {
                isBooking &&
                <Booking content={data} />
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
    const visaId = context.params.slug[0];
    var isBooking = context.params.slug[1] == 'book';
    let data = await fetch(`${process.env.NEXT_PUBLIC_DOMAIN}/api/visa/getall`);
    data = await data.json();
    data = data.visas;
    let allVisa = data;
    data = data.filter(data => data.link == visaId);
    if (data.length > 0) {
        data = data[0];
    } else {
        data = "";
    }
    return {
        props: {
            data: data,
            allVisa: allVisa,
            isBooking: isBooking,
            link: visaId
        }, // will be passed to the page component as props
    }
}