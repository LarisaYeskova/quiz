export const styles = {
    questionContainer: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center'
    },
    questionContainerImg: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        '@media screen and (max-width: 1000px)': {
            flexWrap: 'wrap'
        },
    },
    mediaBox: {
        maxWidth: '50%',
        '@media screen and (max-width: 1000px)': {
            maxWidth: '100%',
        },
    },
    questionButtonType1: {
        borderRadius: '6px',
        marginBottom: '20px',
        marginTop: '15px',
        backgroundColor: '#ffff',
        display: 'flex',
        flexDirection: 'column',
        padding: '12px 4px',
        boxShadow: 'rgb(255 0 0 / 5%) 0px 6px 13px 0px, rgb(0 0 0 / 8%) 0px 1px 4px 0px',
        transition: 'all 0.08s ease-in-out 0s',
        ':hover': {
            boxShadow: 'rgb(255 0 0 / 5%) 0px 13px 22px 0px, rgb(0 0 0 / 3%) 0px 6px 24px 0px',
            background: '#ffff'
        },
        textTransform: 'none'
    },
    questionButtonType2: {
        borderRadius: '6px',
        marginBottom: '20px',
        marginTop: '20px',
        backgroundColor: '#ffff',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'start',
        padding: '12px 4px',
        boxShadow: 'rgb(255 0 0 / 5%) 0px 6px 13px 0px, rgb(0 0 0 / 8%) 0px 1px 4px 0px',
        transition: 'all 0.08s ease-in-out 0s',
        ':hover': {
            boxShadow: 'rgb(255 0 0 / 5%) 0px 13px 22px 0px, rgb(0 0 0 / 3%) 0px 6px 24px 0px',
            background: '#ffff'
        },
        textTransform: 'none'
    },
    questionButtonType3: {
        borderRadius: '6px',
        margin: '10px',
        minWidth: '120px',
        maxWidth: '120px',
        backgroundColor: '#ffff',
        display: 'flex',
        flexDirection: 'column',
        padding: '12px 4px',
        boxShadow: 'rgb(255 0 0 / 5%) 0px 6px 13px 0px, rgb(0 0 0 / 8%) 0px 1px 4px 0px',
        transition: 'all 0.08s ease-in-out 0s',
        ':hover': {
            boxShadow: 'rgb(255 0 0 / 5%) 0px 13px 22px 0px, rgb(0 0 0 / 3%) 0px 6px 24px 0px',
            background: '#ffff'
        }

    },
    checkBoxContainer: {
        margin: '0px 10px',
    },
    CheckCircle: {
        color: '#f64851',
        width: '50px',
        height: '50px'
    },
    questionTextField: {
        borderRadius: '6px',
        backgroundColor: '#ffff',
        display: 'flex',
        flexDirection: 'column',
        border: '1px solid #dbdada',
        textTransform: 'none'
    },
    checkBox: {
        color: '#f64851',
        width: '16px',
        height: '16px',
    },
    textFieldLabel: {
        textAlign: 'start',
        marginBottom: '10px'
    },
    mb10: {
        marginBottom: '10px'
    },
    mb15: {
        marginBottom: '15px'
    },
    mt20: {
        marginTop: '20px',
    },
    mt30: {
        marginTop: '30px'
    },
    bgWhite: {
        backgroundColor: '#ffff'
    }

};
