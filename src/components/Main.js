import { Box, Button, Step, StepLabel, Stepper, Typography } from "@mui/material";
import KeyboardBackspaceIcon from '@mui/icons-material/KeyboardBackspace';
import Logo from "../assets/logo.png"
import { useState } from "react";
import { QUESTIONS, questionTypes } from "../mocks/questions";
import ClosedQuestion from "./questions/ClosedQuestion";
import MultiChoiceQuestion from "./questions/MultiChoiceQuestion";
import OneChoiceQuestion from "./questions/OneChoiceQuestion";
import MultiChoiceImgQuestion from "./questions/MultiChoiceQuestionImg";
import { Line, Circle } from 'rc-progress';
import { styles } from './main.styles';




export default function Main() {
    const [questions, setQuestions] = useState(QUESTIONS)
    const steps = [1, 2, 3, 4, 5, 6, 7, 8, 9]
    const [questionNumber, setQuestionNumber] = useState(1);
    const onChange = (answer) => {
        let newQuestion = { ...questions[questionNumber - 1], answer };
        let newQuestions = [...questions.slice(0, questionNumber - 1), newQuestion, ...questions.slice(questionNumber)];
        setQuestions(newQuestions);
    }

    const currentQuestion = questions[questionNumber - 1]
    const getQuestion = (question) => {
        switch (question.type) {
            case questionTypes.multiChoiceImg:
                return <MultiChoiceImgQuestion {...question} onChange={onChange} />
            case questionTypes.closed:
                return <ClosedQuestion {...question} onChange={onChange} />
            case questionTypes.multiChoice:
                return <MultiChoiceQuestion {...question} onChange={onChange} />
            case questionTypes.oneChoice:
                return <OneChoiceQuestion {...question} onChange={onChange} />
            default:
                return null;
        }
    };

    console.log(questions.map((question) => question.answer))

    return (
        <Box sx={styles.mainContainer}>
            <Box>
                <Box sx={[styles.flex, styles.alignCenter, styles.marginBottom10]}>
                    <Box sx={[styles.absolute, styles.mainButtonBack]}>
                        <Button
                            onClick={() => setQuestionNumber(questionNumber - 1)}
                            sx={[styles.redDefaultColor, styles.textTransformNone, styles.boxShadowDefault, styles.mainButtonBack]}>
                            <KeyboardBackspaceIcon />
                            <Typography variant="h4" fontFamily={"Modern-Era-Regular"} sx={styles.redDefaultColor}>Back</Typography>
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
                <Line percent={5} strokeWidth={0.5} strokeColor="#f64851" trailColor='#fff9f9' />
            </Box>

            {getQuestion(currentQuestion)}
            <Box sx={[styles.marginBottom20, styles.buttonMediaBox]}>
                <Button
                    onClick={() => setQuestionNumber(questionNumber + 1)}
                    sx={styles.mainButton}>
                    <Typography fontFamily={'Modern-Era-Medium'}>Continue</Typography>
                </Button>
            </Box>
        </Box>
    )
}