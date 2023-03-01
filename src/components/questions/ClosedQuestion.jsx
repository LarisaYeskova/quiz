import { Box, Button, Checkbox, Grid, TextField, Typography } from "@mui/material"

export default function ClosedQuestion({ title, options, onChange }) {
    return (
        <Box sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
            <Box sx={{ maxWidth: '50%' }}>
                <Box>
                    <Typography variant='h3'>{title}</Typography>
                </Box>
                <Box>
                    {options.map((option) => (
                        <Box>
                            <Button fullWidth sx={{
                                borderRadius: '6px', marginBottom: '20px', marginTop: '15px', backgroundColor: '#ffff', display: 'flex', flexDirection: 'column', padding: '12px 4px',
                                boxShadow: 'rgb(255 0 0 / 5%) 0px 6px 13px 0px, rgb(0 0 0 / 8%) 0px 1px 4px 0px', transition: 'all 0.08s ease-in-out 0s',
                                ':hover': { boxShadow: 'rgb(255 0 0 / 5%) 0px 13px 22px 0px, rgb(0 0 0 / 3%) 0px 6px 24px 0px', background: '#ffff' },
                                textTransform: 'none'
                            }}>
                                {option.text}
                            </Button>
                        </Box>
                    ))}
                </Box>
            </Box>
        </Box>
    )
}