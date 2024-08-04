import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { Redirect, RouteComponentProps } from 'react-router-dom';
import './login.scss';
import { IRootState } from 'app/shared/reducers';
import { Row, Col } from 'reactstrap';

import { login } from 'app/shared/reducers/authentication';
import LoginForm from './login-modal';
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';

export interface ILoginProps extends StateProps, DispatchProps, RouteComponentProps<any> {}

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      flexGrow: 1,
    },
  })
);

export const Login = (props: ILoginProps) => {
  const handleLogin = (username, password, rememberMe = false) => props.login(username, password, rememberMe);

  const { location, isAuthenticated } = props;
  const { from } = (location.state as any) || { from: { pathname: '/', search: location.search } };
  const classes = useStyles();

  if (isAuthenticated) {
    return <Redirect to={from} />;
  }
  return (
    <div className={classes.root}>
      <Grid container spacing={3}>
        <Grid item xs={6}>
          <img src="../../../content/images/admin.png" className="banner-image" />
        </Grid>
        <Grid item xs={6} className="login-column">
          <LoginForm handleLogin={handleLogin} loginError={props.loginError} />
        </Grid>
      </Grid>
    </div>
  );
  return (
    <Row className="default">
      <Col md="6" className="default">
        <img src="../../../content/images/admin.png" className="banner-image" />
      </Col>
      <Col md="6" className="login-column">
        <LoginForm handleLogin={handleLogin} loginError={props.loginError} />
      </Col>
    </Row>
  );
};

const mapStateToProps = ({ authentication }: IRootState) => ({
  isAuthenticated: authentication.isAuthenticated,
  loginError: authentication.loginError,
});

const mapDispatchToProps = { login };

type StateProps = ReturnType<typeof mapStateToProps>;
type DispatchProps = typeof mapDispatchToProps;

export default connect(mapStateToProps, mapDispatchToProps)(Login);
