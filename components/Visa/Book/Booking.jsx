import React, { useState } from 'react'
import Navbar from '../Navbar'
import Box from '@mui/material/Box';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
import MenuItem from '@mui/material/MenuItem';
import { Button, TextField } from '@mui/material';
import InputLabel from '@mui/material/InputLabel';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import Fab from '@mui/material/Fab';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper } from '@mui/material';
import PriceCheckOutlinedIcon from '@mui/icons-material/PriceCheckOutlined';
import CheckOutlinedIcon from '@mui/icons-material/CheckOutlined';
import PaidOutlinedIcon from '@mui/icons-material/PaidOutlined';
import countrycode from './../../../public/countrycode.json'
import country from './../../../public/nationality.json'
import Footer from '../../Footer';
import UploadDocuments from './UploadDocuments';
import { useUserContext } from '../../../cotext/contextapi';
import Backdrop from '../../BackdropComponent';
const nationality = Object.values(country).sort((a, b) => a.name.localeCompare(b.name));
const steps = [
    'Details',
    'Documents',
    'Payment'
];
const Booking = ({ content }) => {
    const [data, setData] = useState({ 'type': 'visa', 'link': content.link, 'title':content.title, 'amount': content.price, 'itemId': content._id });
    const { initiateBooking } = useUserContext();
    const [isEmailValid, setIsEmailValid] = useState(true)
    const [activeStep, setActiveStep] = useState(0)
    const [proceedToPayClicked, setProceedToPayClicked] = useState(false)
    const handleChange = (e) => {
        setIsEmailValid(true);
        setData({ ...data, [e.target.name]: e.target.value });
    };
    const handleOnNextToDocument = (e) => {
        e.preventDefault();
        if (!validEmail(data.email)) {
            setIsEmailValid(false);
            return;
        }
        if (data.pax == 1) {
            setActiveStep(1);
        } else {
            setActiveStep(2);
        }
    }
    const validEmail = (email) => {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (emailRegex.test(email)) {
            return true
        } else {
            return false
        }
    }
    return (
        <>
            <Navbar />
            <hr className='mt-[60px]' />
            <div className="container mx-auto p-4 ">
                <div className="w-full mx-auto rounded border">
                    <div className="w-full p-4 bg-gray-50 flex justify-between">
                        <div>
                            <h2 className="text-xl font-bold">{content.title}</h2>
                            <p className="text-sm font-semibold">#{content.id}</p>
                        </div>
                    </div>
                    <div className="w-full my-8">
                        <Box sx={{ width: '100%' }}>
                            <Stepper activeStep={activeStep} alternativeLabel>
                                {steps.map((label) => (
                                    <Step key={label}>
                                        <StepLabel>{label}</StepLabel>
                                    </Step>
                                ))}
                            </Stepper>
                        </Box>
                    </div>
                    {
                        activeStep == 0 &&
                        <form onSubmit={handleOnNextToDocument} className="w-full grid md:grid-cols-2 gap-3 p-4 grid-cols-1">
                            <TextField inputProps={{ required: true }} onChange={handleChange} id="name" name='name' label="Name" variant="standard" />
                            <TextField
                                id="pax"
                                select
                                label="Pax"
                                defaultValue={''}
                                helperText="Document will be collected later for more than 2 pax"
                                variant="standard"
                                name='pax'
                                onChange={handleChange}
                                inputProps={{ required: true }}
                            >
                                <MenuItem key={1} value={1}>
                                    1
                                </MenuItem>
                                <MenuItem key={2} value={2}>
                                    2
                                </MenuItem>
                            </TextField>
                            <div className="w-full  grid grid-cols-4 gap-1">
                                <TextField
                                    id="country-code"
                                    select
                                    label="Code"
                                    defaultValue={''}
                                    helperText="Country Code"
                                    variant="standard"
                                    name='countryCode'
                                    onChange={handleChange}
                                    className='w-full'
                                    inputProps={{ required: true }}
                                >
                                    {
                                        countrycode.map((code, index) => {
                                            return <MenuItem key={index} value={code.dial_code}>
                                                {code.dial_code} ({code.name})
                                            </MenuItem>
                                        })
                                    }
                                </TextField>
                                <TextField id="phone" onChange={handleChange} className='col-span-3' name='phone' label="Phone" helperText="1234567890" inputProps={{ inputMode: 'numeric', maxLength: 100, required: true }} variant="standard" />
                            </div>
                            <TextField onChange={handleChange} error={!isEmailValid} helperText={isEmailValid ? '' : 'Invalid Email'} inputProps={{ pattern: '[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+.[a-zA-Z]{2,}', inputMode: 'email', maxLength: 100, required: true }} id="email" name='email' label="Email" variant="standard" />
                            <TextField
                                id="nationality"
                                select
                                label="Nationality"
                                defaultValue={''}
                                helperText="Choose your nationality"
                                variant="standard"
                                name='nationality'
                                onChange={handleChange}
                                className='w-full'
                                inputProps={{ required: true }}
                            >
                                {
                                    Object.keys(nationality).map((key, index) => {
                                        return <MenuItem key={index} value={nationality[key].name}>
                                            <div className="flex items-center gap-2">
                                                <img src={nationality[key].image} className='w-6 ml-2 ' alt="" />
                                                {nationality[key].name}
                                            </div>
                                        </MenuItem>
                                    })
                                }
                            </TextField>
                            <Button type='submit' variant='contained' color='primary' className="w-1/3 h-12 bg-red-600 text-white">Next</Button>
                        </form>
                    }
                    {
                        activeStep == 1 &&
                        <UploadDocuments data={data} setData={setData} />
                    }
                    {
                        activeStep == 2 &&
                        <div className="w-full grid md:grid-cols-2 gap-4 p-4 grid-cols-1">
                            <TextField disabled defaultValue={data.name} label="Name" variant="standard" />
                            <TextField
                                select
                                label="Pax"
                                defaultValue={data.pax}
                                variant="standard"
                                disabled
                                onChange={handleChange}
                                inputProps={{ required: true }}
                            >
                                <MenuItem key={1} value={1}>
                                    1
                                </MenuItem>
                                <MenuItem key={2} value={2}>
                                    2
                                </MenuItem>
                            </TextField>
                            <div className="w-full  grid grid-cols-4 gap-1">
                                <TextField
                                    select
                                    label="Code"
                                    defaultValue={data.countryCode}
                                    variant="standard"
                                    className='w-full'
                                    disabled
                                >
                                    {
                                        countrycode.map((code, index) => {
                                            return <MenuItem key={index} value={code.dial_code}>
                                                {code.dial_code} ({code.name})
                                            </MenuItem>
                                        })
                                    }
                                </TextField>
                                <TextField disabled className='col-span-3' name='phone' label="Phone" defaultValue={data.phone} variant="standard" />
                            </div>
                            <TextField disabled defaultValue={"usman@gmail.com"} label="Email" variant="standard" />
                            <TextField
                                select
                                label="Nationality"
                                variant="standard"
                                className='w-full'
                                disabled
                                defaultValue={data.nationality}
                            >
                                {
                                    Object.keys(nationality).map((key, index) => {
                                        return <MenuItem key={index} value={nationality[key].name}>
                                            <div className="flex items-center gap-2">
                                                <img src={nationality[key].image} className='w-6 ml-2 ' alt="" />
                                                {nationality[key].name}
                                            </div>
                                        </MenuItem>
                                    })
                                }
                            </TextField>
                            <TextField disabled defaultValue={data.pax == 1 && data.passportFrontPage && data.passportBackPage && data.photograph ? "Uploaded" : "Will be collected later"} label="Documents" variant="standard" />
                            <div></div>
                            <div className="flex justify-end">
                            <Button disabled={proceedToPayClicked || !data.name || !data.email || !data.phone || !data.pax || !data.nationality} onClick={() => { initiateBooking(data); setProceedToPayClicked(true) }} endIcon={<CheckOutlinedIcon />} variant='contained' color='success' className="h-12 bg-green-700 text-white">Proceed to pay</Button>
                            </div>
                            {
                                proceedToPayClicked &&
                                <Backdrop/>
                            }
                        </div>
                    }
                </div>
            </div>
            {
                data.passportFrontPage && data.passportBackPage && data.photograph && activeStep == 1 &&
                <div className="fixed right-5 bottom-5 z-20">
                <Fab onClick={() => { setActiveStep(2) }} variant="extended" size="medium" color="primary" className='bg-[#1976d2]' aria-label="add">
                    <PaidOutlinedIcon sx={{ mr: 1 }} />
                    Complete Payment
                </Fab>
                </div>
            }
            <Footer />
        </>
    )
}

export default Booking