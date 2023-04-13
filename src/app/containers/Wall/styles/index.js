export default (theme) => ({
    wall: {
        position: 'relative',
        display: 'flex',
        alignItems: 'flex-start',
        boxSizing: 'border-box',
        width: '100%',
        height: '100%',
    },
    left: {
        boxSizing: 'border-box',
        width: '350px',
        height: '100%',
        padding: '16px',
        borderRight: `1px solid ${theme.colors.border}`,

        '& > div:not(:last-child)': {
            marginBottom: '16px',
        },
    },
    right: {
        boxSizing: 'border-box',
        flex: '1',
        height: '100%',
    },
});
