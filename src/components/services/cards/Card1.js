import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
// import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import ModalCard1 from '../modals/Modal1';
// import ModalCard1 from './Modal1';

export default function ServiceCard1() {
  return (
    <Card sx={{ maxWidth: 450 }}>
      <CardMedia
        component="img"
        alt="house"
        height="200"
        image="/img/services4-450x450.png"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          House/Residential Cleaning
        </Typography>
        <Typography variant="body2" color="text.secondary">
        Our household/residential cleaning services are designed to help you maintain a clean, healthy, and comfortable home. 
        </Typography>
      </CardContent>
      <CardActions>
        {/* <Button size="small">Learn More</Button> */}
        <ModalCard1/>
      </CardActions>
    </Card>
  );
}