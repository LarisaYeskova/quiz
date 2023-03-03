import { Box, Typography } from "@mui/material"
import Smile from "../../assets/sans_titre.png"
import { styles } from "./questions.styles"

export default function Welcome() {
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
                <Typography variant='h3' fontFamily={'Modern-Era-Medium'}>Welcome to Tender</Typography>
                <Typography variant='h5' fontFamily={"Modern-Era-Regular"}>Take our 30-second survey to learn if you're a candidate.</Typography>
            </Box>
            <Box>

            </Box>
        </Box>
    )
}