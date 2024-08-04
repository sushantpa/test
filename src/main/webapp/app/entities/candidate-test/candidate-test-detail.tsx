import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { Link, RouteComponentProps } from 'react-router-dom';
import { Button, UncontrolledTooltip, Row, Col } from 'reactstrap';
import { Translate, TextFormat } from 'react-jhipster';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { IRootState } from 'app/shared/reducers';
import { getEntity } from './candidate-test.reducer';
import { APP_DATE_FORMAT, APP_LOCAL_DATE_FORMAT } from 'app/config/constants';

export interface ICandidateTestDetailProps extends StateProps, DispatchProps, RouteComponentProps<{ id: string }> {}

export const CandidateTestDetail = (props: ICandidateTestDetailProps) => {
  useEffect(() => {
    props.getEntity(props.match.params.id);
  }, []);

  const { candidateTestEntity } = props;
  return (
    <Row>
      <Col md="8">
        <h2 data-cy="candidateTestDetailsHeading">
          <Translate contentKey="assessmentApp.candidateTest.detail.title">CandidateTest</Translate>
        </h2>
        <dl className="jh-entity-details">
          <dt>
            <span id="id">
              <Translate contentKey="global.field.id">ID</Translate>
            </span>
          </dt>
          <dd>{candidateTestEntity.id}</dd>
          <dt>
            <span id="testCompletionDate">
              <Translate contentKey="assessmentApp.candidateTest.testCompletionDate">Test Completion Date</Translate>
            </span>
            <UncontrolledTooltip target="testCompletionDate">
              <Translate contentKey="assessmentApp.candidateTest.help.testCompletionDate" />
            </UncontrolledTooltip>
          </dt>
          <dd>
            {candidateTestEntity.testCompletionDate ? (
              <TextFormat value={candidateTestEntity.testCompletionDate} type="date" format={APP_LOCAL_DATE_FORMAT} />
            ) : null}
          </dd>
          <dt>
            <span id="testScore">
              <Translate contentKey="assessmentApp.candidateTest.testScore">Test Score</Translate>
            </span>
            <UncontrolledTooltip target="testScore">
              <Translate contentKey="assessmentApp.candidateTest.help.testScore" />
            </UncontrolledTooltip>
          </dt>
          <dd>{candidateTestEntity.testScore}</dd>
          <dt>
            <span id="testScheduledDate">
              <Translate contentKey="assessmentApp.candidateTest.testScheduledDate">Test Scheduled Date</Translate>
            </span>
            <UncontrolledTooltip target="testScheduledDate">
              <Translate contentKey="assessmentApp.candidateTest.help.testScheduledDate" />
            </UncontrolledTooltip>
          </dt>
          <dd>
            {candidateTestEntity.testScheduledDate ? (
              <TextFormat value={candidateTestEntity.testScheduledDate} type="date" format={APP_LOCAL_DATE_FORMAT} />
            ) : null}
          </dd>
          <dt>
            <span id="questionsAttempted">
              <Translate contentKey="assessmentApp.candidateTest.questionsAttempted">Questions Attempted</Translate>
            </span>
            <UncontrolledTooltip target="questionsAttempted">
              <Translate contentKey="assessmentApp.candidateTest.help.questionsAttempted" />
            </UncontrolledTooltip>
          </dt>
          <dd>{candidateTestEntity.questionsAttempted}</dd>
          <dt>
            <span id="remainingTime">
              <Translate contentKey="assessmentApp.candidateTest.remainingTime">Remaining Time</Translate>
            </span>
            <UncontrolledTooltip target="remainingTime">
              <Translate contentKey="assessmentApp.candidateTest.help.remainingTime" />
            </UncontrolledTooltip>
          </dt>
          <dd>{candidateTestEntity.remainingTime}</dd>
          <dt>
            <span id="testStartDateTime">
              <Translate contentKey="assessmentApp.candidateTest.testStartDateTime">Test Start Date Time</Translate>
            </span>
            <UncontrolledTooltip target="testStartDateTime">
              <Translate contentKey="assessmentApp.candidateTest.help.testStartDateTime" />
            </UncontrolledTooltip>
          </dt>
          <dd>
            {candidateTestEntity.testStartDateTime ? (
              <TextFormat value={candidateTestEntity.testStartDateTime} type="date" format={APP_DATE_FORMAT} />
            ) : null}
          </dd>
          <dt>
            <span id="testEndDateTime">
              <Translate contentKey="assessmentApp.candidateTest.testEndDateTime">Test End Date Time</Translate>
            </span>
            <UncontrolledTooltip target="testEndDateTime">
              <Translate contentKey="assessmentApp.candidateTest.help.testEndDateTime" />
            </UncontrolledTooltip>
          </dt>
          <dd>
            {candidateTestEntity.testEndDateTime ? (
              <TextFormat value={candidateTestEntity.testEndDateTime} type="date" format={APP_DATE_FORMAT} />
            ) : null}
          </dd>
          <dt>
            <Translate contentKey="assessmentApp.candidateTest.candidate">Candidate</Translate>
          </dt>
          <dd>{candidateTestEntity.candidate ? candidateTestEntity.candidate.id : ''}</dd>
        </dl>
        <Button tag={Link} to="/candidate-test" replace color="info" data-cy="entityDetailsBackButton">
          <FontAwesomeIcon icon="arrow-left" />{' '}
          <span className="d-none d-md-inline">
            <Translate contentKey="entity.action.back">Back</Translate>
          </span>
        </Button>
        &nbsp;
        <Button tag={Link} to={`/candidate-test/${candidateTestEntity.id}/edit`} replace color="primary">
          <FontAwesomeIcon icon="pencil-alt" />{' '}
          <span className="d-none d-md-inline">
            <Translate contentKey="entity.action.edit">Edit</Translate>
          </span>
        </Button>
      </Col>
    </Row>
  );
};

const mapStateToProps = ({ candidateTest }: IRootState) => ({
  candidateTestEntity: candidateTest.entity,
});

const mapDispatchToProps = { getEntity };

type StateProps = ReturnType<typeof mapStateToProps>;
type DispatchProps = typeof mapDispatchToProps;

export default connect(mapStateToProps, mapDispatchToProps)(CandidateTestDetail);
