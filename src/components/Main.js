import { Button, Step, StepLabel, Stepper } from "@mui/material";
import FifthQuestion from "./questions/QuestionFifth";
import FirstQuestion from "./questions/QuestionFirst";
import FourthQuestion from "./questions/QuestionFourth";
import SecondQuestion from "./questions/QuestionSecond";
import SeventhQuestion from "./questions/QuestionSeventh";
import SixQuestion from "./questions/QuestionSix";
import ThirdQuestion from "./questions/QuestionThird";

const steps = [1, 2, 3, 4, 5, 6, 7]


export default function Main() {
    return (
        <div>
            <Stepper alternativeLabel activeStep={4} >
                {steps.map((label) => (
                    <Step key={label}>
                        <StepLabel >{label}</StepLabel>
                    </Step>
                ))}
            </Stepper>
            <FirstQuestion />
            <SecondQuestion />
            <ThirdQuestion />
            <FourthQuestion />
            <FifthQuestion />
            <SixQuestion />
            <SeventhQuestion />
            <Button>Coninue</Button>
        </div>
    )
}