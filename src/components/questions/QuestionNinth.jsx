import { Box, TextField, Typography } from "@mui/material"
import CheckCircleIcon from '@mui/icons-material/CheckCircle';

export default function NinthQuestion() {
    return (
        <Box sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
            9
            <Box sx={{ maxWidth: '50%' }}>
                <Box>
                    <CheckCircleIcon sx={{ color: '#f64851', width: '50px', height: '50px' }} />
                </Box>
                <Box>
                    <Typography variant='h3'>Assessment complete.</Typography>
                </Box>
                <Box>
                    <Typography variant='h5'>We just need a little more information so that we can send your results.</Typography>
                </Box>
                <Box sx={{ marginBottom: '15px', marginTop: '20px', }}>
                    <Box sx={{ textAlign: 'start', marginBottom: '10px' }}>First Name</Box>
                    <TextField fullWidth sx={{ backgroundColor: '#ffff' }} placeholder='Enter your first name' />
                </Box>
                <Box sx={{ marginBottom: '15px' }}>
                    <Box sx={{ textAlign: 'start', marginBottom: '10px' }}> Email</Box>
                    <TextField fullWidth sx={{ backgroundColor: '#ffff' }} placeholder='Enter your Email' />
                </Box>
                <Box sx={{ marginBottom: '15px' }}>
                    <Box sx={{ textAlign: 'start', marginBottom: '10px' }}>Zip Code</Box>
                    <TextField fullWidth sx={{ backgroundColor: '#ffff' }} placeholder='Enter your zip code' />
                </Box>
            </Box>
        </Box>
    )
}