export default (theme) => ({
    login: {
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: '400px',
        boxSizing: 'border-box',

        '& .user-input': {
            marginBottom: '20px',
        },

        '& .submit-container': {
            position: 'relative',
            textAlign: 'center',

            '& .submit-container-button': {
                position: 'relative',
                display: 'inline-block',
            },
        },
    },
    loading: {
        position: 'absolute',
        top: '0',
        right: '-40px',
        width: '30px',
        height: '30px',
    },
    title: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        marginBottom: '16px',

        '& > img': {
            display: 'block',
            width: '150px',
            borderRadius: '16px',
        },

        '& > span': {
            ...theme.text.title,
            marginLeft: '16px',
        },
    },
    error: {
        position: 'absolute',
        left: '0',
        bottom: '-60px',
        width: '100%',
        backgroundColor: theme.colors.lightRed,
        padding: '10px',
        borderRadius: '5px',
        ...theme.text.big,
        textAlign: 'center',
    },
});
