export default (theme) => ({
    userHeader: {
        display: 'flex',
        alignItems: 'center',
        width: '100%',
        height: '150px',
        padding: '16px',
        borderBottom: `1px solid ${theme.colors.border}`,
        backgroundColor: theme.colors.lightGrey,
    },
    back: {
        cursor: 'pointer',
    },
    photo: {
        width: '128px',
        height: '128px',
        backgroundColor: theme.colors.white,
        border: `1px solid ${theme.colors.border}`,
        borderRadius: '50%',
        marginLeft: '8px',
        marginRight: '8px',
        textAlign: 'center',
        boxShadow: `2px 2px 5px 0px rgba(0,0,0,0.75)`,
        flexShrink: '0',
        userSelect: 'none',

        '& > img': {
            display: 'inline-block',
            height: '100%',
            borderRadius: '50%',
        },
    },
    info: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        width: '100%',
        height: '100%',
        marginLeft: '16px',
    },
    name: {
        ...theme.text.title,
    },
    usernameClassName: {
        ...theme.text.subtitle,
    },
});
