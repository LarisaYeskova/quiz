import { Box, Button, TextField, Typography } from "@mui/material"
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import { styles } from "./questions.styles";
import { mainStyles } from "../main.styles";
import { useState } from "react";
import emailjs from "@emailjs/browser"
import EmailTemplate from "../../EmailTemplate";
import ReactDOMServer from 'react-dom/server';
import * as yup from 'yup';
emailjs.init("nofdEkrjvZQrrpraI");

export default function QuizForm({ questions, handleOnClickNext }) {
    const [state, setState] = useState({ name: '', email: '', zipCode: '' })
    const [validateState, setValidateState] = useState({ errName: '', errEmail: '', errZipCode: '' });
    const schema = yup.object().shape({
        name: yup.string().required(),
        email: yup.string().required().min(8).email(),
        zipCode: yup.string().required().min(5),
    });
    const submit = () => {
        const quizResponses = ReactDOMServer.renderToStaticMarkup(<EmailTemplate questions={questions} />)
        emailjs.send('service_maz6s88', 'template_yogs3m7', { htmlQuizResponses: quizResponses, name: state.name, email: state.email, zipCode: state.zipCode })
            .then(function (response) {
                console.log('SUCCESS!', response.status, response.text);
            }, function (error) {
                console.log('FAILED...', error);
            });
        handleOnClickNext()
    }



    return (
        <Box sx={styles.questionContainer}>
            <Box sx={styles.mediaBox}>
                <Box>
                    <CheckCircleIcon sx={styles.CheckCircle} />
                </Box>
                <Box>
                    <Typography variant='h3'>Assessment complete.</Typography>
                </Box>
                <Box>
                    <Typography variant='h5'>We just need a little more information so that we can send your results.</Typography>
                </Box>
                <Box sx={[styles.mb15, styles.mt20]}>
                    <Box sx={styles.textFieldLabel}>First Name</Box>
                    <TextField
                        onChange={({ target: { value } }) => {
                            setState({ ...state, name: value.trim() })
                            schema
                                .validateAt('name', { name: value })
                                .then(() => setValidateState({ ...validateState, errName: '' }))
                                .catch(function (err) {
                                    setValidateState({ ...validateState, errName: err.errors[0] });
                                });
                        }}
                        helperText={validateState.errName}
                        error={!!validateState.errName}
                        fullWidth
                        sx={styles.bgWhite}
                        placeholder='Enter your first name' />
                </Box>
                <Box sx={styles.mb15}>
                    <Box sx={styles.textFieldLabel}>Email</Box>
                    <TextField
                        onChange={({ target: { value } }) => {
                            setState({ ...state, email: value });
                            schema
                                .validateAt('email', { email: value })
                                .then(() => setValidateState({ ...validateState, errEmail: '' }))
                                .catch(function (err) {
                                    setValidateState({ ...validateState, errEmail: err.errors[0] });
                                });
                        }}
                        helperText={validateState.errEmail}
                        error={!!validateState.errEmail}
                        fullWidth sx={styles.bgWhite} placeholder='Enter your Email' />
                </Box>
                <Box sx={styles.mb15}>
                    <Box sx={styles.textFieldLabel}>Zip code</Box>
                    <TextField
                        onChange={({ target: { value } }) => {
                            setState({ ...state, zipCode: value.trim() })
                            schema
                                .validateAt('zipCode', { zipCode: value })
                                .then(() => setValidateState({ ...validateState, errZipCode: '' }))
                                .catch(function (err) {
                                    setValidateState({ ...validateState, errZipCode: err.errors[0] });
                                });
                        }}
                        helperText={validateState.errZipCode}
                        error={!!validateState.errZipCode}
                        fullWidth sx={styles.bgWhite} placeholder='Enter your zip code' />
                </Box>
                <Box sx={[mainStyles.marginBottom20, mainStyles.buttonMediaBox]}>
                    <Button
                        onClick={submit}
                        disabled={
                            !state.name ||
                            !state.email ||
                            !state.zipCode ||
                            !!validateState.errName ||
                            !!validateState.errEmail ||
                            !!validateState.errZipCode

                        }
                        sx={mainStyles.mainButton}>
                        <Typography fontFamily={'Modern-Era-Medium'}>See result</Typography>
                    </Button>
                </Box>
                <Box>
                    <Typography variant="h7"
                    >By clicking “See results" you agree to receive offers and updates from Tender. You can unsubscribe <br />at any time.
                    </Typography>
                </Box>
            </Box>
        </Box>
    )
}