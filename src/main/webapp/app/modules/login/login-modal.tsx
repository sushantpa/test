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
        <div>
          <Row>
            <Col>
              <img src="../../../content/images/bbgLogo.png" style={{ width: '64px', height: '32px' }} />
            </Col>
            <Col>
              <img src="../../../content/images/betterLife.png" style={{ width: '33px', height: '40px' }} />
            </Col>
          </Row>
          <div
            style={{
              marginBottom: '50px',
              alignSelf: 'center',
              color: '#001d58',
              fontSize: '18px',
              fontFamily: 'Montserrat',
              fontWeight: 500,
              marginTop: '37px',
            }}
          >
            ASSESSMENT PORTAL
          </div>
        </div>
        <div style={{ color: '#001d58', fontSize: '14px', fontFamily: 'Montserrat', fontWeight: 400, marginBottom: '24px' }}>
          Please Login with your username and password
        </div>
        <AvForm onSubmit={this.handleSubmit}>
          <Row>
            <Col md="6">
              {loginError ? (
                <Alert color="danger" data-cy="loginError">
                  <strong>Failed to sign in!</strong> Please check your credentials and try again.
                </Alert>
              ) : null}
            </Col>
            <Col md="9">
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
            </Col>
          </Row>
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
