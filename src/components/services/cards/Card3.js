import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
// import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import ModalCard3 from '../modals/Modal3';

export default function ServiceCard3() {
  return (
    <Card sx={{ maxWidth: 450 }}>
      <CardMedia
        component="img"
        alt="event"
        height="200"
        image="/img/services2-450x450.png"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          Event Cleaning
        </Typography>
        <Typography variant="body2" color="text.secondary">
        Our event cleaning services are designed to help you prepare your venue before, during, and after your event. 
        </Typography>
      </CardContent>
      <CardActions>
        {/* <Button size="small">Learn More</Button> */}
        <ModalCard3/>
      </CardActions>
    </Card>
  );
}