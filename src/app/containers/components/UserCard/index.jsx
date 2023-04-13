import React, { memo } from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import { createUseStyles, useTheme } from 'react-jss';
import { getDefaultUserPhoto, handleOnErrorImageLoad } from 'utils/images';
import styles from './styles';

const useStyles = createUseStyles(styles);

const UserCard = memo(({ className, user }) => {
    const theme = useTheme();
    const classes = useStyles({ theme });

    const rootClassName = classnames('user-card', className, classes.userCard);
    const photoClassName = classnames('user-card__photo', classes.photo);
    const usernameClassName = classnames('user-card__username', classes.username);
    const fullNameClassName = classnames('user-card__full-name', classes.fullName);
    const tagUsernameClassName = classnames('user-card__tag-username', classes.tagUsername);

    const userImageUrl = user.photo || getDefaultUserPhoto();

    return (
        <div className={rootClassName}>
            <div className={photoClassName}>
                <img src={userImageUrl} alt={user.username} onError={handleOnErrorImageLoad} />
            </div>
            <div className={usernameClassName}>
                <div className={fullNameClassName}>{`${user.firstName} ${user.lastName}`}</div>
                <div className={tagUsernameClassName}>{`@${user.username}`}</div>
            </div>
        </div>
    );
});

UserCard.propTypes = {
    className: PropTypes.string,
    user: PropTypes.object.isRequired,
};

export default UserCard;
