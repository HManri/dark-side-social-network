import React, { memo, useCallback } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import classnames from 'classnames';
import { createUseStyles, useTheme } from 'react-jss';
import { Link, useHistory } from 'react-router-dom';
import { AuthActions } from 'actions';
import Logout from 'components/Icons/Logout';
import { getDefaultUserPhoto, handleOnErrorImageLoad } from 'utils/images';
import styles from './styles';

const mapStateToProps = (state) => {
    return {
        userPhoto: state.auth?.authUser?.photo || getDefaultUserPhoto(),
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        logout: bindActionCreators(AuthActions, dispatch).logout,
    };
};

const useStyles = createUseStyles(styles);

const MenuBar = memo(({ userPhoto, logout }) => {
    const theme = useTheme();
    const classes = useStyles({ theme });
    const history = useHistory();

    const rootClassName = classnames('menu-bar', classes.menuBar);
    const iconClassName = classnames('menu-bar__icon', classes.icon);
    const mainActionsClassName = classnames('menu-bar__main-actions', classes.main);

    const onLogout = useCallback(() => {
        logout().then(() => {
            history.push('/');
        });
    }, [logout, history]);

    return (
        <div className={rootClassName}>
            <div className={mainActionsClassName}>
                <Link to="/" className={`home-icon ${iconClassName}`}>
                    <img src={userPhoto} alt="Home" onError={handleOnErrorImageLoad} />
                </Link>
            </div>
            <div className={`logout-icon ${iconClassName}`} onClick={onLogout}>
                <Logout />
            </div>
        </div>
    );
});

MenuBar.propTypes = {
    userPhoto: PropTypes.string,
    logout: PropTypes.func,
};

export default connect(mapStateToProps, mapDispatchToProps)(MenuBar);
