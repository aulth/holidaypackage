import React, {useEffect} from 'react'

const Overview = ({content}) => {
    return (
        <div className="text-justify my-2" dangerouslySetInnerHTML={{ __html: content.termConditions }}></div>
    )
}

export default Overview