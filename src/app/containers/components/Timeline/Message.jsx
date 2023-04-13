import React, { memo } from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import { createUseStyles, useTheme } from 'react-jss';
import { Link } from 'react-router-dom';
import { getDefaultUserPhoto, handleOnErrorImageLoad } from 'utils/images';
import styles from './styles/message';

const useStyles = createUseStyles(styles);

const Message = memo(({ message }) => {
    const theme = useTheme();
    const classes = useStyles({ theme });

    const rootClassName = classnames('message', classes.message);
    const photoClassName = classnames('user-photo', classes.userPhoto);
    const messageContainerClassName = classnames('message-container', classes.messageContainer);
    const messageTitleClassName = classnames('message-container__title', classes.title);
    const authorClassName = classnames('message-container__author', classes.author);
    const timeClassName = classnames('message-container__time', classes.time);
    const messageClassName = classnames('message-container__message', classes.messageText);
    const linkToClassName = classnames('message-container__message__link', classes.link);

    if (!message) return null;

    const userImageUrl = message.user?.photo || getDefaultUserPhoto();
    const messageDate = new Date((message.timestamp || 0) * 1000);

    const regex = /(\B@[a-z0-9_-]+)/gi;
    const userMatches = message.message.match(regex);
    const splittedMessage = message.message.split(regex);

    return (
        <div className={rootClassName}>
            <div className={photoClassName}>
                <img
                    src={userImageUrl}
                    alt={message.user.username}
                    onError={handleOnErrorImageLoad}
                />
            </div>
            <div className={messageContainerClassName}>
                <div className={messageTitleClassName}>
                    <span className={authorClassName}>
                        <span className="author-name">{`${message.user.firstName} ${message.user.lastName}`}</span>
                        <Link to={`/${message.user.username}`} className="author-username">
                            <span>{`@${message.user.username}`}</span>
                        </Link>
                    </span>
                    <span className={timeClassName}>{`(${messageDate.toDateString()})`}</span>
                </div>
                <div className={messageClassName}>
                    {!userMatches?.length
                        ? message.message
                        : splittedMessage.map((portion, index) => {
                              if (userMatches.includes(portion))
                                  return (
                                      <Link
                                          key={index}
                                          to={`/${portion.replace('@', '')}`}
                                          className={linkToClassName}
                                      >
                                          {portion}
                                      </Link>
                                  );
                              return portion;
                          })}
                </div>
            </div>
        </div>
    );
});

Message.propTypes = {
    message: PropTypes.object.isRequired,
};

export default Message;
