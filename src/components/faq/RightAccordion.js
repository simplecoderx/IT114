import * as React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

export default function RightAccordion() {
  return (
    <div>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography>How and how Much will I will Pay?</Typography>
        </AccordionSummary>
        <AccordionDetails >
          <Typography>
          The cost of our services depends on several factors, such as the type of cleaning services you require,and etc.
          We offer customizable cleaning plans to meet your specific needs and preferences, 
          and we will provide you with a quote upfront based on your requirements. 
          Our pricing is competitive and affordable, and we strive to provide excellent value for our clients' money.
          We offer flexible payment options to make it easy and convenient for you to pay for our cleaning services. 
          You can pay for our services online through our website, 
          or you can pay in person at the time of service. We accept major credit cards, debit cards, and cash.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2a-content"
          id="panel2a-header"
        >
          <Typography>Are there other or additional Fees?</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
          We aim to provide transparent and upfront pricing to our clients, and we do not have any hidden or additional fees. 
          However, there may be some additional charges if you request additional services that were not included in your initial cleaning plan.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel3a-content"
          id="panel3a-header"
        >
          <Typography>How can I avail your Services?</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
          Customize your cleaning plan: We offer customizable cleaning plans to meet your specific needs and preferences. 
          You can choose the type of cleaning services you need and the frequency of cleaning that works best for you..
          </Typography>
        </AccordionDetails>
      </Accordion>
    </div>
  );
}