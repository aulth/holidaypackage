import React, { useState } from 'react';
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import LinearProgress from '@mui/material/LinearProgress';

function TabPanel(props) {
    const { children, value, index, ...other } = props;
    return (
        <div
            role="tabpanel"
            hidden={value !== index}
            id={`simple-tabpanel-${index}`}
            aria-labelledby={`simple-tab-${index}`}
            {...other}
        >
            {value === index && (
                <Box sx={{ p: 3 }}>
                    {children}
                </Box>
            )}
        </div>
    );
}

TabPanel.propTypes = {
    children: PropTypes.node,
    index: PropTypes.number.isRequired,
    value: PropTypes.number.isRequired,
};

function a11yProps(index) {
    return {
        id: `simple-tab-${index}`,
        'aria-controls': `simple-tabpanel-${index}`,
    };
}

export default function UploadDocuments({ data, setData }) {
    const [value, setValue] = React.useState(0);
    const [loading, setLoading] = useState(false)
    const [progress, setProgress] = useState(0);
    const handleChange = (event, newValue) => {
        setValue(newValue);
    };
    const passportFrontPageUpload = async (e) => {
        e.preventDefault();
        setLoading(true);

        const file = e.target.files[0];
        const data = new FormData();
        data.append('file', file);
        data.append('upload_preset', 'images');

        const xhr = new XMLHttpRequest();
        xhr.open('POST', 'https://api.cloudinary.com/v1_1/dbtwfabwy/image/upload');

        // Track upload progress
        xhr.upload.addEventListener('progress', (event) => {
            if (event.lengthComputable) {
                const progress = Math.round((event.loaded * 100) / event.total);
                setProgress(progress);
            }
        });

        xhr.onreadystatechange = () => {
            if (xhr.readyState === XMLHttpRequest.DONE) {
                if (xhr.status === 200) {
                    const responseData = JSON.parse(xhr.responseText);
                    setLoading(false);
                    setProgress(0);
                    setData(prevData => ({ ...prevData, passportFrontPage: responseData.url }));
                } else {
                    console.error('Error uploading file:', xhr.responseText);
                    setLoading(false);
                    setProgress(0);
                }
            }
        };

        xhr.send(data);
    };
    const passportBackPageUpload = async (e) => {
        e.preventDefault();
        setLoading(true);

        const file = e.target.files[0];
        const data = new FormData();
        data.append('file', file);
        data.append('upload_preset', 'images');

        const xhr = new XMLHttpRequest();
        xhr.open('POST', 'https://api.cloudinary.com/v1_1/dbtwfabwy/image/upload');

        // Track upload progress
        xhr.upload.addEventListener('progress', (event) => {
            if (event.lengthComputable) {
                const progress = Math.round((event.loaded * 100) / event.total);
                setProgress(progress);
            }
        });

        xhr.onreadystatechange = () => {
            if (xhr.readyState === XMLHttpRequest.DONE) {
                if (xhr.status === 200) {
                    const responseData = JSON.parse(xhr.responseText);
                    setLoading(false);
                    setProgress(0);
                    console.log('File uploaded:', responseData.url);
                    setData(prevData => ({ ...prevData, passportBackPage: responseData.url }));
                } else {
                    console.error('Error uploading file:', xhr.responseText);
                    setLoading(false);
                    setProgress(0);
                }
            }
        };

        xhr.send(data);
    };
    const photographUpload = async (e) => {
        e.preventDefault();
        setLoading(true);

        const file = e.target.files[0];
        const data = new FormData();
        data.append('file', file);
        data.append('upload_preset', 'images');

        const xhr = new XMLHttpRequest();
        xhr.open('POST', 'https://api.cloudinary.com/v1_1/dbtwfabwy/image/upload');

        // Track upload progress
        xhr.upload.addEventListener('progress', (event) => {
            if (event.lengthComputable) {
                const progress = Math.round((event.loaded * 100) / event.total);
                setProgress(progress);
            }
        });

        xhr.onreadystatechange = () => {
            if (xhr.readyState === XMLHttpRequest.DONE) {
                if (xhr.status === 200) {
                    const responseData = JSON.parse(xhr.responseText);
                    setLoading(false);
                    setProgress(0);
                    console.log('File uploaded:', responseData.url);
                    setData(prevData => ({ ...prevData, photograph: responseData.url }));
                } else {
                    console.error('Error uploading file:', xhr.responseText);
                    setLoading(false);
                    setProgress(0);
                }
            }
        };

        xhr.send(data);
    };
    console.log(data)
    return (
        <Box sx={{ width: '100%', p: 4 }} className="pt-0 pb-0 relative">
            <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
                <Tabs value={value} onChange={handleChange} className='text-sm' aria-label="basic tabs example">
                    <Tab label="Passport Front" {...a11yProps(0)} />
                    <Tab label="Passport Back" {...a11yProps(1)} />
                    <Tab label="Photograph" {...a11yProps(2)} />
                </Tabs>
            </Box>
            <TabPanel value={value} component="div" style={{ display: 'block' }} index={0}>
                {
                    !loading && !data.passportFrontPage &&
                    <div className="flex items-center justify-center m-auto container">
                        <label htmlFor="dropzone-file" className="flex flex-col items-center justify-center w-full h-64 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50 dark:hover:bg-bray-800 dark:bg-gray-700 hover:bg-gray-100 dark:border-gray-600 dark:hover:border-gray-500 dark:hover:bg-gray-600">
                            <div className="flex flex-col items-center justify-center pt-5 pb-6">
                                <svg aria-hidden="true" className="w-10 h-10 mb-3 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12" /></svg>
                                <b className="mb-2 text-sm text-gray-500 dark:text-gray-400"><span className="font-semibold">Click to upload</span></b>
                                <p className="text-xs text-gray-500 dark:text-gray-400">JPG, PNG</p>
                            </div>
                            <input onChange={passportFrontPageUpload} id="dropzone-file" type="file" className="hidden" accept='/image*' />
                        </label>
                    </div>
                }
                {loading && !data.passportFrontPage &&
                    <p>
                        <LinearProgress variant="determinate" value={progress} />
                        <Typography variant="body2" className='float-right' color="textSecondary">
                            {`${Math.round(progress)}%`}
                        </Typography>
                    </p>
                }
                {
                    data.passportFrontPage &&
                    <div className="w-full flex justify-center items-center p-4">
                        <div className="mx-auto max-w-md">
                            <img src={data.passportFrontPage} className='w-full' alt="" />
                        </div>
                    </div>
                }
            </TabPanel>
            <TabPanel value={value} index={1}>
                {
                    !loading && !data.passportBackPage &&
                    <div className="flex items-center justify-center m-auto container">
                        <label htmlFor="dropzone-file" className="flex flex-col items-center justify-center w-full h-64 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50 dark:hover:bg-bray-800 dark:bg-gray-700 hover:bg-gray-100 dark:border-gray-600 dark:hover:border-gray-500 dark:hover:bg-gray-600">
                            <div className="flex flex-col items-center justify-center pt-5 pb-6">
                                <svg aria-hidden="true" className="w-10 h-10 mb-3 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12" /></svg>
                                <b className="mb-2 text-sm text-gray-500 dark:text-gray-400"><span className="font-semibold">Click to upload</span></b>
                                <p className="text-xs text-gray-500 dark:text-gray-400">JPG, PNG</p>
                            </div>
                            <input onChange={passportBackPageUpload} id="dropzone-file" type="file" className="hidden" accept='/image*' />
                        </label>
                    </div>
                }
                {loading && !data.passportBackPage &&
                    <div>
                        <LinearProgress variant="determinate" value={progress} />
                        <Typography variant="body2" className='float-right' color="textSecondary">
                            {`${Math.round(progress)}%`}
                        </Typography>
                    </div>
                }
                {
                    data.passportBackPage &&
                    <div className="w-full flex justify-center items-center p-4">
                        <div className="mx-auto max-w-md">
                            <img src={data.passportBackPage} className='w-full' alt="" />
                        </div>
                    </div>
                }
            </TabPanel>
            <TabPanel value={value} index={2}>
                {
                    !loading && !data.photograph &&
                    <div className="flex items-center justify-center m-auto container">
                        <label htmlFor="dropzone-file" className="flex flex-col items-center justify-center w-full h-64 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50 dark:hover:bg-bray-800 dark:bg-gray-700 hover:bg-gray-100 dark:border-gray-600 dark:hover:border-gray-500 dark:hover:bg-gray-600">
                            <div className="flex flex-col items-center justify-center pt-5 pb-6">
                                <svg aria-hidden="true" className="w-10 h-10 mb-3 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12" /></svg>
                                <b className="mb-2 text-sm text-gray-500 dark:text-gray-400"><span className="font-semibold">Click to upload</span></b>
                                <p className="text-xs text-gray-500 dark:text-gray-400">JPG, PNG</p>
                            </div>
                            <input onChange={photographUpload} id="dropzone-file" type="file" className="hidden" accept='/image*' />
                        </label>
                    </div>
                }
                {loading && !data.photograph &&
                    <div>
                        <LinearProgress variant="determinate" value={progress} />
                        <Typography variant="body2" className='float-right' color="textSecondary">
                            {`${Math.round(progress)}%`}
                        </Typography>
                    </div>
                }
                {
                    data.photograph &&
                    <div className="w-full flex justify-center items-center p-4">
                        <div className="mx-auto max-w-md">
                            <img src={data.photograph} className='w-full' alt="" />
                        </div>
                    </div>
                }
            </TabPanel>
        </Box>
    );
}