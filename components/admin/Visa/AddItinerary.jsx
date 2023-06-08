import React, { useState } from 'react'
import AddRoundedIcon from '@mui/icons-material/AddRounded';
import { Button, TextField } from '@mui/material';
import 'react-quill/dist/quill.snow.css';
import dynamic from 'next/dynamic';
import modules from '../../quillmodule'
const QuillNoSSRWrapper = dynamic(import('react-quill'), {
    ssr: false,
    loading: () => <p>Loading ...</p>,
})

const AddItinerary = ({setData}) => {
    const [itineraryFields, setItineraryFields] = useState([{ id: 0, highlight: '', title: '', description: '' }]);
    const handleAddItineraryField = () => {
        const newId = itineraryFields.length;
        const newField = { id: newId};
        setItineraryFields([...itineraryFields, newField]);
    };
    const handleItineraryChange = (e, id) => {
        const { value } = e.target;
        const updatedItineraryFields = itineraryFields.map((field) =>
            field.id === id ? { ...field, [e.target.name]: value } : field
        );
        setItineraryFields(updatedItineraryFields);
        setData(prevData=>({...prevData, itinerary:itineraryFields}))
    };
    const handleItineraryContentChange = (e, id) => {
        const value = e;
        const updatedItineraryFields = itineraryFields.map((field) =>
            field.id === id ? { ...field, description: value } : field
        );
        setItineraryFields(updatedItineraryFields);
    };
    return (
        <>
            <div className="w-full mt-2">
                <h3 className="font-bold text-sm mb-2">
                    Itinerary
                </h3>
                {itineraryFields.map((field, index) => (
                    <React.Fragment key={field.id}>
                        <h3 className="font-semibold text-sm my-4">Itinerary {index + 1}</h3>
                        <div className="w-full flex gap-2 items-center mt-2">
                            <TextField inputProps={{ required: true }} onChange={(e) => handleItineraryChange(e, field.id, 'highlight')} label="Highlight" name='highlight' variant="outlined" />
                            <TextField inputProps={{ required: true }} onChange={(e) => handleItineraryChange(e, field.id, 'title')} label="Title" name='title' className='w-full' variant="outlined" />
                        </div>
                        <QuillNoSSRWrapper className='mt-4' placeholder='Description' onChange={(e) => { handleItineraryContentChange(e, field.id) }} modules={modules} theme="snow" />
                    </React.Fragment>
                ))}

                <div className="w-full flex justify-center p-4">
                    <Button onClick={handleAddItineraryField} color='primary' variant='contained'>
                        <AddRoundedIcon />
                    </Button>
                </div>
            </div>
        </>
    )
}

export default AddItinerary