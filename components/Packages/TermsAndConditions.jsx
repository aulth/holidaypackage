import React from 'react'

const TermsAndConditions = ({content}) => {
    return (
        <div className="text-justify my-2"  dangerouslySetInnerHTML={{ __html: content.termConditions }}></div>
    )
}

export default TermsAndConditions