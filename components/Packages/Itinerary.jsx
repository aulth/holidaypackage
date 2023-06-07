import React from 'react'
import Accordion from '@mui/material/Accordion';
import AccordionDetails from '@mui/material/AccordionDetails';
import AccordionSummary from '@mui/material/AccordionSummary';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
const Itinerary = ({ content }) => {
    const [expanded, setExpanded] = React.useState(false);
    const handleChange = (panel) => (event, isExpanded) => {
        setExpanded(isExpanded ? panel : false);
    };
    return (
        <div className='relative z-0'>
            {
                content.itinerary.map((itinerary, index) => {
                    return <Accordion key={index} expanded={expanded === `panel${index + 1}`} onChange={handleChange(`panel${index + 1}`)} className='custom-accordion'>
                        <AccordionSummary
                            expandIcon={<ExpandMoreIcon />}
                            aria-controls={`panel${index + 1}bh-content`}
                            id={`panel${index + 1}bh-header`}
                        >
                            <Typography sx={{ width: '33%', flexShrink: 0 }}>
                                {itinerary.highlight}
                            </Typography>
                            <Typography sx={{ color: 'text.secondary' }}>
                                {itinerary.title}
                            </Typography>
                        </AccordionSummary>
                        <AccordionDetails>
                            <div dangerouslySetInnerHTML={{ __html: itinerary.description }} ></div>
                        </AccordionDetails>
                    </Accordion>
                })
            }
        </div >
    )
}

export default Itinerary