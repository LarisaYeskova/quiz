import { Box, Button, Typography } from "@mui/material";

export default function SixQuestion() {
    return (
        <Box sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
            6
            <Box sx={{ maxWidth: '50%' }}>
                <Box>
                    <Typography variant='h3'>How did you hear about tender?</Typography>
                </Box>
                <Box>
                    <Box>
                        <Button fullWidth sx={{ borderRadius: '6px', marginBottom: '20px', marginTop: '20px', backgroundColor: '#ffff', display: 'flex', flexDirection: 'column', padding: '12px 4px', boxShadow: 1, textTransform: 'none' }}>
                            Social media
                        </Button>
                    </Box>
                    <Box>
                        <Button fullWidth sx={{ borderRadius: '6px', marginBottom: '20px', backgroundColor: '#ffff', display: 'flex', flexDirection: 'column', padding: '12px 4px', boxShadow: 1, textTransform: 'none' }}>
                            Friends or Family
                        </Button>
                    </Box>
                    <Box>
                        <Button fullWidth sx={{ borderRadius: '6px', marginBottom: '20px', backgroundColor: '#ffff', display: 'flex', flexDirection: 'column', padding: '12px 4px', boxShadow: 1, textTransform: 'none' }}>
                            Internt Search
                        </Button>
                    </Box>
                    <Box>
                        <Button fullWidth sx={{ borderRadius: '6px', marginBottom: '20px', backgroundColor: '#ffff', display: 'flex', flexDirection: 'column', padding: '12px 4px', boxShadow: 1, textTransform: 'none' }}>
                            Podcast
                        </Button>
                    </Box>
                    <Box>
                        <Button fullWidth sx={{ borderRadius: '6px', marginBottom: '20px', backgroundColor: '#ffff', display: 'flex', flexDirection: 'column', padding: '12px 4px', boxShadow: 1, textTransform: 'none' }}>
                            Other
                        </Button>
                    </Box>
                    <Box>
                        <Button fullWidth sx={{ borderRadius: '6px', marginBottom: '20px', backgroundColor: '#ffff', display: 'flex', flexDirection: 'column', padding: '12px 4px', boxShadow: 1, textTransform: 'none' }}>
                            Mailer
                        </Button>
                    </Box>
                    <Box>
                        <Button fullWidth sx={{ borderRadius: '6px', marginBottom: '20px', backgroundColor: '#ffff', display: 'flex', flexDirection: 'column', padding: '12px 4px', boxShadow: 1, textTransform: 'none' }}>
                            My dentist
                        </Button>
                    </Box>
                    <Box>
                        <Button fullWidth sx={{ borderRadius: '6px', marginBottom: '20px', backgroundColor: '#ffff', display: 'flex', flexDirection: 'column', padding: '12px 4px', boxShadow: 1, textTransform: 'none' }}>
                            TV
                        </Button>
                    </Box>
                    <Box>
                        <Button fullWidth sx={{ borderRadius: '6px', marginBottom: '20px', backgroundColor: '#ffff', display: 'flex', flexDirection: 'column', padding: '12px 4px', boxShadow: 1, textTransform: 'none' }}>
                            Influencer
                        </Button>
                    </Box>
                </Box>
            </Box>
        </Box>
    )
}