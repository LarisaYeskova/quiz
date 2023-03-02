import { Box, Button, Typography } from "@mui/material";
import KeyboardBackspaceIcon from '@mui/icons-material/KeyboardBackspace';
import Logo from "../assets/logo.png"
import { useState } from "react";
import { QUESTIONS, questionTypes } from "../mocks/questions";
import ClosedQuestion from "./questions/ClosedQuestion";
import MultiChoiceQuestion from "./questions/MultiChoiceQuestion";
import OneChoiceQuestion from "./questions/OneChoiceQuestion";
import MultiChoiceImgQuestion from "./questions/MultiChoiceQuestionImg";
import { Line } from 'rc-progress';
import { mainStyles } from './main.styles';
import Welcome from "./questions/Welcome";
import QuizForm from "./questions/QuizForm";
import Thanks from "./questions/Thanks";





export default function Main() {
    const [questions, setQuestions] = useState(QUESTIONS)
    const [questionNumber, setQuestionNumber] = useState(0);
    const [percentage, setPercentage] = useState(10)

    const handleOnClickNext = () => {
        setQuestionNumber(questionNumber + 1)
        setPercentage(percentage + 10)
    }
    const handleOnClickBack = () => {
        setQuestionNumber(questionNumber - 1)
        setPercentage(percentage - 10)
    }
    const doesAnswerExist = () => {
        if (!currentQuestion) return false;
        if (currentQuestion.other) {
            return true;
        }
        if (Array.isArray(currentQuestion.answer)) {
            return !!currentQuestion.answer.length;
        }
        return !!currentQuestion.answer?.text?.trim();

    }

    const onChange = (answer) => {
        let newQuestion = { ...questions[questionNumber - 1], answer };
        let newQuestions = [...questions.slice(0, questionNumber - 1), newQuestion, ...questions.slice(questionNumber)];
        setQuestions(newQuestions);
    }

    const onChangeOther = (other) => {
        let newQuestion = { ...questions[questionNumber - 1], other };
        let newQuestions = [...questions.slice(0, questionNumber - 1), newQuestion, ...questions.slice(questionNumber)];
        setQuestions(newQuestions);
    }
    console.log(questionNumber)
    const currentQuestion = questions[questionNumber - 1]
    const getQuestion = (question) => {
        switch (question.type) {
            case questionTypes.multiChoiceImg:
                return <MultiChoiceImgQuestion {...question} onChange={onChange} />
            case questionTypes.closed:
                return <ClosedQuestion {...question} onChange={onChange} />
            case questionTypes.multiChoice:
                return <MultiChoiceQuestion {...question} onChange={onChange} onChangeOther={onChangeOther} />
            case questionTypes.oneChoice:
                return <OneChoiceQuestion {...question} onChange={onChange} />
            default:
                return null;
        }
    };

    return (
        <Box sx={mainStyles.mainContainer}>
            <Box>
                <Box sx={[mainStyles.flex, mainStyles.alignCenter, mainStyles.marginBottom10]}>
                    <Box sx={[mainStyles.absolute, mainStyles.mainButtonBack]}>
                        <Button
                            disabled={questionNumber <= 0}
                            onClick={handleOnClickBack}
                            sx={[
                                mainStyles.redDefaultColor,
                                mainStyles.textTransformNone,
                                questionNumber <= 0 ? { boxShadow: 'none' } : mainStyles.boxShadowDefault,
                                mainStyles.mainButtonBack]}>
                            <KeyboardBackspaceIcon />
                            Back
                        </Button>
                    </Box>
                    <Box sx={[mainStyles.flex, mainStyles.justifyCenter, mainStyles.fullWidth]}>
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
                <Line percent={percentage} strokeWidth={0.5} strokeColor="#f64851" trailColor='#fff9f9' />

            </Box>
            <Box sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', height: '100%' }}>
                {questionNumber === 0 &&
                    <Welcome />
                }
                {questions.length + 1 === questionNumber &&
                    <QuizForm handleOnClickNext={handleOnClickNext} questions={questions} />
                }
                {questions.length + 2 === questionNumber &&
                    <Thanks setQuestionNumber={setQuestionNumber} setPercentage={setPercentage} />
                }
                {!!currentQuestion && getQuestion(currentQuestion)}
            </Box>
            {(questionNumber === 0 || doesAnswerExist()) ?
                <Box sx={[mainStyles.marginBottom20, mainStyles.buttonMediaBox]}>
                    <Button
                        onClick={handleOnClickNext}
                        sx={mainStyles.mainButton}>
                        <Typography fontFamily={'Modern-Era-Medium'}>Continue</Typography>
                    </Button>
                </Box>
                :
                <Box sx={{ height: '94px' }}></Box>
            }
        </Box >
    )
}