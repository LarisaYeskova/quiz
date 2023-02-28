import { Box, Button, Grid, Step, StepLabel, Stepper } from "@mui/material";
import FifthQuestion from "./questions/QuestionFifth";
import FirstQuestion from "./questions/QuestionFirst";
import FourthQuestion from "./questions/QuestionFourth";
import SecondQuestion from "./questions/QuestionSecond";
import SeventhQuestion from "./questions/QuestionSeventh";
import SixQuestion from "./questions/QuestionSix";
import ThirdQuestion from "./questions/QuestionThird";
import KeyboardBackspaceIcon from '@mui/icons-material/KeyboardBackspace';
import Logo from "../assets/logo.png"

const steps = [1, 2, 3, 4, 5, 6, 7]


export default function Main() {
    return (
        <Box sx={{ margin: '0px 20px', textAlign: 'center', display: 'flex', flexDirection: 'column', justifyContent: 'space-between', height: '100vh' }}>
            <Box>
                <Box sx={{ display: 'flex', alignItems: 'center' }}>
                    <Box sx={{ position: 'absolute' }}>
                        <Button sx={{ color: 'grey' }}><KeyboardBackspaceIcon />Back</Button>
                    </Box>
                    <Box sx={{ display: 'flex', justifyContent: 'center', width: '100%' }}>
                        <img
                            style={{
                                textAlign: 'center',
                                maxWidth: '120px',
                                height: '50px'
                            }}
                            src={Logo}
                        />
                    </Box>
                </Box>
                <Stepper alternativeLabel activeStep={1} >
                    {steps.map((label) => (
                        <Step key={label}>
                            <StepLabel />
                        </Step>
                    ))}
                </Stepper>
            </Box>
            <FirstQuestion />
            {/* <SecondQuestion />
            <ThirdQuestion />
            <FourthQuestion />
            <FifthQuestion />
            <SixQuestion />
            <SeventhQuestion /> */}
            <Box sx={{ marginBottom: '20px' }}>
                <Button sx={{ backgroundColor: '#f64851', color: '#ffff', borderRadius: '35px', minWidth: '250px', maxWidth: '300px', padding: '15px 20px', textTransform: 'none', fontSize: '1rem', fontWeight: '500' }}>Continue</Button>
            </Box>
        </Box>
    )
}