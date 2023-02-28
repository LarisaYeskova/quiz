import { Box, Button, Grid, Typography } from "@mui/material"
import Smile from "../../assets/sans_titre.png"

export default function FirstQuestion() {
    return (
        <Box sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
            {/* <Box>
                <img
                    src={Smile}
                />
            </Box> */}
            <Box>
                <Typography>WELCOME TO TENDER</Typography>
                <Typography>Take our 30-second survey to learn if you're a candidate.</Typography>
            </Box>
            <Box>

            </Box>
        </Box>
    )
}