export default () => ({
    timeline: {
        display: 'flex',
        position: 'relative',
        flexDirection: 'column',
        boxSizing: 'border-box',
        width: '100%',
        height: '100%',
    },
    container: {
        position: 'relative',
        boxSizing: 'border-box',
        flex: '1',
        overflow: 'auto',
    },
    loading: {
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: '60px',
        height: '60px',
    },
});
