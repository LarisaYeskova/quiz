import { Box, Button, Checkbox, Grid, TextField, Typography } from "@mui/material"

export default function EighthQuestion() {
    return (
        <Box sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
            8
            <Box sx={{ maxWidth: '50%' }}>
                <Box>
                    <Typography variant='h3'>How old are you?</Typography>
                </Box>
                <Box>
                    <Box>
                        <Button fullWidth sx={{ display: 'flex', flexDirection: 'row', borderRadius: '6px', marginBottom: '20px', marginTop: '20px', backgroundColor: '#ffff', display: 'flex', flexDirection: 'column', padding: '12px 4px', boxShadow: 1, textTransform: 'none' }}>
                            <Box>Under 13</Box>
                        </Button>
                    </Box>
                    <Box>
                        <Button fullWidth sx={{ display: 'flex', borderRadius: '6px', marginBottom: '20px', backgroundColor: '#ffff', display: 'flex', flexDirection: 'column', padding: '12px 4px', boxShadow: 1, textTransform: 'none' }}>
                            <Box>13-15</Box>
                        </Button>
                    </Box>
                    <Box>
                        <Button fullWidth sx={{ display: 'flex', borderRadius: '6px', marginBottom: '20px', backgroundColor: '#ffff', display: 'flex', flexDirection: 'column', padding: '12px 4px', boxShadow: 1, textTransform: 'none' }}>
                            <Box>16-17</Box>
                        </Button>
                    </Box>
                    <Box>
                        <Button fullWidth sx={{ display: 'flex', borderRadius: '6px', marginBottom: '20px', backgroundColor: '#ffff', display: 'flex', flexDirection: 'column', padding: '12px 4px', boxShadow: 1, textTransform: 'none' }}>
                            <Box>16-25</Box>
                        </Button>
                    </Box>
                    <Box>
                        <Button fullWidth sx={{ display: 'flex', borderRadius: '6px', marginBottom: '20px', backgroundColor: '#ffff', display: 'flex', flexDirection: 'column', padding: '12px 4px', boxShadow: 1, textTransform: 'none' }}>
                            <Box>26-35</Box>
                        </Button>
                    </Box>
                    <Box>
                        <Button fullWidth sx={{ display: 'flex', borderRadius: '6px', marginBottom: '20px', backgroundColor: '#ffff', display: 'flex', flexDirection: 'column', padding: '12px 4px', boxShadow: 1, textTransform: 'none' }}>
                            <Box>36-45</Box>
                        </Button>
                    </Box>
                    <Box>
                        <Button fullWidth sx={{ display: 'flex', borderRadius: '6px', marginBottom: '20px', backgroundColor: '#ffff', display: 'flex', flexDirection: 'column', padding: '12px 4px', boxShadow: 1, textTransform: 'none' }}>
                            <Box>46+</Box>
                        </Button>
                    </Box>
                </Box>
            </Box>
        </Box>
    )
}