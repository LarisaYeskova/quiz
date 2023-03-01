import { Box, Button, Checkbox, Grid, TextField, Typography } from "@mui/material"

export default function MultiChoiceQuestion({ title, subTitle, options, onChange, hasCheckBox, hasCustomAnswer }) {
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
                            <Button fullWidth sx={{
                                borderRadius: '6px', marginBottom: '20px', marginTop: '20px', backgroundColor: '#ffff', display: 'flex', alignItems: 'center', justifyContent: 'start', padding: '12px 4px',
                                boxShadow: 'rgb(255 0 0 / 5%) 0px 6px 13px 0px, rgb(0 0 0 / 8%) 0px 1px 4px 0px', transition: 'all 0.08s ease-in-out 0s',
                                ':hover': { boxShadow: 'rgb(255 0 0 / 5%) 0px 13px 22px 0px, rgb(0 0 0 / 3%) 0px 6px 24px 0px', background: '#ffff' },
                                textTransform: 'none'
                            }}>
                                {hasCheckBox && (
                                    <Box sx={{ margin: '0px 10px', }}>
                                        <Checkbox sx={{ color: '#f64851', width: '16px', height: '16px' }} />
                                    </Box>
                                )
                                }
                                <Typography>{option.text}</Typography>
                            </Button>
                        </Box>
                    ))}
                    {hasCustomAnswer && (
                        <Box>
                            <Box sx={{ marginBottom: '10px', marginTop: '30px' }}>
                                <Typography>Other</Typography>
                            </Box>
                            <Box>
                                <TextField fullWidth sx={{
                                    "& .MuiOutlinedInput-root.Mui-focused": {
                                        "& > fieldset": {
                                            borderColor: "#f64851"
                                        }
                                    }, borderRadius: '6px', backgroundColor: '#ffff', display: 'flex', flexDirection: 'column', border: '1px solid #dbdada', textTransform: 'none'
                                }} />
                            </Box>
                        </Box>
                    )
                    }
                </Box>
            </Box>
        </Box>
    )
}