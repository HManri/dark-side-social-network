import React, { memo } from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import { createUseStyles, useTheme } from 'react-jss';
import styles from './styles';

const useStyles = createUseStyles(styles);

const Button = memo(({ className, color, onClick, disabled, children }) => {
    const theme = useTheme();
    const classes = useStyles({ theme });
    const rootClassName = classnames(className, classes.button, classes[color], {
        [classes.disabled]: disabled,
    });

    return (
        <div
            className={rootClassName}
            onClick={!disabled ? onClick : undefined}
            disabled={disabled}
        >
            {children}
        </div>
    );
});

Button.defaultProps = {
    color: 'default',
    disabled: false,
};

Button.propTypes = {
    className: PropTypes.string,
    color: PropTypes.oneOf(['default', 'white']),
    onClick: PropTypes.func,
    disabled: PropTypes.bool,
    children: PropTypes.node.isRequired,
};

export default Button;
