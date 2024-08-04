import './home.scss';

import React, { useEffect } from 'react';

import { connect } from 'react-redux';
import { Row, Col, Button } from 'reactstrap';
import { useHistory } from 'react-router-dom';

export type IHomeProp = StateProps;

export const Home = (props: IHomeProp) => {
  const { account } = props;

  const history = useHistory();

  function handleStartAssessment() {
    history.push('/assessment');
  }

  function handleSubmitAssessment() {
    history.push('/logout');
  }

  return (
    <div>
      <div className="header">
        <img alt="" src="../../../content/images/appLogo.png" className="logo" />
        <div className="header-text">Assessment Questions</div>
        <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', width: '23vw' }}></div>
      </div>
      <Row>
        <Col md="12" className="app-content">
          <div className="instruction-card">
            <h4 className="instruction-header-text">This section is for 90 minutes</h4>
            <div className="instruction-text">
              <p>Click on the START ASSESSMENT button below to begin test</p>
              <p>NB: This platform will only allow you to take the assessment in one login</p>
              <p>Please do not attempt to reload the page or you will be assumed to have completed the assessment</p>
            </div>
            <button className="start-button" onClick={handleStartAssessment}>
              START ASSESSMENT
            </button>
          </div>
        </Col>
      </Row>
    </div>
  );
};

const mapStateToProps = storeState => ({
  account: storeState.authentication.account,
  isAuthenticated: storeState.authentication.isAuthenticated,
});

type StateProps = ReturnType<typeof mapStateToProps>;

export default connect(mapStateToProps)(Home);
