import React, { memo, useState, useMemo, useCallback, useEffect } from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import { createUseStyles, useTheme } from 'react-jss';
import styles from './styles';

const useStyles = createUseStyles(styles);

const Input = memo(
    ({
        type,
        className,
        placeholder,
        value,
        onChange,
        onKeyDown,
        onKeyEnter,
        disabled,
        isTextArea,
        resetOnKeyEnter,
        controlledReset,
    }) => {
        const theme = useTheme();
        const classes = useStyles({ theme });
        const rootClassName = classnames('input', className, classes['input-container']);
        const inputClassName = classnames('input__input', classes.input, {
            [classes.disabled]: disabled,
            [classes.textarea]: !!isTextArea,
        });

        const [inputValue, setInputValue] = useState(null);

        const finalInputValue = useMemo(() => {
            if (!inputValue && inputValue !== '') return value;
            return inputValue;
        }, [value, inputValue]);

        const onChangeInput = useCallback(
            (event) => {
                const text = event.target.value;
                setInputValue(text);
                onChange && onChange(text);
            },
            [onChange],
        );

        const keyDown = useCallback(
            (evt) => {
                if (evt.keyCode === 13 && !evt.shiftKey && onKeyEnter) {
                    evt.stopPropagation();
                    evt.preventDefault();
                    onKeyEnter(inputValue);
                    resetOnKeyEnter && setInputValue('');
                }
                onKeyDown && onKeyDown(evt);
            },
            [onKeyEnter, inputValue, onKeyDown, resetOnKeyEnter],
        );

        useEffect(() => {
            if (controlledReset && inputValue && !value) {
                setInputValue('');
            }
        }, [controlledReset, inputValue, value]);

        return (
            <div className={rootClassName}>
                {!isTextArea && (
                    <input
                        type={type}
                        className={inputClassName}
                        placeholder={placeholder}
                        value={finalInputValue}
                        onChange={onChangeInput}
                        onKeyDown={keyDown}
                        disabled={disabled}
                    />
                )}
                {isTextArea && (
                    <textarea
                        className={inputClassName}
                        placeholder={placeholder}
                        value={finalInputValue}
                        onChange={onChangeInput}
                        onKeyDown={keyDown}
                    ></textarea>
                )}
            </div>
        );
    },
);

Input.defaultProps = {
    type: 'text',
    placeholder: '',
    value: '',
    disabled: false,
    isTextArea: false,
    resetOnKeyEnter: false,
    controlledReset: false,
};

Input.propTypes = {
    type: PropTypes.oneOf(['text', 'password']).isRequired,
    className: PropTypes.string,
    placeholder: PropTypes.string,
    value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    onChange: PropTypes.func,
    onKeyDown: PropTypes.func,
    onKeyEnter: PropTypes.func,
    disabled: PropTypes.bool,
    isTextArea: PropTypes.bool,
    resetOnKeyEnter: PropTypes.bool,
    controlledReset: PropTypes.bool,
};

export default Input;
