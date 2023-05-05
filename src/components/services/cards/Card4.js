import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
// import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import ModalCard4 from '../modals/Modal4';

export default function ServiceCard4() {
  return (
    <Card sx={{ maxWidth: 450 }}>
      <CardMedia
        component="img"
        alt="sanitation"
        height="200"
        image="/img/services9-450x450.png"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          Sanitation Services
        </Typography>
        <Typography variant="body2" color="text.secondary">
        Our sanitization services can help create a clean and hygienic environment for your employees and customers, 
        especially during flu season or times of high risk for contagious diseases. 
        </Typography>
      </CardContent>
      <CardActions>
        {/* <Button size="small">Learn More</Button> */}
        <ModalCard4/>
      </CardActions>
    </Card>
  );
}