export default (theme) => ({
    menuBar: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        width: '50px',
        height: '100%',
        backgroundColor: theme.colors.grey,
        padding: '8px 0',
        boxSizing: 'border-box',
        borderRadius: '0 8px 8px 0',
    },
    main: {
        flex: '1',
    },
    icon: {
        display: 'flex',
        alignItems: 'center',
        backgroundColor: theme.colors.white,
        width: '40px',
        height: '40px',
        borderRadius: '50%',
        boxSizing: 'border-box',
        cursor: 'pointer',

        '& > svg': {
            display: 'block',
            height: '24px',
            margin: 'auto',
        },

        '& > img': {
            display: 'block',
            height: '100%',
            borderRadius: '50%',
            margin: 'auto',
        },

        '&:hover': {
            backgroundColor: theme.colors.lightGrey,
        },

        '&:active': {
            backgroundColor: theme.colors.grey,
        },
    },
});
