import { Box, Button, Typography } from "@mui/material"
import Discolored from "../../assets/discolored.gif"
import Crowded from "../../assets/crowded.gif"
import Spaced from "../../assets/spaced.gif"
import Protruding from "../../assets/protruding.gif"

export default function SecondQuestion() {
    return (
        <Box sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
            2
            <Box>
                <Typography variant='h3'>How would you describe your teeth?</Typography>
                <Typography variant='h5'>Choose any that apply.</Typography>
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
                        <Typography variant="h4">Crowded</Typography>
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
                        <Typography variant="h4">Discolored</Typography>
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
                        <Typography variant="h4">Spaced</Typography>
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
                        <Typography variant="h4">Protruding</Typography>
                    </Button>
                </Box>
            </Box>
        </Box >
    )
}