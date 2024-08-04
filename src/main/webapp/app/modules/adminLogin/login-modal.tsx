import React from 'react';

import { Button, Label, Alert, Row, Col } from 'reactstrap';
import { AvForm, AvField, AvGroup, AvInput } from 'availity-reactstrap-validation';
import { Link } from 'react-router-dom';

export interface ILoginModalProps {
  loginError: boolean;
  handleLogin: (username: string, password: string, rememberMe: boolean) => void;
}

class LoginForm extends React.Component<ILoginModalProps> {
  handleSubmit = (event, errors, { username, password, rememberMe }) => {
    const { handleLogin } = this.props;
    handleLogin(username, password, rememberMe);
  };

  render() {
    const { loginError } = this.props;

    return (
      <div>
        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column', paddingTop: '70px' }}>
          <div>
            <img src="../../../content/images/logo-on-login (2).png" style={{ width: '127px', height: '40px' }} />
          </div>
          <div
            style={{
              alignSelf: 'center',
              color: '#001d58',
              fontSize: '18px',
              fontFamily: 'Montserrat',
              fontWeight: 600,
              marginBottom: '50px',
              marginTop: '30px',
            }}
          >
            ADMIN PORTAL
          </div>
        </div>
        <div style={{ color: '#001d58', fontSize: '14px', fontFamily: 'Montserrat', fontWeight: 400, marginBottom: '24px' }}>
          Please Login with your username and password
        </div>
        <AvForm onSubmit={this.handleSubmit}>
          <div>
            <div>
              {loginError ? (
                <Alert color="danger" data-cy="loginError">
                  <strong>Failed to sign in!</strong> Please check your credentials and try again.
                </Alert>
              ) : null}
            </div>
            <div>
              <AvField
                name="username"
                placeholder="Username"
                required
                errorMessage="Username cannot be empty!"
                autoFocus
                data-cy="username"
                className="input"
              />
              <AvField
                name="password"
                type="password"
                placeholder="Password"
                required
                errorMessage="Password cannot be empty!"
                data-cy="password"
                className="input"
              />
            </div>
          </div>
          <div className="mt-1">&nbsp;</div>
          <Button
            color="primary"
            type="submit"
            data-cy="submit"
            size="lg"
            style={{
              backgroundColor: '#003296',
              borderRadius: '5px',
              width: '183px',
              height: '48px',
              fontFamily: 'Montserrat',
              fontSize: '12px',
              alignSelf: 'center',
            }}
          >
            LOGIN
          </Button>
        </AvForm>
      </div>
    );
  }
}

export default LoginForm;
