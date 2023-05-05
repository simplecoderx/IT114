import * as React from 'react';
import Backdrop from '@mui/material/Backdrop';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Fade from '@mui/material/Fade';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';

// const style = {
//   position: 'absolute',
//   top: '50%',
//   left: '50%',
//   transform: 'translate(-50%, -50%)',
//   width: 1000,
//   bgcolor: 'background.paper',
//   border: '2px solid #000',
//   boxShadow: 24,
//   p: 4,
//   whiteSpace: 'pre-line'
// };

const style = {
    position: 'absolute',
    top: '33%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: '50%', // Use a percentage value for responsive sizing
    // maxWidth: 500, // Use a maximum width for larger screens
    maxHeight: '80vh',
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
    whiteSpace: 'pre-line',
    overflow: 'auto',

    '@media (max-width: 600px)': {
        // Define styles for screens smaller than 600px wide
        width: '80%',
        top: '50%',

    },
};


export default function ModalCard1() {
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
                            House/Residential Cleaning
                        </Typography>
                        <Typography id="transition-modal-description" sx={{ mt: 2 }}>
                            If you want a cleaner home more often without the work, Hinlo Services is the right service to contact! We’ll get your home cleaner and healthier than ever at rates that might be more cost-effective than you imagined. That means your home can have less dirt, germs,
                            and grime more often at a price that makes housekeeping services a wise investment. The return on your investment includes a clean and tidy home without all the work, a healthier environment for your family, and more free time to enjoy the things you love.
                        </Typography>

                    </Box>
                </Fade>
            </Modal>
        </div>
    );
}