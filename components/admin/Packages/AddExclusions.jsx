import React, { useState } from 'react'
import AddRoundedIcon from '@mui/icons-material/AddRounded';
import { Button, TextField } from '@mui/material';
import 'react-quill/dist/quill.snow.css';
import dynamic from 'next/dynamic';

import {IconButton} from '@mui/material';
import RemoveRoundedIcon from '@mui/icons-material/RemoveRounded';
const AddExclusions = ({setData}) => {
    const [arrayValues, setArrayValues] = useState(['']);

    const handleChange = (e, index) => {
        const { value } = e.target;
        const updatedArray = [...arrayValues];
        updatedArray[index] = value;
        setArrayValues(updatedArray);
        setData(prevData => ({ ...prevData, exclusions:updatedArray }));
    };
    const handleAddField = () => {
        setArrayValues([...arrayValues, '']);
    };

    const handleRemoveField = (index) => {
        const updatedArray = [...arrayValues];
        updatedArray.splice(index, 1);
        setArrayValues(updatedArray);
    };
    return (
        <>
            <div className="w-full mt-2">
                <h3 className="font-bold text mb-2">
                    Exclusions
                </h3>
                {arrayValues.map((value, index) => (
                    <div key={index} className="w-full flex gap-2 items-center my-2">
                        <TextField
                            inputProps={{ required: true }}
                            onChange={(e) => handleChange(e, index)}
                            value={value}
                            label="Value"
                            variant="outlined"
                            className='w-full my-2'
                        />
                        <IconButton
                            onClick={() => handleRemoveField(index)}
                            color="primary"
                        >
                            <RemoveRoundedIcon />
                        </IconButton>
                    </div>
                ))}
                <div className="w-full flex justify-center p-4">
                    <Button onClick={handleAddField} color="primary" variant="contained">
                        <AddRoundedIcon />
                    </Button>
                </div>
            </div>
        </>
    )
}

export default AddExclusions