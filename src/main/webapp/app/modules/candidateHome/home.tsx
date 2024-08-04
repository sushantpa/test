import './home.scss';

import React, { useEffect } from 'react';

import { connect } from 'react-redux';
import { Row, Col, Button } from 'reactstrap';
import { useHistory } from 'react-router-dom';
import { getLoginCandidate } from 'app/entities/candidate/candidate.reducer';
import { startAssessment, getRemainingTime } from '../../entities/candidate-test/candidate-test.reducer';

export interface ICandidateHomeProp extends StateProps, DispatchProps {}

export const CandidateHome = (props: ICandidateHomeProp) => {
  const { candidateLatestTest, assessmentStarted, assessmentCompleted } = props;
  const history = useHistory();

  function handleStartAssessment() {
    props.startAssessment(candidateLatestTest.id);
    history.push('/assessment');
  }

  useEffect(() => {
    props.getLoginCandidate();
    if (assessmentStarted === true && assessmentCompleted === false) {
      return history.push('/assessment');
    }

    if (assessmentStarted === true && assessmentCompleted === true) {
      return history.push('/logout');
    }
  }, [assessmentStarted, assessmentCompleted]);

  return (
    candidateLatestTest && (
      <div>
        <div className="header">
          <img alt="" src="../../../content/images/appLogo.png" className="logo" />
          <div className="header-text">Assessment Questions</div>
          <div
            style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', width: '23vw' }}
          ></div>
        </div>
        <Row>
          <Col md="12" className="app-content">
            <div className="instruction">Instruction</div>
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
    )
  );
};

const mapStateToProps = ({ authentication, candidate }) => ({
  account: authentication.account,
  isAuthenticated: authentication.isAuthenticated,
  candidateLatestTest: candidate.candidateLatestTest,
  loading: candidate.loading,
  assessmentStarted: candidate.assessmentStarted,
  assessmentCompleted: candidate.assessmentCompleted,
});

const mapDispatchToProps = {
  getRemainingTime,
  startAssessment,
  getLoginCandidate,
};

type StateProps = ReturnType<typeof mapStateToProps>;
type DispatchProps = typeof mapDispatchToProps;

export default connect(mapStateToProps, mapDispatchToProps)(CandidateHome);
