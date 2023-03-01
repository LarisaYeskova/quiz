import { Box, Button, Step, StepLabel, Stepper, Typography } from "@mui/material";
import KeyboardBackspaceIcon from '@mui/icons-material/KeyboardBackspace';
import Logo from "../assets/logo.png"
import { useState } from "react";
import { QUESTIONS, questionTypes } from "../mocks/questions";
import ClosedQuestion from "./questions/ClosedQuestion";
import MultiChoiceQuestion from "./questions/MultiChoiceQuestion";
import OneChoiceQuestion from "./questions/OneChoiceQuestion";
import MultiChoiceImgQuestion from "./questions/MulitChoiceQuestionImg";




export default function Main() {
    const [questions, setQuestions] = useState(QUESTIONS)
    const steps = [1, 2, 3, 4, 5, 6, 7]
    const [questionNumber, setQuestionNumber] = useState(1);
    const onChange = () => {

    }

    const currentQuestion = questions[questionNumber - 1]
    const getQuestion = (question) => {
        switch (question.type) {
            case questionTypes.multiChoiceImg:
                return <MultiChoiceImgQuestion {...question} />
            case questionTypes.closed:
                return <ClosedQuestion {...question} />
            case questionTypes.multiChoice:
                return <MultiChoiceQuestion {...question} />
            case questionTypes.oneChoice:
                return <OneChoiceQuestion {...question} />
            default:
                return null;
        }
    };


    return (
        <Box sx={{ margin: '0px 20px', textAlign: 'center', display: 'flex', flexDirection: 'column', justifyContent: 'space-between', height: '100%', minHeight: '100vh' }}>
            <Box>
                <Box sx={{ display: 'flex', alignItems: 'center' }}>
                    <Box sx={{ position: 'absolute' }}>
                        <Button
                            onClick={() => setQuestionNumber(questionNumber - 1)}
                            sx={{ color: 'grey' }}>
                            <KeyboardBackspaceIcon />
                            <Typography sx={{ color: 'grey', textTransform: 'none' }}>Back</Typography>
                        </Button>
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
                    onClick={() => setQuestionNumber(questionNumber + 1)}
                    sx={{
                        backgroundColor: '#f64851', color: '#ffff', borderRadius: '35px', minWidth: '250px', maxWidth: '300px', padding: '15px 20px', textTransform: 'none', fontSize: '1rem', fontWeight: '500',
                        ':hover': { minWidth: '255px', maxWidth: '305px', backgroundColor: '#f64851' },
                    }}>Continue</Button>
            </Box>
        </Box>
    )
}