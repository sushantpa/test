import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { Link, RouteComponentProps } from 'react-router-dom';
import { Button, Row, Col, Label, UncontrolledTooltip } from 'reactstrap';
import { AvFeedback, AvForm, AvGroup, AvInput, AvField } from 'availity-reactstrap-validation';
import { Translate, translate } from 'react-jhipster';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { IRootState } from 'app/shared/reducers';

import { IQuestion } from 'app/shared/model/question.model';
import { getEntities as getQuestions } from 'app/entities/question/question.reducer';
import { ICandidateTest } from 'app/shared/model/candidate-test.model';
import { getEntities as getCandidateTests } from 'app/entities/candidate-test/candidate-test.reducer';
import { getEntity, updateEntity, createEntity, reset } from './candidate-answer.reducer';
import { ICandidateAnswer } from 'app/shared/model/candidate-answer.model';
import { convertDateTimeFromServer, convertDateTimeToServer, displayDefaultDateTime } from 'app/shared/util/date-utils';
import { mapIdList } from 'app/shared/util/entity-utils';

export interface ICandidateAnswerUpdateProps extends StateProps, DispatchProps, RouteComponentProps<{ id: string }> {}

export const CandidateAnswerUpdate = (props: ICandidateAnswerUpdateProps) => {
  const [isNew] = useState(!props.match.params || !props.match.params.id);

  const { candidateAnswerEntity, questions, candidateTests, loading, updating } = props;

  const handleClose = () => {
    props.history.push('/candidate-answer');
  };

  useEffect(() => {
    if (isNew) {
      props.reset();
    } else {
      props.getEntity(props.match.params.id);
    }

    props.getQuestions();
    props.getCandidateTests();
  }, []);

  useEffect(() => {
    if (props.updateSuccess) {
      handleClose();
    }
  }, [props.updateSuccess]);

  const saveEntity = (event, errors, values) => {
    if (errors.length === 0) {
      const entity = {
        ...candidateAnswerEntity,
        ...values,
        question: questions.find(it => it.id.toString() === values.questionId.toString()),
        candidateTest: candidateTests.find(it => it.id.toString() === values.candidateTestId.toString()),
      };

      if (isNew) {
        props.createEntity(entity);
      } else {
        props.updateEntity(entity);
      }
    }
  };

  return (
    <div>
      <Row className="justify-content-center">
        <Col md="8">
          <h2 id="assessmentApp.candidateAnswer.home.createOrEditLabel" data-cy="CandidateAnswerCreateUpdateHeading">
            <Translate contentKey="assessmentApp.candidateAnswer.home.createOrEditLabel">Create or edit a CandidateAnswer</Translate>
          </h2>
        </Col>
      </Row>
      <Row className="justify-content-center">
        <Col md="8">
          {loading ? (
            <p>Loading...</p>
          ) : (
            <AvForm model={isNew ? {} : candidateAnswerEntity} onSubmit={saveEntity}>
              {!isNew ? (
                <AvGroup>
                  <Label for="candidate-answer-id">
                    <Translate contentKey="global.field.id">ID</Translate>
                  </Label>
                  <AvInput id="candidate-answer-id" type="text" className="form-control" name="id" required readOnly />
                </AvGroup>
              ) : null}
              <AvGroup>
                <Label id="answerLabel" for="candidate-answer-answer">
                  <Translate contentKey="assessmentApp.candidateAnswer.answer">Answer</Translate>
                </Label>
                <AvField id="candidate-answer-answer" data-cy="answer" type="text" name="answer" />
                <UncontrolledTooltip target="answerLabel">
                  <Translate contentKey="assessmentApp.candidateAnswer.help.answer" />
                </UncontrolledTooltip>
              </AvGroup>
              <AvGroup>
                <Label for="candidate-answer-question">
                  <Translate contentKey="assessmentApp.candidateAnswer.question">Question</Translate>
                </Label>
                <AvInput id="candidate-answer-question" data-cy="question" type="select" className="form-control" name="questionId">
                  <option value="" key="0" />
                  {questions
                    ? questions.map(otherEntity => (
                        <option value={otherEntity.id} key={otherEntity.id}>
                          {otherEntity.id}
                        </option>
                      ))
                    : null}
                </AvInput>
              </AvGroup>
              <AvGroup>
                <Label for="candidate-answer-candidateTest">
                  <Translate contentKey="assessmentApp.candidateAnswer.candidateTest">Candidate Test</Translate>
                </Label>
                <AvInput
                  id="candidate-answer-candidateTest"
                  data-cy="candidateTest"
                  type="select"
                  className="form-control"
                  name="candidateTestId"
                >
                  <option value="" key="0" />
                  {candidateTests
                    ? candidateTests.map(otherEntity => (
                        <option value={otherEntity.id} key={otherEntity.id}>
                          {otherEntity.id}
                        </option>
                      ))
                    : null}
                </AvInput>
              </AvGroup>
              <Button tag={Link} id="cancel-save" to="/candidate-answer" replace color="info">
                <FontAwesomeIcon icon="arrow-left" />
                &nbsp;
                <span className="d-none d-md-inline">
                  <Translate contentKey="entity.action.back">Back</Translate>
                </span>
              </Button>
              &nbsp;
              <Button color="primary" id="save-entity" data-cy="entityCreateSaveButton" type="submit" disabled={updating}>
                <FontAwesomeIcon icon="save" />
                &nbsp;
                <Translate contentKey="entity.action.save">Save</Translate>
              </Button>
            </AvForm>
          )}
        </Col>
      </Row>
    </div>
  );
};

const mapStateToProps = (storeState: IRootState) => ({
  questions: storeState.question.entities,
  candidateTests: storeState.candidateTest.entities,
  candidateAnswerEntity: storeState.candidateAnswer.entity,
  loading: storeState.candidateAnswer.loading,
  updating: storeState.candidateAnswer.updating,
  updateSuccess: storeState.candidateAnswer.updateSuccess,
});

const mapDispatchToProps = {
  getQuestions,
  getCandidateTests,
  getEntity,
  updateEntity,
  createEntity,
  reset,
};

type StateProps = ReturnType<typeof mapStateToProps>;
type DispatchProps = typeof mapDispatchToProps;

export default connect(mapStateToProps, mapDispatchToProps)(CandidateAnswerUpdate);
