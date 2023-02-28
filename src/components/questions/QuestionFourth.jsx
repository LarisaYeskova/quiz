import { Box, Button, Grid, Typography } from "@mui/material"

export default function FourthQuestion() {
    return (
        <Box sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
            4
            <Box sx={{ maxWidth: '50%' }}>
                <Box>
                    <Typography variant='h3'>Do you have a permanent retainer?</Typography>
                </Box>
                <Box>
                    <Box>
                        <Button fullWidth sx={{ borderRadius: '6px', marginBottom: '20px', marginTop: '15px', backgroundColor: '#ffff', display: 'flex', flexDirection: 'column', padding: '12px 4px', boxShadow: 1, textTransform: 'none' }}> Yes</Button>
                    </Box>
                    <Box>
                        <Button fullWidth sx={{ borderRadius: '6px', marginBottom: '20px', backgroundColor: '#ffff', display: 'flex', flexDirection: 'column', padding: '12px 4px', boxShadow: 1, textTransform: 'none' }}> No</Button>
                    </Box>
                </Box>
            </Box>
        </Box>
    )
}