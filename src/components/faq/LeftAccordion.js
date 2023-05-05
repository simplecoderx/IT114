import * as React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

export default function LeftAccordion() {
  return (
    <div>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography>Are Your Service Easy to Avail?</Typography>
        </AccordionSummary>
        <AccordionDetails >
          <Typography>
          Absolutely! We strive to make our services as easy and convenient to avail as possible. 
          You can book our services online or by phone, and we offer flexible scheduling options to fit your needs. 
          We also offer customizable cleaning plans, so you can choose the specific services you need and 
          the frequency of cleaning that works best for you.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2a-content"
          id="panel2a-header"
        >
          <Typography>Is this Services Available in My Country?</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
          We would be happy to check if our cleaning services are available in your country. 
          Please provide us with your location, 
          and we will do our best to determine if we have a presence in your area. 
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel3a-content"
          id="panel3a-header"
        >
          <Typography>Will I receive Future Updates?</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
          Yes, we strive to maintain regular communication with our clients and keep them informed of any future updates or 
          changes to our services. We value our clients' feedback and take their suggestions and concerns into consideration when making updates to our services. 
          We will also notify you of any changes to pricing or scheduling well in advance to ensure that you have ample time to adjust your cleaning plan as needed. 
          </Typography>
        </AccordionDetails>
      </Accordion>
    </div>
  );
}