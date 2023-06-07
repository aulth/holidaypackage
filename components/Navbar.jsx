import React from 'react'
import MenuOpenOutlinedIcon from '@mui/icons-material/MenuOpenOutlined';
import CloseOutlinedIcon from '@mui/icons-material/CloseOutlined';
const Navbar = () => {

    const toggleMenu = () => {
        if (typeof window != undefined) {
            if (document.querySelector('#menu').classList.contains('left-full')) {
                document.querySelector('#menu').classList.remove('left-full');
                document.querySelector('#menu').classList.add('left-0');
                document.querySelector('#open-btn').classList.add('hidden');
                document.querySelector('#close-btn').classList.remove('hidden');
            } else {
                document.querySelector('#menu').classList.remove('left-0');
                document.querySelector('#menu').classList.add('left-full');
                document.querySelector('#open-btn').classList.remove('hidden');
                document.querySelector('#close-btn').classList.add('hidden');
            }
        }
    }
    return (
        <>
            <header className="w-screen bg-[rgba(22,22,23,0.8)]  backdrop-blur  fixed top-0 z-10">
                <div className="container mx-auto flex justify-between items-center p-4 md:py-0 py-4 ">
                    <a href="#">
                        <h1 className='font-bold text-lg text-white'>Holidays</h1>
                    </a>
                    <button className='md:hidden text-white' id='open-btn' onClick={toggleMenu}><MenuOpenOutlinedIcon /></button>
                    <button className='md:hidden hidden text-white' id='close-btn' onClick={toggleMenu}><CloseOutlinedIcon /></button>
                    <nav id='menu' className='md:w-auto md:bg-inherit bg-[rgba(22,22,23,0.8)] text-white md:backdrop-filter-none backdrop-blur-xl duration-100 md:block w-full md:static fixed top-[60px] left-full'>
                        <ul className="flex md:flex-row flex-col w-full md:justify-center md:p-0 p-4 items-start md:items-center gap-2">
                            <li className='w-full md:w-auto hover:bg-gray-100 hover:text-black duration-100 p-2 rounded'><a href="#" className=''>Home</a></li>
                            <li className='w-full md:w-auto hover:bg-gray-100 hover:text-black duration-100 p-2 rounded '><a href="#" className=''>Holiday Packages</a></li>
                            <li className='w-full md:w-auto hover:bg-gray-100 hover:text-black duration-100 p-2 rounded'><a href="#" className=''>Visa</a></li>
                            <li className='w-full md:w-auto hover:bg-gray-100 hover:text-black duration-100 p-2 rounded'><a href="#" className=''>About</a></li>
                            <li className='w-full md:w-auto hover:bg-gray-100 hover:text-black duration-100 p-2 rounded'><a href="#" className=''>Contact</a></li>
                            <li className='bg-red-600 border flex md:justify-center items-center md:px-4  md:border-none border-red-600 text-white h-[60px] md:w-auto w-full px-4 md:rounded-none rounded' ><a href="#" className=''>Get a quote</a></li>
                        </ul>
                    </nav>
                </div>
            </header>

        </>
    )
}

export default Navbar