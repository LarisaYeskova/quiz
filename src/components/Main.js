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
import { useState } from "react";
import EighthQuestion from "./questions/QuestionEighth";
import NinthQuestion from "./questions/QuestionNinth";



export default function Main() {

    const steps = [1, 2, 3, 4, 5, 6, 7]
    const [currentQuestion, setCurrentQuestion] = useState(1);
    const getQuestion = (question) => {
        switch (question) {
            case 1:
                return <FirstQuestion />;
            case 2:
                return <SecondQuestion />;
            case 3:
                return <ThirdQuestion />;
            case 4:
                return <FourthQuestion />;
            case 5:
                return <FifthQuestion />;
            case 6:
                return <SixQuestion />;
            case 7:
                return <SeventhQuestion />;
            case 8:
                return <EighthQuestion />;
            case 9:
                return <NinthQuestion />;

            default:
                return null;
        }
    };

    return (
        <Box sx={{ margin: '0px 20px', textAlign: 'center', display: 'flex', flexDirection: 'column', justifyContent: 'space-between', height: '100vh' }}>
            <Box>
                <Box sx={{ display: 'flex', alignItems: 'center' }}>
                    <Box sx={{ position: 'absolute' }}>
                        <Button
                            onClick={() => setCurrentQuestion(currentQuestion - 1)}
                            sx={{ color: 'grey' }}><KeyboardBackspaceIcon />Back</Button>
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
            {getQuestion(currentQuestion)}
            <Box sx={{ marginBottom: '20px' }}>
                <Button
                    onClick={() => setCurrentQuestion(currentQuestion + 1)}
                    sx={{ backgroundColor: '#f64851', color: '#ffff', borderRadius: '35px', minWidth: '250px', maxWidth: '300px', padding: '15px 20px', textTransform: 'none', fontSize: '1rem', fontWeight: '500' }}>Continue</Button>
            </Box>
        </Box>
    )
}