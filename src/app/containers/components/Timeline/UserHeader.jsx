import React, { memo, useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import classnames from 'classnames';
import { createUseStyles, useTheme } from 'react-jss';
import { UsersActions } from 'actions';
import { getDefaultUserPhoto } from 'utils/images';
import styles from './styles/userHeader';

const mapDispatchToProps = (dispatch) => {
    return {
        getUserInfo: bindActionCreators(UsersActions, dispatch).getUserInfo,
    };
};

const useStyles = createUseStyles(styles);

const UserHeader = memo(({ username, getUserInfo }) => {
    const theme = useTheme();
    const classes = useStyles({ theme });
    const [userInfo, setUserInfo] = useState(null);

    const rootClassName = classnames('user-header', classes.userHeader);
    const photoContainerClassName = classnames('user-header__photo', classes.photo);
    const userInfoClassName = classnames('user-header__info', classes.info);
    const nameClassName = classnames('user-header__name', classes.name);
    const usernameClassName = classnames('user-header__username', classes.username);

    useEffect(() => {
        getUserInfo(username)
            .then((data) => {
                setUserInfo(data);
            })
            .catch(console.error);
    }, [getUserInfo, username]);

    const userImageUrl = userInfo?.photo || getDefaultUserPhoto();

    return (
        <div className={rootClassName}>
            <div className={photoContainerClassName}>
                <img src={userImageUrl} alt={userInfo?.username || ``} />
            </div>
            <div className={userInfoClassName}>
                <span className={nameClassName}>{`${userInfo?.firstName || ``} ${
                    userInfo?.lastName || ``
                }`}</span>
                {userInfo?.username && (
                    <span className={usernameClassName}>{`@${userInfo.username}`}</span>
                )}
            </div>
        </div>
    );
});

UserHeader.propTypes = {
    username: PropTypes.string,
    getUserInfo: PropTypes.func,
};

export default connect(null, mapDispatchToProps)(UserHeader);
