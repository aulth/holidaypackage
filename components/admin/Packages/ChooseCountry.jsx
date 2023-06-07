import React from 'react'
import { TextField, MenuItem } from '@mui/material'
import country from '../../../public/country.json'
const ChooseCountry = ({setData}) => {
    const handleChange = (e) => {
        setData(prevData => ({ ...prevData, country: e.target.value}));
    }
    return (
        <>
            <TextField
                select
                label="Country"
                defaultValue={''}
                name='country'
                onChange={handleChange}
                className='w-full mt-3'
                inputProps={{ required: true }}
            >
                {
                    country.map((country, index) => {
                        return <MenuItem key={index} value={country.name}>
                            {country.name}
                        </MenuItem>
                    })
                }
            </TextField>
        </>
    )
}

export default ChooseCountry