import { Box, Button, Checkbox, Grid, TextField, Typography } from "@mui/material"

export default function OneChoiceQuestion({ title, options, onChange }) {
    return (
        <Box sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
            <Box sx={{ maxWidth: '50%' }}>
                <Box>
                    <Typography variant='h3'>{title}</Typography>
                </Box>
                <Box>
                    {options.map((option) => (
                        <Box>
                            <Button fullWidth sx={{ borderRadius: '6px', marginBottom: '20px', marginTop: '15px', backgroundColor: '#ffff', display: 'flex', flexDirection: 'column', padding: '12px 4px', boxShadow: 1, textTransform: 'none' }}>
                                {option.text}
                            </Button>
                        </Box>
                    ))}
                </Box>
            </Box>
        </Box>
    )
}