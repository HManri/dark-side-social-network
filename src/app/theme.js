const COLORS = {
    white: '#ffffff',
    black: '#000000',
    border: '#dce3eb',
    text: '#2d323c',
    red: '#f04540',
    darkRed: '#cd3b37',
    darkGrey: '#dce3eb',
    lightRed: '#ffcccb',
    lightGrey: '#f4f3f3',
    grey: '#dfdfdf',
    lightBlack: '#696969',
    link: '#4682B4',
};

const COMMON_TEXT = {
    fontFamily: `Roboto, 'Helvetica Neue', Helvetica, Arial, sans-serif`,
    letterSpacing: '0.5px',
};

export default {
    text: {
        title: {
            ...COMMON_TEXT,
            fontSize: '36px',
            lineHeight: '36px',
            fontWeight: '500',
            color: COLORS.text,
        },
        h1: {
            ...COMMON_TEXT,
            fontSize: '24px',
            lineHeight: '24px',
            fontWeight: '500',
            color: COLORS.text,
        },
        subtitle: {
            ...COMMON_TEXT,
            fontSize: '20px',
            lineHeight: '20px',
            fontWeight: '400',
            color: COLORS.text,
        },
        default: {
            ...COMMON_TEXT,
            fontSize: '14px',
            lineHeight: '14px',
            fontWeight: '300',
            color: COLORS.text,
        },
        big: {
            ...COMMON_TEXT,
            fontSize: '16px',
            lineHeight: '16px',
            fontWeight: '500',
            color: COLORS.text,
        },
        small: {
            ...COMMON_TEXT,
            fontSize: '12px',
            lineHeight: '12px',
            fontWeight: '300',
            color: COLORS.text,
        },
    },
    colors: {
        ...COLORS,
    },
};
