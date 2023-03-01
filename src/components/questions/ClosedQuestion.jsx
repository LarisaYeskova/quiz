import { Box, Button, Typography } from "@mui/material"
import { styles } from "./questions.styles"


export default function ClosedQuestion({ title, options, onChange, answer }) {
    console.log(answer)
    return (
        <Box sx={styles.questionContainer}>
            <Box sx={styles.mediaBox}>
                <Box>
                    <Typography variant='h3'>{title}</Typography>
                </Box>
                <Box>
                    {options.map((option) => (
                        <Box>
                            <Button onClick={() => {
                                onChange(option)
                            }}
                                fullWidth sx={[styles.questionButtonType1, { border: option.text === answer?.text ? '2px solid #f64851' : 'none' }]}>
                                {option.text}
                            </Button>
                        </Box>
                    ))}
                </Box>
            </Box>
        </Box>
    )
}