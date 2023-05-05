import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
// import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import ModalCard2 from '../modals/Modal2';

export default function ServiceCard2() {
  return (
    <Card sx={{ maxWidth: 450 }}>
      <CardMedia
        component="img"
        alt="office"
        height="200"
        image="/img/services7-450x450.png"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          Office Cleaning
        </Typography>
        <Typography variant="body2" color="text.secondary">
        Our office cleaning services are designed to help you maintain a clean, harmonized, and productive workspace for your employees. 
        </Typography>
      </CardContent>
      <CardActions>
        {/* <Button size="small">Learn More</Button> */}
        <ModalCard2/>
      </CardActions>
    </Card>
  );
}