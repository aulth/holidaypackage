import React from 'react'
import MenuOpenOutlinedIcon from '@mui/icons-material/MenuOpenOutlined';
import CloseOutlinedIcon from '@mui/icons-material/CloseOutlined';
import Link from 'next/link';
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
            <header className="w-screen fixed top-0 z-10 backdrop-blur">
                <div className="container mx-auto flex justify-between items-center p-4 md:py-0 py-4 ">
                    <Link href="/">
                        <h1 className='font-bold text-lg text-black'>Holidays</h1>
                    </Link>
                    <button className='md:hidden text-black' id='open-btn' onClick={toggleMenu}><MenuOpenOutlinedIcon /></button>
                    <button className='md:hidden hidden text-black' id='close-btn' onClick={toggleMenu}><CloseOutlinedIcon /></button>
                    <nav id='menu' className='md:w-auto  md:bg-inherit bg-[rgba(22,22,23,0.8)] text-white md:text-black md:backdrop-filter-none backdrop-blur-xl duration-100 md:block w-full md:static fixed top-[60px] z-20 left-full'>
                        <ul className="flex md:flex-row flex-col w-full md:justify-center md:p-0 p-4 items-start md:items-center gap-2">
                            <li className='w-full md:w-auto hover:bg-gray-100 hover:text-black duration-100 p-2 rounded'><Link href="/" className=''>Home</Link></li>
                            <li className='w-full md:w-auto hover:bg-gray-100 hover:text-black duration-100 p-2 rounded '><Link href="/package" className=''>Holiday Packages</Link></li>
                            <li className='w-full md:w-auto hover:bg-gray-100 hover:text-black duration-100 p-2 rounded'><Link href="/visa" className=''>Visa</Link></li>
                            <li className='w-full md:w-auto hover:bg-gray-100 hover:text-black duration-100 p-2 rounded'><Link href="/about" className=''>About</Link></li>
                            <li className='w-full md:w-auto hover:bg-gray-100 hover:text-black duration-100 p-2 rounded'><Link href="/contact" className=''>Contact</Link></li>
                            <li className='w-full md:w-auto hover:bg-gray-100 hover:text-black duration-100 p-2 rounded'><Link href="/blog" className=''>Blog</Link></li>
                            <li className='bg-red-600 border flex md:justify-center items-center md:px-4  md:border-none border-red-600 text-white h-[60px] md:w-auto w-full px-4 md:rounded-none rounded' ><Link href="/get-a-quote" className=''>Get a quote</Link></li>
                        </ul>
                    </nav>
                </div>
            </header>

        </>
    )
}

export default Navbar