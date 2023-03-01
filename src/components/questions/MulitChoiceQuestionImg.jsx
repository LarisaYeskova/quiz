import { Box, Button, Checkbox, Grid, TextField, Typography } from "@mui/material"

export default function MultiChoiceImgQuestion({ title, subTitle, options, onChange }) {
    return (
        <Box sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
            <Box sx={{ maxWidth: '50%' }}>
                <Box>
                    <Typography variant='h3'>{title}</Typography>
                </Box>
                <Box>
                    <Typography variant='h5'>{subTitle}</Typography>
                </Box>
                <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                    {options.map((option) => (
                        <Box>
                            <Button sx={{ borderRadius: '6px', margin: '10px', minWidth: '120px', maxWidth: '120px', backgroundColor: '#ffff', display: 'flex', flexDirection: 'column', padding: '12px 4px', boxShadow: 1 }}>
                                <img
                                    style={{
                                        textAlign: 'center',
                                        maxWidth: '150px',
                                        maxHeight: '150px',
                                        width: '100%'
                                    }}
                                    src={option.image}
                                />
                                <Typography variant="h4">{option.text}</Typography>
                            </Button>
                        </Box>
                    ))}
                </Box>
            </Box>
        </Box>
    )
}