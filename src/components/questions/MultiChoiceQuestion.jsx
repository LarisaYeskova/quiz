import { Box, Button, Checkbox, Grid, TextField, Typography } from "@mui/material"

export default function MultiChoiceQuestion({ title, subTitle, options, onChange }) {
    console.log(options)
    return (
        <Box sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
            <Box sx={{ maxWidth: '50%' }}>
                <Box>
                    <Typography variant='h3'>{title}</Typography>
                </Box>
                <Box>
                    <Typography variant='h5'>{subTitle}</Typography>
                </Box>
                <Box>
                    {options.map((option) => (
                        <Box>
                            <Button fullWidth sx={{ borderRadius: '6px', marginBottom: '20px', marginTop: '20px', backgroundColor: '#ffff', display: 'flex', alignItems: 'center', justifyContent: 'start', padding: '12px 4px', boxShadow: 1, textTransform: 'none' }}>
                                {option.checkBox && (
                                    <Box sx={{ margin: '0px 10px', }}>
                                        <Checkbox sx={{ color: 'red', width: '16px', height: '16px' }} />
                                    </Box>
                                )
                                }
                                <Typography>{option.text}</Typography>
                            </Button>
                        </Box>
                    ))}
                </Box>
            </Box>
        </Box>
    )
}