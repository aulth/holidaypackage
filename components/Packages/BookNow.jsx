import React, { useState, useEffect } from 'react'
import { MenuItem, TextField, TextareaAutosize } from '@mui/material'
import Button from '@mui/material/Button';
import ButtonGroup from '@mui/material/ButtonGroup';
import Box from '@mui/material/Box';
import IconButton from '@mui/material/IconButton';
import AddOutlinedIcon from '@mui/icons-material/AddOutlined';
import RemoveOutlinedIcon from '@mui/icons-material/RemoveOutlined';
import ArrowDropUpOutlinedIcon from '@mui/icons-material/ArrowDropUpOutlined';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import { useUserContext } from '../../cotext/contextapi';
import BackdropComponent from '../BackdropComponent';
const BookNow = ({ content }) => {
    const [data, setData] = useState({ 'type': 'package', 'title':content.title, 'link': content.link, 'price': content.price, 'itemId': content._id });
    const [traveller, setTraveller] = useState({ adult: 0, child: 0, infant: 0 })
    const [singleOccupancy, setSingleOccupancy] = useState(false);
    const [doubleOccupancy, setDoubleOccupancy] = useState(false);
    const [tripleOccupancy, setTripleOccupancy] = useState(false);
    const [bookClicked, setBookClicked] = useState(false)
    const { initiateBooking } = useUserContext();
    const toggleTravellerCount = () => {
        if (typeof window != undefined) {
            let elem = document.querySelector('#travellerCount');
            if (elem.classList.contains('hidden')) {
                elem.classList.remove('hidden')
            } else {
                elem.classList.add('hidden');
            }
        }
    }
    const handleOnChange = (e) => {
        e.preventDefault();
        setData({ ...data, [e.target.name]: e.target.value })
    }
    const handleOnSubmit = async (e) => {
        e.preventDefault();
        setBookClicked(true)
        initiateBooking(data)

    }
    useEffect(() => {
      if(traveller.adult==0){
        setTraveller({...traveller, child:0, infant:0})
      }
    }, [traveller.adult])
    function formatDate(dateString) {
        const date = new Date(dateString);
        const day = date.getDate();
        const month = date.getMonth() + 1; // Months are zero-based, so we add 1
        const year = date.getFullYear();
      
        // Pad single-digit day and month with leading zero if needed
        const formattedDay = day < 10 ? '0' + day : day;
        const formattedMonth = month < 10 ? '0' + month : month;
      
        return formattedDay + '/' + formattedMonth + '/' + year;
      }
    return (
        <>
            <form onSubmit={handleOnSubmit} className="w-full border rounded-md flex gap-2 flex-col p-4 sticky top-0">
                <TextField onChange={handleOnChange} id="name" name='name' label="Name" variant="standard" />
                <TextField onChange={handleOnChange} id="email" name='email' label="Email" variant="standard" />
                <TextField onChange={handleOnChange} id="phone" name='phone' label="Phone" variant="standard" />
                <TextField
                    id="availDate"
                    select
                    label="Date"
                    defaultValue={''}
                    helperText="Please select available date"
                    variant="standard"
                    name='date'
                    onChange={handleOnChange}
                >
                    <MenuItem key={1} value={content.start}>
                        {formatDate(content.start)}
                    </MenuItem>
                </TextField>

                <div className="w-full relative">
                    <button onClick={toggleTravellerCount} type='button' className="w-full p-2 text-left border-b border-gray-500" >{traveller.adult + traveller.child + traveller.infant} Travellers</button>
                    <div id='travellerCount' className="grid  hidden bg-white z-10  gap-4 grid-cols-3 p-4 pb-20 border shadow-sm rounded-md absolute top-[3.15rem]">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 absolute -top-[0.70rem] left-5" viewBox="0 0 20 20" fill="currentColor">
                            <path d="M10 3l7 10H3l7-10z" />
                        </svg>
                        <div>
                            <span className='font-semibold text-sm'>Adult</span>
                            <span className='text-xs block'>12+</span>
                            <div className="flex justify-center  w-24 mt-2">
                                <button type='button' onClick={() => { setTraveller({ ...traveller, adult: traveller.adult + 1 }) }} className="px-2 py-1 text-center bg-gray-100 hover:bg-gray-200 text-gray-700 rounded-l-lg">
                                    <AddOutlinedIcon className='text-sm -mt-1' />
                                </button>
                                <button className="px-2 py-1 border-t border-b text-gray-700 font-bold" disabled>
                                    {traveller.adult}
                                </button>
                                <button type='button' disabled={traveller.adult<=0} onClick={() => { setTraveller({ ...traveller, adult: traveller.adult - 1 })}} className="px-2 py-1 text-center bg-gray-100 hover:bg-gray-200 text-gray-700 rounded-r-lg ">
                                    <RemoveOutlinedIcon className='text-sm -mt-1' />
                                </button>
                            </div>
                        </div>
                        <div>
                            <span className='font-semibold text-sm'>Child</span>
                            <span className='text-xs block'>(2-12)</span>
                            <div className="flex justify-center  w-24 mt-2">
                                <button type='button'  disabled={traveller.adult<=0}  onClick={() => { setTraveller({ ...traveller, child: traveller.child + 1 }) }} className="px-2 py-1 text-center bg-gray-100 hover:bg-gray-200 text-gray-700 rounded-l-lg">
                                    <AddOutlinedIcon className='text-sm -mt-1' />
                                </button>
                                <button className="px-2 py-1 border-t border-b text-gray-700 font-bold" disabled>
                                    {traveller.child}
                                </button>
                                <button type='button'  disabled={traveller.child<=0}  onClick={() => { setTraveller({ ...traveller, child: traveller.child - 1 }) }} className="px-2 py-1 text-center bg-gray-100 hover:bg-gray-200 text-gray-700 rounded-r-lg ">
                                    <RemoveOutlinedIcon className='text-sm -mt-1' />
                                </button>
                            </div>
                        </div>
                        <div>
                            <span className='font-semibold text-sm'>Infant</span>
                            <span className='text-xs block'>(0-9)</span>
                            <div className="flex justify-center  w-24 mt-2">
                                <button  type='button' disabled={traveller.adult<=0}  onClick={() => { setTraveller({ ...traveller, infant: traveller.infant + 1 }) }} className="px-2 py-1 text-center bg-gray-100 hover:bg-gray-200 text-gray-700 rounded-l-lg">
                                    <AddOutlinedIcon className='text-sm -mt-1' />
                                </button>
                                <button className="px-2 py-1 border-t border-b text-gray-700 font-bold" disabled>
                                    {traveller.infant}
                                </button>
                                <button type='button'  disabled={traveller.infant<=0}  onClick={() => { setTraveller({ ...traveller, infant: traveller.infant - 1 }) }} className="px-2 py-1 text-center bg-gray-100 hover:bg-gray-200 text-gray-700 rounded-r-lg ">
                                    <RemoveOutlinedIcon className='text-sm -mt-1' />
                                </button>
                            </div>
                        </div>
                        <Button onClick={() => { setData({ ...data, traveller: traveller }); toggleTravellerCount() }} className="absolute bottom-2 mb-2 mt-2 right-4 bg-red-500" variant='contained' color='error' >Done</Button>
                    </div>
                    <div className="mt-2">
                    <FormControlLabel control={<Checkbox checked={data.occupancy=='single'?true:false}  onChange={() => { setData({ ...data, occupancy: 'single' }) }} inputProps={{ 'aria-label': 'controlled' }} />} label="Single Occupancy" />
                    <FormControlLabel control={<Checkbox checked={data.occupancy=='double'?true:false}  onChange={() => { setData({ ...data, occupancy: 'double' }) }} inputProps={{ 'aria-label': 'controlled' }} />} label="Double Occupancy" />
                    <FormControlLabel control={<Checkbox checked={data.occupancy=='triple'?true:false}  onChange={() => { setData({ ...data, occupancy: 'triple' }) }} inputProps={{ 'aria-label': 'controlled' }} />} label="Triple Occupancy" />
                    </div>
                </div>
                <textarea onChange={handleOnChange} name="message" id="query" className='w-full border-b focus:border-b-2 border-gray-600 mt-2 rounded focus:border-blue-600 focus:outline-none  outline-1' cols="30" rows="5" placeholder='Message'></textarea>
                <Button type='submit' disabled={bookClicked || !data.name || !data.email || !data.phone || !data.traveller?.adult || !data.occupancy} variant='contained' color='error' className='mt-4 bg-red-500 text-white'>Book</Button>
                {
                    bookClicked &&
                    <BackdropComponent />
                }
            </form>

        </>
    )
}

export default BookNow