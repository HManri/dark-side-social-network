import React, { memo, useState, useCallback, useEffect, useMemo } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import classnames from 'classnames';
import { createUseStyles, useTheme } from 'react-jss';
import { useHistory } from 'react-router-dom';
import { AuthActions } from 'actions';
import { getLoginImage } from 'utils/images';
import Input from 'components/Input';
import Button from 'components/Button';
import Spinner from 'components/Spinner';

import styles from './styles';

const mapStateToProps = (state) => {
    return {
        loading: state.auth.loading,
        error: state.auth.error,
        isLogged: !!state.auth.authUser,
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        login: bindActionCreators(AuthActions, dispatch).login,
        resetLogin: bindActionCreators(AuthActions, dispatch).resetLogin,
    };
};

const useStyles = createUseStyles(styles);

const Login = memo(({ loading, error, isLogged, login, resetLogin }) => {
    const theme = useTheme();
    const classes = useStyles({ theme });
    const history = useHistory();

    const loginClassName = classnames('login', classes.login);
    const titleClassName = classnames('login__title', classes.title);
    const loadingClassName = classnames(classes.loading);
    const errorClassName = classnames('login__error', classes.error);

    // username auto filled for this demo
    // password is not needed for this demo
    const [loginData, setLoginData] = useState({ username: 'dvader' });

    const loginImage = useMemo(() => {
        return getLoginImage();
    }, []);

    const inputChange = useCallback(
        (field) => (value) => {
            setLoginData({ ...loginData, [field]: value });
        },
        [loginData],
    );

    const submitLogin = useCallback(
        (value = '') => {
            login(value).then(() => {
                history.replace({ pathname: '/' });
            });
        },
        [login, history],
    );

    const onKeyEnter = useCallback(
        (value) => {
            submitLogin(value);
        },
        [submitLogin],
    );

    const onSubmit = useCallback(() => {
        submitLogin(loginData.username);
    }, [submitLogin, loginData.username]);

    useEffect(() => {
        // if we reload this container, we need to be sure
        // login is not loading and it is without error
        resetLogin();
    }, [resetLogin]);

    useEffect(() => {
        if (isLogged) {
            history.replace({ pathname: '/' });
        }
    }, [isLogged, history]);

    return (
        <div className={loginClassName}>
            <div className={titleClassName}>
                <img src={loginImage} alt="Hello there!" />
                <span>{`Hello there!`}</span>
            </div>
            <Input
                className="user-input"
                placeholder="Username"
                onChange={inputChange('username')}
                onKeyEnter={onKeyEnter}
                value={loginData.username}
                disabled={loading}
            />
            <div className="submit-container">
                <div className="submit-container-button">
                    <Button className="submit-button" onClick={onSubmit} disabled={loading}>
                        {`Login`}
                    </Button>
                    {loading && (
                        <div className={loadingClassName}>
                            <Spinner />
                        </div>
                    )}
                </div>
            </div>
            {error && <div className={errorClassName}>{`The user doesn't exist`}</div>}
        </div>
    );
});

Login.propTypes = {
    loading: PropTypes.bool,
    error: PropTypes.bool,
    isLogged: PropTypes.bool,
    login: PropTypes.func,
    resetLogin: PropTypes.func,
};

export default connect(mapStateToProps, mapDispatchToProps)(Login);
