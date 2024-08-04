import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { Link, RouteComponentProps } from 'react-router-dom';
import { Button, UncontrolledTooltip, Row, Col } from 'reactstrap';
import { Translate } from 'react-jhipster';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { IRootState } from 'app/shared/reducers';
import { getEntity } from './candidate-answer.reducer';
import { APP_DATE_FORMAT, APP_LOCAL_DATE_FORMAT } from 'app/config/constants';

export interface ICandidateAnswerDetailProps extends StateProps, DispatchProps, RouteComponentProps<{ id: string }> {}

export const CandidateAnswerDetail = (props: ICandidateAnswerDetailProps) => {
  useEffect(() => {
    props.getEntity(props.match.params.id);
  }, []);

  const { candidateAnswerEntity } = props;
  return (
    <Row>
      <Col md="8">
        <h2 data-cy="candidateAnswerDetailsHeading">
          <Translate contentKey="assessmentApp.candidateAnswer.detail.title">CandidateAnswer</Translate>
        </h2>
        <dl className="jh-entity-details">
          <dt>
            <span id="id">
              <Translate contentKey="global.field.id">ID</Translate>
            </span>
          </dt>
          <dd>{candidateAnswerEntity.id}</dd>
          <dt>
            <span id="answer">
              <Translate contentKey="assessmentApp.candidateAnswer.answer">Answer</Translate>
            </span>
            <UncontrolledTooltip target="answer">
              <Translate contentKey="assessmentApp.candidateAnswer.help.answer" />
            </UncontrolledTooltip>
          </dt>
          <dd>{candidateAnswerEntity.answer}</dd>
          <dt>
            <Translate contentKey="assessmentApp.candidateAnswer.question">Question</Translate>
          </dt>
          <dd>{candidateAnswerEntity.question ? candidateAnswerEntity.question.id : ''}</dd>
          <dt>
            <Translate contentKey="assessmentApp.candidateAnswer.candidateTest">Candidate Test</Translate>
          </dt>
          <dd>{candidateAnswerEntity.candidateTest ? candidateAnswerEntity.candidateTest.id : ''}</dd>
        </dl>
        <Button tag={Link} to="/candidate-answer" replace color="info" data-cy="entityDetailsBackButton">
          <FontAwesomeIcon icon="arrow-left" />{' '}
          <span className="d-none d-md-inline">
            <Translate contentKey="entity.action.back">Back</Translate>
          </span>
        </Button>
        &nbsp;
        <Button tag={Link} to={`/candidate-answer/${candidateAnswerEntity.id}/edit`} replace color="primary">
          <FontAwesomeIcon icon="pencil-alt" />{' '}
          <span className="d-none d-md-inline">
            <Translate contentKey="entity.action.edit">Edit</Translate>
          </span>
        </Button>
      </Col>
    </Row>
  );
};

const mapStateToProps = ({ candidateAnswer }: IRootState) => ({
  candidateAnswerEntity: candidateAnswer.entity,
});

const mapDispatchToProps = { getEntity };

type StateProps = ReturnType<typeof mapStateToProps>;
type DispatchProps = typeof mapDispatchToProps;

export default connect(mapStateToProps, mapDispatchToProps)(CandidateAnswerDetail);
