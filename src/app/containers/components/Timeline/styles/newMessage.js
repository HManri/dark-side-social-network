export default (theme) => ({
    newMessage: {
        position: 'relative',
        width: '100%',
        padding: '16px',
        borderBottom: `1px solid ${theme.colors.border}`,
        boxSizing: 'border-box',
    },
    inputContainer: {
        display: 'flex',
        alignItems: 'center',
        padding: '16px 0 8px 0',
    },
    userPhoto: {
        width: '64px',
        height: '64px',
        backgroundColor: theme.colors.white,
        border: `1px solid ${theme.colors.border}`,
        borderRadius: '50%',
        marginRight: '8px',
        textAlign: 'center',
        boxShadow: `2px 2px 5px 0px rgba(0,0,0,0.75)`,
        flexShrink: '0',

        '& > img': {
            display: 'inline-block',
            height: '100%',
            borderRadius: '50%',
        },
    },
    button: {
        display: 'flex',
        justifyContent: 'flex-end',
    },
});
