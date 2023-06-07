import React, { useState } from 'react'
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import LinearProgress from '@mui/material/LinearProgress';

const UploadPhoto = ({setData, data}) => {
    const [loading, setLoading] = useState(false)
    const [progress, setProgress] = useState(0);
    const passportFrontPageUpload = async (e) => {
        e.preventDefault();
        setLoading(true);

        const files = e.target.files;
        const data = new FormData();
        const uploadedLinks = [];

        for (let i = 0; i < files.length; i++) {
            data.append('file', files[i]);
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
                        console.log('File uploaded:', responseData.url);
                        uploadedLinks.push(responseData.url);
                    } else {
                        console.error('Error uploading file:', xhr.responseText);
                    }

                    // Check if all files have been uploaded
                    if (i === files.length - 1) {
                        setLoading(false);
                        setProgress(0);
                        setData(prevData => ({ ...prevData, gallery: uploadedLinks }));
                    }
                }
            };

            xhr.send(data);
        }
    };

    return (
        <>
            <div className="flex items-center justify-center m-auto container">
                <label htmlFor="dropzone-file" className="flex flex-col items-center justify-center w-full h-64 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50 dark:hover:bg-bray-800 dark:bg-gray-700 hover:bg-gray-100 dark:border-gray-600 dark:hover:border-gray-500 dark:hover:bg-gray-600">
                    <div className="flex flex-col items-center justify-center pt-5 pb-6">
                        <svg aria-hidden="true" className="w-10 h-10 mb-3 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12" /></svg>
                        <b className="mb-2 text-sm text-gray-500 dark:text-gray-400"><span className="font-semibold">Click to upload</span></b>
                        <p className="text-xs text-gray-500 dark:text-gray-400">JPG, PNG</p>
                    </div>
                    <input onChange={passportFrontPageUpload} id="dropzone-file" multiple type="file" className="hidden" accept='/image*' />
                </label>
            </div>
            {loading &&
                <p>
                    <LinearProgress variant="determinate" value={progress} />
                    <Typography variant="body2" className='float-right' color="textSecondary">
                        {`${Math.round(progress)}%`}
                    </Typography>
                </p>
            }
            {
                data && data.gallery && data.gallery.length>0 &&
                <div className="w-full grid gap-2 md:grid-cols-4 grid-cols-2 pt-4 pb-2">
                    {
                        data.gallery.map((item, i)=>{
                            return <img key={i} src={item} className='object-cover' alt="" />
                        } )
                    }
                </div>
            }
        </>
    )
}

export default UploadPhoto