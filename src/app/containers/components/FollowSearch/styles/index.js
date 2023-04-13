export default (theme) => ({
    followBoard: {
        display: 'flex',
        flexFlow: 'column',
        position: 'relative',
        boxSizing: 'border-box',
        minWidth: '300px',
        height: '300px',
        backgroundColor: theme.colors.lightGrey,
        borderRadius: '8px',
        border: `1px solid ${theme.colors.border}`,

        '& .search-users': {
            padding: '8px',
            borderBottom: `1px solid ${theme.colors.border}`,
        },
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
    },
    loading: {
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: '40px',
        height: '40px',
    },
    usersContainer: {
        display: 'flex',
        alignItems: 'center',
        textDecoration: 'none',
        padding: '8px',

        '&:not(:last-child)': {
            borderBottom: `1px solid ${theme.colors.border}`,
        },

        '&:hover': {
            backgroundColor: theme.colors.darkGrey,
        },
    },
    userCard: {
        flex: '1',
    },
});
