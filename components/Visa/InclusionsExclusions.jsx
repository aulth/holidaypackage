import React from 'react'
import CheckOutlinedIcon from '@mui/icons-material/CheckOutlined';
import BlockOutlinedIcon from '@mui/icons-material/BlockOutlined';
const InclusionsExclusions = ({content}) => {
    return (
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
            <div>
                <h3 className="font-bold text-lg border-b pb-1">Inclusions</h3>
                <ul className="flex flex-col text-sm mt-2">
                    {
                        content.inclusions.map((inclusion, index)=>{
                            return <li key={index} className="flex items-start gap-1 ">
                            <CheckOutlinedIcon  className="font-bold mt-1 text-green-500" /><span className='text-justify'>{inclusion}</span>
                        </li>
                        })
                    }
                </ul>
            </div>
            <div>
                <h3 className="font-bold text-lg border-b pb-1">Exclusions</h3>
                <ul className="flex flex-col text-sm mt-2">
                    {
                        content.inclusions.map((exclusion, index)=>{
                            return <li key={index} className="flex items-start gap-1 ">
                            <BlockOutlinedIcon className="text-sm font-bold mt-1 text-red-500" /><span className='text-justify'>{exclusion}</span>
                        </li>
                        })
                    }
                </ul>
            </div>
        </div>
    )
}

export default InclusionsExclusions