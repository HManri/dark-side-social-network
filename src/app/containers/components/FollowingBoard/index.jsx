import React, { memo, useEffect, useMemo } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import classnames from 'classnames';
import { createUseStyles, useTheme } from 'react-jss';
import { Link } from 'react-router-dom';
import { UsersActions } from 'actions';
import Spinner from 'components/Spinner';
import UserCard from 'containers/components/UserCard';
import styles from './styles';

const mapStateToProps = (state) => {
    return {
        loading: state.followingUsers.loading || false,
        users: state.followingUsers.users || [],
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        getFollowingUsers: bindActionCreators(UsersActions, dispatch).getFollowingUsers,
    };
};

const useStyles = createUseStyles(styles);

const FollowingBoard = memo(({ users, loading, getFollowingUsers }) => {
    const theme = useTheme();
    const classes = useStyles({ theme });

    const rootClassName = classnames('following-board', classes.followingBoard);
    const titleClassName = classnames('following-board__title', classes.title);
    const contentClassName = classnames('following-board__content', classes.content);
    const loadingContainerClassName = classnames(classes.loadingContainer);
    const loadingClassName = classnames(classes.loading);
    const userCardClassName = classnames('follow-board__user', classes.user);

    const usersContent = useMemo(() => {
        if (!users?.length) return null;
        return users.map((user, index) => (
            <Link
                key={`following-${user.id}-${index}`}
                to={`/${user.username}`}
                className={userCardClassName}
            >
                <UserCard user={user} />
            </Link>
        ));
    }, [users, userCardClassName]);

    useEffect(() => {
        // every time this component is mounted get the information
        // of the users which the logged user is following
        getFollowingUsers();
    }, [getFollowingUsers]);

    return (
        <div className={rootClassName}>
            <div className={titleClassName}>Following</div>
            <div className={contentClassName}>
                {loading && (
                    <div className={loadingContainerClassName}>
                        <div className={loadingClassName}>
                            <Spinner />
                        </div>
                    </div>
                )}
                {usersContent}
            </div>
        </div>
    );
});

FollowingBoard.propTypes = {
    users: PropTypes.array,
    loading: PropTypes.bool,
    getFollowingUsers: PropTypes.func,
};

export default connect(mapStateToProps, mapDispatchToProps)(FollowingBoard);
