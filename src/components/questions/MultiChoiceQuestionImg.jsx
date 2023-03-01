import { Box, Button, Typography } from "@mui/material"
import { styles } from "./questions.styles"

export default function MultiChoiceImgQuestion({ title, subTitle, options, onChange }) {
    return (
        <Box sx={styles.questionContainer}>
            <Box sx={styles.mediaBox}>
                <Box>
                    <Typography variant='h3'>{title}</Typography>
                </Box>
                <Box>
                    <Typography variant='h5'>{subTitle}</Typography>
                </Box>
                <Box sx={styles.questionContainerImg}>
                    {options.map((option) => (
                        <Box>
                            <Button sx={styles.questionButtonType3}>
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