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
                        width: '450px',
                        height: '150px'
                    }}
                    src={Smile}
                    alt='smile'
                />
            </Box>
            <Box>
                <Typography variant='h3'>Welcome to Tender</Typography>
                <Typography variant='h5'>Take our 30-second survey to learn if you're a candidate.</Typography>
            </Box>
            <Box>

            </Box>
        </Box>
    )
}