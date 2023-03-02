export const mainStyles = {
    mainContainer: {
        margin: '0px 20px',
        textAlign: 'center',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        height: '100%',
        minHeight: '100vh'
    },
    mainButton: {
        backgroundColor: '#f64851',
        color: '#ffff',
        borderRadius: '35px',
        minWidth: '250px',
        maxWidth: '300px',
        padding: '15px 20px',
        textTransform: 'none',
        fontSize: '1rem',
        fontWeight: '500',
        ':hover': {
            minWidth: '255px',
            maxWidth: '305px',
            backgroundColor: '#f64851'
        },
    },
    buttonMediaBox: {
        '@media screen and (max-height: 1000px)': {
            marginTop: '20px'
        },
    },
    mainButtonBack: {
        padding: '0px'
    },
    flex: {
        display: 'flex'
    },
    alignCenter: {
        alignItems: 'center'
    },
    absolute: {
        position: 'absolute'
    },
    redDefaultBackground: {
        backgroundColor: '#f64851'
    },
    redDefaultColor: {
        color: '#f64851'
    },
    textTransformNone: {
        textTransform: 'none'
    },
    boxShadowDefault: {
        boxShadow: 'rgb(255 241 238) 0px 0px 0px 2px'
    },
    justifyCenter: {
        justifyContent: 'center'
    },
    fullWidth: {
        width: '100%'
    },
    marginBottom20: {
        marginBottom: '20px'
    },
    marginBottom10: {
        marginBottom: '10px'
    }
};
