import { Box, Button, Typography } from "@mui/material"
import { styles } from "./questions.styles"

export default function MultiChoiceImgQuestion({ title, subTitle, options, onChange, answer }) {
    return (
        <Box sx={styles.questionContainer}>
            <Box sx={styles.mediaBox}>
                <Box>
                    <Typography variant='h3' fontFamily={'Modern-Era-Medium'}>{title}</Typography>
                </Box>
                <Box>
                    <Typography variant='h5' fontFamily={"Modern-Era-Regular"}>{subTitle}</Typography>
                </Box>
                <Box sx={styles.questionContainerImg}>
                    {options.map((option) => {
                        const foundAnswer = answer.find(answr => answr?.text === option.text)
                        return (
                            <Box key={option.title}>
                                <Button
                                    onClick={() => {
                                        if (foundAnswer) {
                                            const newAnswer = answer.filter((answr) => answr?.text !== option.text)
                                            onChange(newAnswer)
                                        } else {
                                            onChange([...answer, option])
                                        }

                                    }}
                                    sx={[styles.questionButtonType3, { border: option.text === foundAnswer?.text ? '2px solid #f64851' : 'none' }]}>
                                    <img
                                        style={{
                                            textAlign: 'center',
                                            maxWidth: '150px',
                                            maxHeight: '150px',
                                            width: '100%'
                                        }}
                                        src={option.image}
                                        alt='option'
                                    />
                                    <Typography variant="h4" fontFamily={"Modern-Era-Regular"}>{option.text}</Typography>
                                </Button>
                            </Box>
                        )
                    })}
                </Box>
            </Box>
        </Box>
    )
}