export default function EmailTemplate({ questions }) {

    return (
        <>
            {questions.map(question => {
                return <div>
                    {question.title}
                    {Array.isArray(question.answer) ? question.answer.map(a => a.text) : question.answer?.text}
                    {question.other}
                </div>;
            }

            )}


        </>
    )
}