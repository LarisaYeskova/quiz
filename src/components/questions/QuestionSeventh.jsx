import { Box, Button, Checkbox, Grid, TextField, Typography } from "@mui/material"

export default function SeventhQuestion() {
    return (
        <Box sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
            7
            <Box sx={{ maxWidth: '50%' }}>
                <Box>
                    <Typography variant='h3'>Is there anything else you want to know about Tender?</Typography>
                </Box>
                <Box>
                    <Typography variant='h5'>Choose all that apply.</Typography>
                </Box>
                <Box>
                    <Box>
                        <Button fullWidth sx={{ borderRadius: '6px', marginBottom: '20px', backgroundColor: '#ffff', display: 'flex', flexDirection: 'column', padding: '12px 4px', boxShadow: 1, textTransform: 'none' }}>
                            Insurance overview
                        </Button>
                    </Box>
                    <Box>
                        <Button fullWidth sx={{ borderRadius: '6px', marginBottom: '20px', backgroundColor: '#ffff', display: 'flex', flexDirection: 'column', padding: '12px 4px', boxShadow: 1, textTransform: 'none' }}>
                            Photos of patient results
                        </Button>
                    </Box>
                    <Box>
                        <Button fullWidth sx={{ borderRadius: '6px', marginBottom: '20px', backgroundColor: '#ffff', display: 'flex', flexDirection: 'column', padding: '12px 4px', boxShadow: 1, textTransform: 'none' }}>
                            Cost breakdown
                        </Button>
                    </Box>
                    <Box>
                        <Button fullWidth sx={{ borderRadius: '6px', marginBottom: '20px', backgroundColor: '#ffff', display: 'flex', flexDirection: 'column', padding: '12px 4px', boxShadow: 1, textTransform: 'none' }}>
                            How candid is diffrent from competitors
                        </Button>
                    </Box>
                    <Box>
                        <Button fullWidth sx={{ borderRadius: '6px', marginBottom: '20px', backgroundColor: '#ffff', display: 'flex', flexDirection: 'column', padding: '12px 4px', boxShadow: 1, textTransform: 'none' }}>
                            How aligners are made
                        </Button>
                    </Box>
                    <Box>
                        <Button fullWidth sx={{ borderRadius: '6px', marginBottom: '20px', backgroundColor: '#ffff', display: 'flex', flexDirection: 'column', padding: '12px 4px', boxShadow: 1, textTransform: 'none' }}>
                            How Tender works
                        </Button>
                    </Box>
                    <Box>
                        <Typography>Other</Typography>
                    </Box>
                    <Box>
                        <TextField fullWidth sx={{ display: 'flex', borderRadius: '6px', backgroundColor: '#ffff', display: 'flex', flexDirection: 'column', border: '1px solid #dbdada', textTransform: 'none' }}></TextField>
                    </Box>
                </Box>
            </Box>
        </Box>
    )
}