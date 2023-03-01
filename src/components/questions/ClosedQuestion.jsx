import { Box, Button, Typography } from "@mui/material"
import { styles } from "./questions.styles"


export default function ClosedQuestion({ title, options, onChange }) {
    return (
        <Box sx={styles.questionContainer}>
            <Box sx={styles.mediaBox}>
                <Box>
                    <Typography variant='h3'>{title}</Typography>
                </Box>
                <Box>
                    {options.map((option) => (
                        <Box>
                            <Button fullWidth sx={styles.questionButtonType1}>
                                {option.text}
                            </Button>
                        </Box>
                    ))}
                </Box>
            </Box>
        </Box>
    )
}