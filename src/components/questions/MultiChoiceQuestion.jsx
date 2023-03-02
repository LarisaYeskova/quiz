import { Box, Button, TextField, Typography } from "@mui/material"
import Checkbox, { checkboxClasses } from "@mui/material/Checkbox";
import { styles } from "./questions.styles";


export default function MultiChoiceQuestion({ title, subTitle, options, onChange, hasCheckBox, hasCustomAnswer, answer, onChangeOther, other }) {
    return (
        <Box sx={styles.questionContainer}>
            <Box sx={styles.mediaBox}>
                <Box>
                    <Typography variant='h3' fontFamily={'Modern-Era-Medium'}>{title}</Typography>
                </Box>
                <Box>
                    <Typography variant='h5' fontFamily={"Modern-Era-Regular"}>{subTitle}</Typography>
                </Box>
                <Box>
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
                                    fullWidth
                                    sx={[styles.questionButtonType2, { border: option.text === foundAnswer?.text ? '2px solid #f64851' : 'none' }]}>
                                    {hasCheckBox && (
                                        <Box sx={styles.checkBoxContainer}>
                                            <Checkbox
                                                checked={!!foundAnswer}
                                                sx={[styles.checkBox, {
                                                    [`&, &.${checkboxClasses.checked}`]: {
                                                        color: '#f64851',
                                                    }
                                                }]} />
                                        </Box>
                                    )}
                                    <Typography variant="h4" fontFamily={"Modern-Era-Regular"}>{option.text}</Typography>
                                </Button>
                            </Box>
                        );
                    })}
                    {hasCustomAnswer && (
                        <Box>
                            <Box sx={[styles.mb10, styles.mt30]}>
                                <Typography variant="h6" fontFamily={"Modern-Era-Regular"}>Other</Typography>
                            </Box>
                            <Box>
                                <TextField
                                    onChange={({ target: { value } }) => {
                                        onChangeOther(value.trim())
                                    }}
                                    value={other}
                                    multiline
                                    maxRows={4}
                                    fullWidth
                                    sx={[styles.questionTextField, {
                                        "& .MuiOutlinedInput-root.Mui-focused": {
                                            "& > fieldset": {
                                                borderColor: "#f64851"
                                            }
                                        },

                                    }]} />
                            </Box>
                        </Box>
                    )
                    }
                </Box>
            </Box>
        </Box>
    )
}