import { Box, Button, Grid, Typography } from "@mui/material"
import Smile from "../../assets/sans_titre.png"

export default function FirstQuestion() {
    return (
        <Box sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
            <Box>
                <img
                    style={{
                        textAlign: 'center',
                        width: '450px',
                        height: '150px'
                    }}
                    src={Smile}
                />
            </Box>
            <Box>
                <Typography variant='h3'>WELCOME TO TENDER</Typography>
                <Typography variant='h5'>Take our 30-second survey to learn if you're a candidate.</Typography>
            </Box>
            <Box>

            </Box>
        </Box>
    )
}