export default (theme) => ({
    userCard: {
        display: 'flex',
        alignItems: 'center',
    },
    photo: {
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
    fullName: {
        ...theme.text.big,
    },
    tagUsername: {
        ...theme.text.small,
        marginTop: '2px',
    },
});
