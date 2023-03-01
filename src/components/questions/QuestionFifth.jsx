import { Box, Button, Grid, Typography } from "@mui/material"

export default function FifthQuestion() {
    return (
        <Box sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
            5
            <Box sx={{ maxWidth: '50%' }}>
                <Box>
                    <Typography variant='h3'>How soon do you want to get started?</Typography>
                </Box>
                <Box>
                    <Box>
                        <Button fullWidth sx={{ borderRadius: '6px', marginBottom: '20px', marginTop: '20px', backgroundColor: '#ffff', display: 'flex', flexDirection: 'column', padding: '12px 4px', boxShadow: 1, textTransform: 'none' }}>
                            Right away</Button>
                    </Box>
                    <Box>
                        <Button fullWidth sx={{ borderRadius: '6px', marginBottom: '20px', backgroundColor: '#ffff', display: 'flex', flexDirection: 'column', padding: '12px 4px', boxShadow: 1, textTransform: 'none' }}>
                            A few weeks</Button>
                    </Box>
                    <Box>
                        <Button fullWidth sx={{ borderRadius: '6px', marginBottom: '20px', backgroundColor: '#ffff', display: 'flex', flexDirection: 'column', padding: '12px 4px', boxShadow: 1, textTransform: 'none' }}>
                            A few months</Button>
                    </Box>
                    <Box>
                        <Button fullWidth sx={{ borderRadius: '6px', marginBottom: '20px', backgroundColor: '#ffff', display: 'flex', flexDirection: 'column', padding: '12px 4px', boxShadow: 1, textTransform: 'none' }}>
                            Not sure</Button>
                    </Box>
                </Box>
            </Box>
        </Box>
    )
}