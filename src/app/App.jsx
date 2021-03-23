import React, { memo } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { HashRouter as Router, Switch, Route, Redirect } from 'react-router-dom';
import injectSheet, { ThemeProvider, createUseStyles } from 'react-jss';

import Login from 'containers/Login';
import Wall from 'containers/Wall';

import theme from './theme';
import styles from './globalStyles';

const mapStateToProps = (state) => {
    return {
        isLogged: !!state.auth.authUser,
    };
};

const useStyles = createUseStyles(styles);

const App = memo(({ isLogged }) => {
    const classes = useStyles();

    return (
        <ThemeProvider theme={theme}>
            <div className={classes['app-container']}>
                <Router>
                    <Switch>
                        <Route path="/login" component={Login} exact />
                        <Route path="/:user?" exact>
                            {!isLogged ? <Redirect to="/login" /> : <Wall />}
                        </Route>
                    </Switch>
                </Router>
            </div>
        </ThemeProvider>
    );
});

App.propTypes = {
    isLogged: PropTypes.bool,
};

export default injectSheet(styles)(connect(mapStateToProps)(App));
