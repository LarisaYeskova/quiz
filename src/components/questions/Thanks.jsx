import { Box, Button, TextField, Typography } from "@mui/material"
import Smile from "../../assets/sans_titre.png"
import { mainStyles } from "../main.styles"
import { styles } from "./questions.styles"


export default function Thanks({ setQuestionNumber, setPercentage }) {
    const backToTop = () => {
        setQuestionNumber(0)
        setPercentage(10)
    }
    return (
        <Box sx={styles.questionContainer}>
            <Box>
                <img
                    style={{
                        textAlign: 'center',
                        minWidth: '280px',
                        maxWidth: '300px',
                        height: '150px',
                    }}
                    src={Smile}
                    alt='smile'
                />
            </Box>
            <Box>
                <Typography variant='h3' fontFamily={'Modern-Era-Medium'}>Thanks!</Typography>
                <Typography variant='h5' fontFamily={"Modern-Era-Regular"}>You seem like a great fit, and there`s a Tender provider in your area.You can find their<br />
                    information in our doctor locator!
                </Typography>
            </Box>
            <Box>
                <Button
                    onClick={backToTop}
                    sx={[mainStyles.mainButton, styles.mt20]}>
                    <Typography fontFamily={'Modern-Era-Medium'}>Continue</Typography>
                </Button>
            </Box>
        </Box>
    )
}