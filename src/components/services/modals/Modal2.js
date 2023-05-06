import * as React from 'react';
import Backdrop from '@mui/material/Backdrop';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Fade from '@mui/material/Fade';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';


const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: '50%', // Use a percentage value for responsive sizing
    maxHeight: '80vh',
    bgcolor: '#fff',
    boxShadow: '0px 3px 15px rgba(0, 0, 0, 0.5)',
    p: 4,
    textAlign: 'justify',
    borderRadius: '5px',
    outline: 'none',
    overflow: 'auto',
    '&::-webkit-scrollbar': {
        width: '0.5em',
        height: '0.5em'
      },
      '&::-webkit-scrollbar-thumb': {
        backgroundColor: 'rgba(0, 0, 0, 0.2)',
        borderRadius: '4px'
      },
    '@media (max-width: 1200px)': {
        width: '80%',
        top: '50%',
        fontSize: '1px',
      textAlign: 'justify',
      margin: '4px',
      },
    '@media (max-width: 600px)': {
      // Define styles for screens smaller than 600px wide
      width: '80%',
      top: '50%',
      fontSize: '1px',
    textAlign: 'justify',
    margin: '4px',
    // maxWidth:'70rem',
    },
    '@media (max-width: 500px)': {
        // Define styles for screens smaller than 600px wide
        width: '90%',
        top: '50%',
        fontSize: '12px',
      textAlign: 'justify',
      margin: '4px',
      // maxWidth:'70rem',
      },
  };


export default function ModalCard2() {
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    return (
        <div>
            <Button onClick={handleOpen}>Read More</Button>
            <Modal
                aria-labelledby="transition-modal-title"
                aria-describedby="transition-modal-description"
                open={open}
                onClose={handleClose}
                closeAfterTransition
                slots={{ backdrop: Backdrop }}
                slotProps={{
                    backdrop: {
                        timeout: 500,
                    },
                }}
            >
                <Fade in={open}>
                    <Box sx={style}>
                        <IconButton
                            aria-label="close"
                            sx={{
                                position: 'absolute',
                                right: 8,
                                top: 8,
                                color: (theme) => theme.palette.grey[500],
                            }}
                            onClick={handleClose}
                        >
                            <CloseIcon />
                        </IconButton>
                        <Typography id="transition-modal-title" variant="h3" component="h2">
                            Office Cleaning
                        </Typography>
                        <Typography id="transition-modal-description" sx={{ mt: 2 }}>
                            Hinlo Services understands the importance of finding office cleaning services you can count on to disinfect and clean your business/area. We are more than just the experts in home cleaning; we are experts in providing the healthy, commercial-level deep clean your business — and your customers — deserve.
                            As a small business owner, getting the best return possible on your investments in human resources, marketing, and sales is critical to your success. Whether you're a retail store, service provider, or other small company, keeping your facility/office clean and maintained is good for business—and the bottom line.
                        </Typography>

                    </Box>
                </Fade>
            </Modal>
        </div>
    );
}