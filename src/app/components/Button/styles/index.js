export default (theme) => ({
    button: {
        ...theme.text.default,
        display: 'inline-block',
        height: '20px',
        lineHeight: '20px',
        padding: '5px 20px',
        cursor: 'pointer',
        boxShadow: '0 3px 9px 0 rgba(0, 0, 0, 0.25)',
        whiteSpace: 'nowrap',
        borderRadius: '5px',
    },
    default: {
        backgroundColor: theme.colors.darkGrey,
        color: theme.colors.text,

        '&:hover': {
            backgroundColor: theme.colors.grey,
        },
    },
    white: {
        backgroundColor: theme.colors.white,
        color: theme.colors.text,
        border: `1px solid ${theme.colors.darkGrey}`,

        '&:hover': {
            backgroundColor: theme.colors.grey,
        },
    },
    disabled: {
        cursor: 'not-allowed',
        backgroundColor: theme.colors.lightGrey,
        color: theme.colors.grey,

        '&:hover': {
            backgroundColor: theme.colors.lightGrey,
        },
    },
});
