import { Box, Button, TextField, Typography } from "@mui/material"
import Checkbox, { checkboxClasses } from "@mui/material/Checkbox";
import { styles } from "./questions.styles";


export default function MultiChoiceQuestion({ title, subTitle, options, onChange, hasCheckBox, hasCustomAnswer }) {
    return (
        <Box sx={styles.questionContainer}>
            <Box sx={styles.mediaBox}>
                <Box>
                    <Typography variant='h3'>{title}</Typography>
                </Box>
                <Box>
                    <Typography variant='h5'>{subTitle}</Typography>
                </Box>
                <Box>
                    {options.map((option) => (
                        <Box>
                            <Button
                                fullWidth sx={styles.questionButtonType2}>
                                {hasCheckBox && (
                                    <Box sx={styles.checkBoxContainer}>
                                        <Checkbox
                                            sx={[styles.checkBox, {
                                                [`&, &.${checkboxClasses.checked}`]: {
                                                    color: '#f64851',
                                                }
                                            }]} />
                                    </Box>
                                )
                                }
                                <Typography>{option.text}</Typography>
                            </Button>
                        </Box>
                    ))}
                    {hasCustomAnswer && (
                        <Box>
                            <Box sx={[styles.mb10, styles.mt30]}>
                                <Typography>Other</Typography>
                            </Box>
                            <Box>
                                <TextField fullWidth sx={[styles.questionTextField, {
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