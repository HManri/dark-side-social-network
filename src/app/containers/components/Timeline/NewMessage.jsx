import React, { memo, useState, useCallback } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import classnames from 'classnames';
import { createUseStyles, useTheme } from 'react-jss';
import { MessagesActions } from 'actions';
import Input from 'components/Input';
import Button from 'components/Button';
import { getDefaultUserPhoto, handleOnErrorImageLoad } from 'utils/images';
import styles from './styles/newMessage';

const mapStateToProps = (state) => {
    return {
        userPhoto: state.auth?.authUser?.photo || getDefaultUserPhoto(),
        userName: state.auth?.authUser?.username || '',
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        createMessage: bindActionCreators(MessagesActions, dispatch).createMessage,
    };
};

const useStyles = createUseStyles(styles);

const NewMessage = memo(({ userPhoto, userName, createMessage }) => {
    const theme = useTheme();
    const classes = useStyles({ theme });
    const [text, setText] = useState('');

    const rootClassName = classnames('new-message', classes.newMessage);
    const photoContainerClassName = classnames('new-message__user-photo', classes.userPhoto);
    const containerClassName = classnames('new-message-container', classes.inputContainer);
    const buttonClassName = classnames('new-message-container__button', classes.button);

    const updateText = useCallback((value) => {
        setText(value);
    }, []);

    const onKeyEnter = useCallback(
        (value) => {
            sendMessage(value);
        },
        [sendMessage],
    );

    const onClickSend = useCallback(() => {
        sendMessage(text);
    }, [text, sendMessage]);

    const sendMessage = useCallback(
        (value) => {
            createMessage(value)
                .then(() => {
                    setText('');
                })
                .catch(() => console.error('Something bad happened'));
        },
        [createMessage],
    );

    return (
        <div className={rootClassName}>
            <div className={containerClassName}>
                <div className={photoContainerClassName}>
                    <img src={userPhoto} alt={userName} onError={handleOnErrorImageLoad} />
                </div>
                <Input
                    className="new-message"
                    placeholder="What's up?"
                    onChange={updateText}
                    onKeyEnter={onKeyEnter}
                    resetOnKeyEnter={true}
                    value={text}
                    isTextArea={true}
                    controlledReset={true}
                />
            </div>
            <div className={buttonClassName}>
                <Button color="white" onClick={onClickSend} disabled={!text}>
                    Send
                </Button>
            </div>
        </div>
    );
});

NewMessage.propTypes = {
    userPhoto: PropTypes.string,
    userName: PropTypes.string,
    createMessage: PropTypes.func,
};

export default connect(mapStateToProps, mapDispatchToProps)(NewMessage);
