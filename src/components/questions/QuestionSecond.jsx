import { Box, Button, Typography } from "@mui/material"
import Discolored from "../../assets/discolored.gif"
import Crowded from "../../assets/crowded.gif"
import Spaced from "../../assets/spaced.gif"
import Protruding from "../../assets/protruding.gif"

export default function SecondQuestion() {
    return (
        <Box sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
            <Box>
                <Typography sx={{ fontSize: '1.2rem', fontWeight: '700px', textTransform: 'none' }}>How would you describe your teeth?</Typography>
                <Typography sx={{ fontSize: '0.9rem', fontWeight: '400px', color: '#afabaa', textTransform: 'none' }}>Choose any that apply.</Typography>
            </Box>
            <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <Box>
                    <Button sx={{ borderRadius: '6px', margin: '10px', minWidth: '120px', maxWidth: '120px', backgroundColor: '#ffff', display: 'flex', flexDirection: 'column', padding: '12px 4px', boxShadow: 1 }}>
                        <img
                            style={{
                                textAlign: 'center',
                                maxWidth: '150px',
                                maxHeight: '150px',
                                width: '100%'
                            }}
                            src={Crowded}
                        />
                        <Typography sx={{ fontSize: '1rem', fontWeight: '400px', color: 'black', textTransform: 'none' }}>Crowded</Typography>
                    </Button>
                </Box>
                <Box>
                    <Button sx={{ borderRadius: '6px', margin: '10px', minWidth: '120px', maxWidth: '120px', backgroundColor: '#ffff', display: 'flex', flexDirection: 'column', padding: '12px 4px', boxShadow: 1 }}>
                        <img
                            style={{
                                textAlign: 'center',
                                maxWidth: '150px',
                                maxHeight: '150px',
                                width: '100%'
                            }}
                            src={Discolored}
                        />
                        <Typography sx={{ fontSize: '1rem', fontWeight: '400px', color: 'black', textTransform: 'none' }}>Discolored</Typography>
                    </Button>
                </Box>
                <Box>
                    <Button sx={{ borderRadius: '6px', margin: '10px', minWidth: '120px', maxWidth: '120px', backgroundColor: '#ffff', display: 'flex', flexDirection: 'column', padding: '12px 4px', boxShadow: 1 }}>
                        <img
                            style={{
                                textAlign: 'center',
                                maxWidth: '150px',
                                maxHeight: '150px',
                                width: '100%'
                            }}
                            src={Spaced}
                        />
                        <Typography sx={{ fontSize: '1rem', fontWeight: '400px', color: 'black', textTransform: 'none' }}>Spaced</Typography>
                    </Button>
                </Box>
                <Box>
                    <Button sx={{
                        margin: '10px', borderRadius: '6px', minWidth: '120px', maxWidth: '120px', backgroundColor: '#ffff', display: 'flex', flexDirection: 'column', padding: '12px 4px', boxShadow: 1
                    }}>
                        <img
                            style={{
                                textAlign: 'center',
                                maxWidth: '150px',
                                maxHeight: '150px',
                                width: '100%'
                            }}
                            src={Protruding}
                        />
                        <Typography sx={{ fontSize: '1rem', fontWeight: '400px', color: 'black', textTransform: 'none' }}>Protruding</Typography>
                    </Button>
                </Box>
            </Box>
        </Box >
    )
}