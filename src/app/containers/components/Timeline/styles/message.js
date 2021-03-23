export default (theme) => ({
    message: {
        display: 'flex',
        alignItems: 'flex-start',
        padding: '16px',
        boxSizing: 'border-box',

        '&:not(:last-child)': {
            borderBottom: `1px solid ${theme.colors.border}`,
        },
    },
    userPhoto: {
        width: '32px',
        height: '32px',
        backgroundColor: theme.colors.white,
        border: `1px solid ${theme.colors.border}`,
        borderRadius: '50%',
        marginRight: '8px',
        textAlign: 'center',

        '& > img': {
            display: 'inline-block',
            height: '100%',
            borderRadius: '50%',
        },
    },
    messageContainer: {
        display: 'flex',
        flexDirection: 'column',
        position: 'relative',
        flex: '1',
    },
    title: {
        display: 'flex',
        alignItems: 'center',
        marginBottom: '4px',
    },
    author: {
        display: 'flex',
        alignItems: 'center',
        flex: '1',

        '& .author-name': {
            ...theme.text.default,
            fontWeight: '500',
        },
        '& .author-username': {
            ...theme.text.small,
            marginLeft: '8px',
            textDecoration: 'none',
            color: theme.colors.link,
        },
    },
    messageText: {
        ...theme.text.default,
    },
    time: {
        ...theme.text.small,
    },
    link: {
        textDecoration: 'none',
        color: theme.colors.link,
    },
});
