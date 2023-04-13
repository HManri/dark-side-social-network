import React, { memo, useEffect, useState, useMemo, useCallback, useRef } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import classnames from 'classnames';
import { createUseStyles, useTheme } from 'react-jss';
import { Link } from 'react-router-dom';
import { UsersActions } from 'actions';
import Spinner from 'components/Spinner';
import Input from 'components/Input';
import Button from 'components/Button';
import UserCard from 'containers/components/UserCard';
import styles from './styles';

const mapDispatchToProps = (dispatch) => {
    return {
        search: bindActionCreators(UsersActions, dispatch).searchUsers,
        followUser: bindActionCreators(UsersActions, dispatch).followUser,
    };
};

const useStyles = createUseStyles(styles);

const FollowSearch = memo(({ search, followUser }) => {
    const theme = useTheme();
    const classes = useStyles({ theme });

    const debounce = useRef(null);
    const [loading, setLoading] = useState(false);
    const [users, setUsers] = useState([]);
    const [lastSearch, setLastSearch] = useState(null);

    const rootClassName = classnames('follow-search', classes.followBoard);
    const titleClassName = classnames('following-search__title', classes.title);
    const contentClassName = classnames('follow-search__users', classes.content);
    const loadingContainerClassName = classnames(classes.loadingContainer);
    const loadingClassName = classnames(classes.loading);
    const usersContainerClassName = classnames(
        'follow-search__users-container',
        classes.usersContainer,
    );
    const userCardClassName = classnames('follow-search__user-card', classes.userCard);
    const followButtonClassName = classnames('follow-search__user-follow');

    const handleFollowUser = useCallback(
        (idUser) => (evt) => {
            evt.stopPropagation();
            evt.preventDefault();
            followUser(idUser);
            searchUsers(lastSearch);
        },
        [followUser, searchUsers, lastSearch],
    );

    const usersContainer = useMemo(() => {
        if (!users?.length) return null;
        return users.map((user, index) => (
            <Link
                key={`search-${user.id}-${index}`}
                to={`/${user.username}`}
                className={usersContainerClassName}
            >
                <UserCard className={userCardClassName} user={user} />
                <Button
                    className={followButtonClassName}
                    color="white"
                    onClick={handleFollowUser(user.id)}
                >
                    Follow
                </Button>
            </Link>
        ));
    }, [
        users,
        usersContainerClassName,
        userCardClassName,
        followButtonClassName,
        handleFollowUser,
    ]);

    const searchUsers = useCallback(
        (searchText) => {
            setLoading(true);
            search(searchText)
                .then((data) => {
                    setUsers(data);
                })
                .catch((error) => {
                    console.error(error);
                })
                .finally(() => {
                    setLoading(false);
                    setLastSearch(searchText);
                });
        },
        [search],
    );

    const onChange = useCallback(
        (value) => {
            if (debounce.current) clearTimeout(debounce.current);
            debounce.current = setTimeout(() => {
                searchUsers(value);
            }, 500);
        },
        [searchUsers],
    );

    const onKeyEnter = useCallback(
        (value) => {
            if (debounce.current) clearTimeout(debounce.current);
            searchUsers(value);
        },
        [searchUsers],
    );

    useEffect(() => {
        searchUsers();
    }, [searchUsers]);

    return (
        <div className={rootClassName}>
            <div className={titleClassName}>Who to follow</div>
            <Input
                className="search-users"
                placeholder="Search user..."
                onChange={onChange}
                onKeyEnter={onKeyEnter}
            />
            <div className={contentClassName}>
                {loading && (
                    <div className={loadingContainerClassName}>
                        <div className={loadingClassName}>
                            <Spinner />
                        </div>
                    </div>
                )}
                {!loading && usersContainer}
            </div>
        </div>
    );
});

FollowSearch.propTypes = {
    search: PropTypes.func,
    followUser: PropTypes.func,
};

export default connect(null, mapDispatchToProps)(FollowSearch);
