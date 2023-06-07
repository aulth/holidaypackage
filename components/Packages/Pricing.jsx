import React from 'react';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper } from '@mui/material';

const PricingTable = ({ content }) => {
    const traveller = {
            "adultSingle":"Cost per Adult Single Occupancy",
            "adultDouble":"Cost per Adult Double Occupancy",
            "adultTriple":"Cost per Adult Triple Occupancy",
            "child":"Additional Children rate 2 to 12 Years",
            "infant":"Additional Infant rate Upto 2 Years"
    }
    return (
        <div className="mt-4">
            <TableContainer component={Paper} >
                <Table>
                    <TableHead>
                        <TableRow>
                            <TableCell align="left">Traveler Type</TableCell>
                            <TableCell align="left">Price</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {
                            Object.keys(content.price).map((key) => {
                                return <TableRow key={key}>
                                    <TableCell align="left">{traveller[key]}</TableCell>
                                    <TableCell align="left">{content.price[key]}</TableCell>
                                </TableRow>
                            })
                        }
                    </TableBody>
                </Table>
            </TableContainer>
        </div>
    );
};

export default PricingTable;
