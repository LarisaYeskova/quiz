import { Box, Button, TextField, Typography } from "@mui/material"
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import { styles } from "./questions.styles";
import { mainStyles } from "../main.styles";

export default function QuizForm() {
    return (
        <Box sx={styles.questionContainer}>
            <Box sx={styles.mediaBox}>
                <Box>
                    <CheckCircleIcon sx={styles.CheckCircle} />
                </Box>
                <Box>
                    <Typography variant='h3'>Assessment complete.</Typography>
                </Box>
                <Box>
                    <Typography variant='h5'>We just need a little more information so that we can send your results.</Typography>
                </Box>
                <Box sx={[styles.mb15, styles.mt20]}>
                    <Box sx={styles.textFieldLabel}>First Name</Box>
                    <TextField fullWidth sx={styles.bgWhite} placeholder='Enter your first name' />
                </Box>
                <Box sx={styles.mb15}>
                    <Box sx={styles.textFieldLabel}> Email</Box>
                    <TextField fullWidth sx={styles.bgWhite} placeholder='Enter your Email' />
                </Box>
                <Box sx={styles.mb15}>
                    <Box sx={styles.textFieldLabel}>Zip code</Box>
                    <TextField fullWidth sx={styles.bgWhite} placeholder='Enter your zip code' />
                </Box>
                <Box sx={[mainStyles.marginBottom20, mainStyles.buttonMediaBox]}>
                    <Button
                        sx={mainStyles.mainButton}>
                        <Typography fontFamily={'Modern-Era-Medium'}>See result</Typography>
                    </Button>
                </Box>
                <Box>
                    <Typography variant="h7"
                    >By clicking “See results" you agree to receive offers and updates from Tender. You can unsubscribe <br />at any time.
                    </Typography>
                </Box>
            </Box>
        </Box>
    )
}