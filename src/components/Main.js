import { Box, Button, Step, StepLabel, Stepper, Typography } from "@mui/material";
import KeyboardBackspaceIcon from '@mui/icons-material/KeyboardBackspace';
import Logo from "../assets/logo.png"
import { useState } from "react";
import { QUESTIONS, questionTypes } from "../mocks/questions";
import ClosedQuestion from "./questions/ClosedQuestion";
import MultiChoiceQuestion from "./questions/MultiChoiceQuestion";
import OneChoiceQuestion from "./questions/OneChoiceQuestion";
import MultiChoiceImgQuestion from "./questions/MultiChoiceQuestionImg";
import { styles } from './main.styles';




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
        <Box sx={styles.mainContainer}>
            <Box>
                <Box sx={[styles.flex, styles.alignCenter]}>
                    <Box sx={[styles.absolute, styles.mainButtonBack]}>
                        <Button
                            onClick={() => setQuestionNumber(questionNumber - 1)}
                            sx={[styles.redDefaultColor, styles.textTransformNone, styles.boxShadowDefault, styles.mainButtonBack]}>
                            <KeyboardBackspaceIcon />
                            <Typography variant="h4" sx={styles.redDefaultColor}>Back</Typography>
                        </Button>
                    </Box>
                    <Box sx={[styles.flex, styles.justifyCenter, styles.fullWidth]}>
                        <img
                            style={{
                                textAlign: 'center',
                                maxWidth: '120px',
                                height: '50px'
                            }}
                            alt='logo'
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
            <Box sx={styles.marginBottom20}>
                <Button
                    onClick={() => setQuestionNumber(questionNumber + 1)}
                    sx={styles.mainButton}>Continue</Button>
            </Box>
        </Box>
    )
}