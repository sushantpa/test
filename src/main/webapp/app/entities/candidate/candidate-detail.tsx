import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { Link, RouteComponentProps } from 'react-router-dom';
import { Button, UncontrolledTooltip, Row, Col } from 'reactstrap';
import { Translate, TextFormat } from 'react-jhipster';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { IRootState } from 'app/shared/reducers';
import { getEntity } from './candidate.reducer';
import { APP_DATE_FORMAT, APP_LOCAL_DATE_FORMAT } from 'app/config/constants';

export interface ICandidateDetailProps extends StateProps, DispatchProps, RouteComponentProps<{ id: string }> {}

export const CandidateDetail = (props: ICandidateDetailProps) => {
  useEffect(() => {
    props.getEntity(props.match.params.id);
  }, []);

  const { candidateEntity } = props;
  return (
    <Row>
      <Col md="8">
        <h2 data-cy="candidateDetailsHeading">
          <Translate contentKey="assessmentApp.candidate.detail.title">Candidate</Translate>
        </h2>
        <dl className="jh-entity-details">
          <dt>
            <span id="id">
              <Translate contentKey="global.field.id">ID</Translate>
            </span>
          </dt>
          <dd>{candidateEntity.id}</dd>
          <dt>
            <span id="firstName">
              <Translate contentKey="assessmentApp.candidate.firstName">First Name</Translate>
            </span>
            <UncontrolledTooltip target="firstName">
              <Translate contentKey="assessmentApp.candidate.help.firstName" />
            </UncontrolledTooltip>
          </dt>
          <dd>{candidateEntity.firstName}</dd>
          <dt>
            <span id="lastName">
              <Translate contentKey="assessmentApp.candidate.lastName">Last Name</Translate>
            </span>
            <UncontrolledTooltip target="lastName">
              <Translate contentKey="assessmentApp.candidate.help.lastName" />
            </UncontrolledTooltip>
          </dt>
          <dd>{candidateEntity.lastName}</dd>
          <dt>
            <span id="email">
              <Translate contentKey="assessmentApp.candidate.email">Email</Translate>
            </span>
            <UncontrolledTooltip target="email">
              <Translate contentKey="assessmentApp.candidate.help.email" />
            </UncontrolledTooltip>
          </dt>
          <dd>{candidateEntity.email}</dd>
          <dt>
            <span id="latestTestScore">
              <Translate contentKey="assessmentApp.candidate.latestTestScore">Latest Test Score</Translate>
            </span>
            <UncontrolledTooltip target="latestTestScore">
              <Translate contentKey="assessmentApp.candidate.help.latestTestScore" />
            </UncontrolledTooltip>
          </dt>
          <dd>{candidateEntity.latestTestScore}</dd>
          <dt>
            <span id="lastTestDate">
              <Translate contentKey="assessmentApp.candidate.lastTestDate">Last Test Date</Translate>
            </span>
            <UncontrolledTooltip target="lastTestDate">
              <Translate contentKey="assessmentApp.candidate.help.lastTestDate" />
            </UncontrolledTooltip>
          </dt>
          <dd>
            {candidateEntity.lastTestDate ? (
              <TextFormat value={candidateEntity.lastTestDate} type="date" format={APP_LOCAL_DATE_FORMAT} />
            ) : null}
          </dd>
          <dt>
            <span id="registrationDate">
              <Translate contentKey="assessmentApp.candidate.registrationDate">Registration Date</Translate>
            </span>
            <UncontrolledTooltip target="registrationDate">
              <Translate contentKey="assessmentApp.candidate.help.registrationDate" />
            </UncontrolledTooltip>
          </dt>
          <dd>
            {candidateEntity.registrationDate ? (
              <TextFormat value={candidateEntity.registrationDate} type="date" format={APP_LOCAL_DATE_FORMAT} />
            ) : null}
          </dd>
          <dt>
            <span id="registrationCount">
              <Translate contentKey="assessmentApp.candidate.registrationCount">Registration Count</Translate>
            </span>
            <UncontrolledTooltip target="registrationCount">
              <Translate contentKey="assessmentApp.candidate.help.registrationCount" />
            </UncontrolledTooltip>
          </dt>
          <dd>{candidateEntity.registrationCount}</dd>
          <dt>
            <span id="testTakenCount">
              <Translate contentKey="assessmentApp.candidate.testTakenCount">Test Taken Count</Translate>
            </span>
            <UncontrolledTooltip target="testTakenCount">
              <Translate contentKey="assessmentApp.candidate.help.testTakenCount" />
            </UncontrolledTooltip>
          </dt>
          <dd>{candidateEntity.testTakenCount}</dd>
          <dt>
            <span id="canTakeTest">
              <Translate contentKey="assessmentApp.candidate.canTakeTest">Can Take Test</Translate>
            </span>
            <UncontrolledTooltip target="canTakeTest">
              <Translate contentKey="assessmentApp.candidate.help.canTakeTest" />
            </UncontrolledTooltip>
          </dt>
          <dd>{candidateEntity.canTakeTest ? 'true' : 'false'}</dd>
          <dt>
            <Translate contentKey="assessmentApp.candidate.user">User</Translate>
          </dt>
          <dd>{candidateEntity.user ? candidateEntity.user.id : ''}</dd>
        </dl>
        <Button tag={Link} to="/candidate" replace color="info" data-cy="entityDetailsBackButton">
          <FontAwesomeIcon icon="arrow-left" />{' '}
          <span className="d-none d-md-inline">
            <Translate contentKey="entity.action.back">Back</Translate>
          </span>
        </Button>
        &nbsp;
        <Button tag={Link} to={`/candidate/${candidateEntity.id}/edit`} replace color="primary">
          <FontAwesomeIcon icon="pencil-alt" />{' '}
          <span className="d-none d-md-inline">
            <Translate contentKey="entity.action.edit">Edit</Translate>
          </span>
        </Button>
      </Col>
    </Row>
  );
};

const mapStateToProps = ({ candidate }: IRootState) => ({
  candidateEntity: candidate.entity,
});

const mapDispatchToProps = { getEntity };

type StateProps = ReturnType<typeof mapStateToProps>;
type DispatchProps = typeof mapDispatchToProps;

export default connect(mapStateToProps, mapDispatchToProps)(CandidateDetail);
