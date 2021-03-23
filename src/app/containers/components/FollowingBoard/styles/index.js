export default (theme) => ({
    followingBoard: {
        display: 'flex',
        flexDirection: 'column',
        position: 'relative',
        boxSizing: 'border-box',
        minWidth: '300px',
        height: '300px',
        backgroundColor: theme.colors.lightGrey,
        borderRadius: '8px',
        border: `1px solid ${theme.colors.border}`,
    },
    title: {
        ...theme.text.h1,
        padding: '8px',
        borderBottom: `1px solid ${theme.colors.border}`,
    },
    content: {
        position: 'relative',
        flex: '1',
        overflow: 'auto',
        height: '100%',
    },
    loadingContainer: {
        position: 'absolute',
        width: '100%',
        height: '100%',
        backgroundColor: 'rgba(0, 0, 0, 0.4)',
    },
    loading: {
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: '60px',
        height: '60px',
    },
    user: {
        display: 'block',
        textDecoration: 'none',
        padding: '8px',

        '&:not(:last-child)': {
            borderBottom: `1px solid ${theme.colors.border}`,
        },

        '&:hover': {
            backgroundColor: theme.colors.darkGrey,
        },
    },
});
