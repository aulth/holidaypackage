import React from 'react'
import FlightTakeoffOutlinedIcon from '@mui/icons-material/FlightTakeoffOutlined';
import FlightLandOutlinedIcon from '@mui/icons-material/FlightLandOutlined';
const Flights = ({ content }) => {
    return (
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
            <div>
                <h3 className="font-bold text-lg border-b pb-1">Departure</h3>
                <div className="border rounded shadow p-3 mt-2">
                    <div className="flex justify-between items-center">
                        <div className="flex gap-2 items-center">
                            <img src={content.flights.depart.logo} className='w-7' alt="qatar" />
                            <h4 className="text-sm font-bold">{content.flights.depart.flight}</h4>
                        </div>
                        <span className="text-sm">{content.flights.depart.class}</span>
                    </div>
                    <div className="w-full grid gap-2 grid-cols-2 mt-4">
                        <div>
                            <span className='text-sm'>From</span>
                            <h4 className="text-xl font-bold">{content.flights.depart.fromCode}</h4>
                            <p className="text-sm font-semibold">{content.flights.depart.from}</p>
                        </div>
                        <div>
                            <span className='text-sm'>To</span>
                            <h4 className="text-xl font-bold">{content.flights.depart.toCode}</h4>
                            <p className="text-sm font-semibold">{content.flights.depart.to}</p>
                        </div>
                    </div>
                    <div className="border-b border-dotted border-gray-500 my-2"></div>
                    <div className="w-full grid gap-2 grid-cols-2">
                        <div>
                            <span className='text-sm'>Depart</span>
                            <div className="flex items-start gap-2 text-sm">
                                <FlightTakeoffOutlinedIcon className='text-base' /> <span className="font-semibold">{content.flights.depart.depart}</span>
                            </div>
                        </div>
                        <div>
                            <span className='text-sm'>Arrival</span>
                            <div className="flex items-start gap-2 text-sm">
                                <FlightLandOutlinedIcon className='text-base' /> <span className="font-semibold">{content.flights.depart.arrive}</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div>
                <h3 className="font-bold text-lg border-b pb-1">Return</h3>
                <div className="border rounded shadow p-3 mt-2">
                    <div className="flex justify-between items-center">
                        <div className="flex gap-2 items-center">
                            <img src={content.flights.return.logo} className='w-7' alt="qatar" />
                            <h4 className="text-sm font-bold">{content.flights.return.flight}</h4>
                        </div>
                        <span className="text-sm">{content.flights.return.class}</span>
                    </div>
                    <div className="w-full grid gap-2 grid-cols-2 mt-4">
                        <div>
                            <span className='text-sm'>From</span>
                            <h4 className="text-xl font-bold">{content.flights.return.fromCode}</h4>
                            <p className="text-sm font-semibold">{content.flights.return.from}</p>
                        </div>
                        <div>
                            <span className='text-sm'>To</span>
                            <h4 className="text-xl font-bold">{content.flights.return.toCode}</h4>
                            <p className="text-sm font-semibold">{content.flights.return.to}</p>
                        </div>
                    </div>
                    <div className="border-b border-dotted border-gray-500 my-2"></div>
                    <div className="w-full grid gap-2 grid-cols-2">
                        <div>
                            <span className='text-sm'>Depart</span>
                            <div className="flex items-start gap-2 text-sm">
                                <FlightTakeoffOutlinedIcon className='text-base' /> <span className="font-semibold">{content.flights.return.depart}</span>
                            </div>
                        </div>
                        <div>
                            <span className='text-sm'>Arrival</span>
                            <div className="flex items-start gap-2 text-sm">
                                <FlightLandOutlinedIcon className='text-base' /> <span className="font-semibold">{content.flights.return.arrive}</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Flights