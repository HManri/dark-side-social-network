export default (theme) => ({
    'input-container': {
        boxSizing: 'border-box',
        width: '100%',
    },
    input: {
        boxSizing: 'border-box',
        backgroundColor: theme.colors.white,
        border: `1px solid ${theme.colors.border}`,
        borderRadius: '3px',
        width: '100%',
        padding: '0 10px',
        ...theme.text.big,
        lineHeight: '30px',
    },
    disabled: {
        backgroundColor: theme.colors.lightGrey,
    },
    textarea: {
        border: 'none',
        borderBottom: `1px solid ${theme.colors.border}`,
        resize: 'none',
        outline: 'none',
        ...theme.text.default,
        padding: '10px',

        '&:focus': {
            borderBottom: `1px solid ${theme.colors.lightBlack}`,
        },
    },
});
