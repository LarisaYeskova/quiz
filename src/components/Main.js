import FifthQuestion from "./questions/QuestionFifth";
import FirstQuestion from "./questions/QuestionFirst";
import FourthQuestion from "./questions/QuestionFourth";
import SecondQuestion from "./questions/QuestionSecond";
import SeventhQuestion from "./questions/QuestionSeventh";
import SixQuestion from "./questions/QuestionSix";
import ThirdQuestion from "./questions/QuestionThird";

export default function Main(){
    return(
        <div>
            <FirstQuestion/>
            <SecondQuestion/>
            <ThirdQuestion/>
            <FourthQuestion/>
            <FifthQuestion/>
            <SixQuestion/>
            <SeventhQuestion/>
        </div>
    )
}