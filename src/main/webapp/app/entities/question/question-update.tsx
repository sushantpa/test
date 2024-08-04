import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { Link, RouteComponentProps } from 'react-router-dom';
import { Button, Row, Col, Label, UncontrolledTooltip } from 'reactstrap';
import { AvFeedback, AvForm, AvGroup, AvInput, AvField } from 'availity-reactstrap-validation';
import { Translate, translate } from 'react-jhipster';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { IRootState } from 'app/shared/reducers';

import { ICandidateAnswer } from 'app/shared/model/candidate-answer.model';
import { getEntities as getCandidateAnswers } from 'app/entities/candidate-answer/candidate-answer.reducer';
import { ISection } from 'app/shared/model/section.model';
import { getEntities as getSections } from 'app/entities/section/section.reducer';
import { getEntity, updateEntity, createEntity, reset } from './question.reducer';
import { IQuestion } from 'app/shared/model/question.model';
import { convertDateTimeFromServer, convertDateTimeToServer, displayDefaultDateTime } from 'app/shared/util/date-utils';
import { mapIdList } from 'app/shared/util/entity-utils';

export interface IQuestionUpdateProps extends StateProps, DispatchProps, RouteComponentProps<{ id: string }> {}

export const QuestionUpdate = (props: IQuestionUpdateProps) => {
  const [isNew] = useState(!props.match.params || !props.match.params.id);

  const { questionEntity, candidateAnswers, sections, loading, updating } = props;

  const handleClose = () => {
    props.history.push('/question');
  };

  useEffect(() => {
    if (isNew) {
      props.reset();
    } else {
      props.getEntity(props.match.params.id);
    }

    props.getCandidateAnswers();
    props.getSections();
  }, []);

  useEffect(() => {
    if (props.updateSuccess) {
      handleClose();
    }
  }, [props.updateSuccess]);

  const saveEntity = (event, errors, values) => {
    if (errors.length === 0) {
      const entity = {
        ...questionEntity,
        ...values,
        section: sections.find(it => it.id.toString() === values.sectionId.toString()),
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
          <h2 id="assessmentApp.question.home.createOrEditLabel" data-cy="QuestionCreateUpdateHeading">
            <Translate contentKey="assessmentApp.question.home.createOrEditLabel">Create or edit a Question</Translate>
          </h2>
        </Col>
      </Row>
      <Row className="justify-content-center">
        <Col md="8">
          {loading ? (
            <p>Loading...</p>
          ) : (
            <AvForm model={isNew ? {} : questionEntity} onSubmit={saveEntity}>
              {!isNew ? (
                <AvGroup>
                  <Label for="question-id">
                    <Translate contentKey="global.field.id">ID</Translate>
                  </Label>
                  <AvInput id="question-id" type="text" className="form-control" name="id" required readOnly />
                </AvGroup>
              ) : null}
              <AvGroup>
                <Label id="questionLabel" for="question-question">
                  <Translate contentKey="assessmentApp.question.question">Question</Translate>
                </Label>
                <AvField id="question-question" data-cy="question" type="text" name="question" />
                <UncontrolledTooltip target="questionLabel">
                  <Translate contentKey="assessmentApp.question.help.question" />
                </UncontrolledTooltip>
              </AvGroup>
              <AvGroup>
                <Label id="questionNumberLabel" for="question-questionNumber">
                  <Translate contentKey="assessmentApp.question.questionNumber">Question Number</Translate>
                </Label>
                <AvField id="question-questionNumber" data-cy="questionNumber" type="text" name="questionNumber" />
                <UncontrolledTooltip target="questionNumberLabel">
                  <Translate contentKey="assessmentApp.question.help.questionNumber" />
                </UncontrolledTooltip>
              </AvGroup>
              <AvGroup>
                <Label id="aLabel" for="question-a">
                  <Translate contentKey="assessmentApp.question.a">A</Translate>
                </Label>
                <AvField id="question-a" data-cy="a" type="text" name="a" />
                <UncontrolledTooltip target="aLabel">
                  <Translate contentKey="assessmentApp.question.help.a" />
                </UncontrolledTooltip>
              </AvGroup>
              <AvGroup>
                <Label id="bLabel" for="question-b">
                  <Translate contentKey="assessmentApp.question.b">B</Translate>
                </Label>
                <AvField id="question-b" data-cy="b" type="text" name="b" />
                <UncontrolledTooltip target="bLabel">
                  <Translate contentKey="assessmentApp.question.help.b" />
                </UncontrolledTooltip>
              </AvGroup>
              <AvGroup>
                <Label id="cLabel" for="question-c">
                  <Translate contentKey="assessmentApp.question.c">C</Translate>
                </Label>
                <AvField id="question-c" data-cy="c" type="text" name="c" />
                <UncontrolledTooltip target="cLabel">
                  <Translate contentKey="assessmentApp.question.help.c" />
                </UncontrolledTooltip>
              </AvGroup>
              <AvGroup>
                <Label id="dLabel" for="question-d">
                  <Translate contentKey="assessmentApp.question.d">D</Translate>
                </Label>
                <AvField id="question-d" data-cy="d" type="text" name="d" />
                <UncontrolledTooltip target="dLabel">
                  <Translate contentKey="assessmentApp.question.help.d" />
                </UncontrolledTooltip>
              </AvGroup>
              <AvGroup>
                <Label id="eLabel" for="question-e">
                  <Translate contentKey="assessmentApp.question.e">E</Translate>
                </Label>
                <AvField id="question-e" data-cy="e" type="text" name="e" />
                <UncontrolledTooltip target="eLabel">
                  <Translate contentKey="assessmentApp.question.help.e" />
                </UncontrolledTooltip>
              </AvGroup>
              <AvGroup>
                <Label id="answerLabel" for="question-answer">
                  <Translate contentKey="assessmentApp.question.answer">Answer</Translate>
                </Label>
                <AvField id="question-answer" data-cy="answer" type="text" name="answer" />
                <UncontrolledTooltip target="answerLabel">
                  <Translate contentKey="assessmentApp.question.help.answer" />
                </UncontrolledTooltip>
              </AvGroup>
              <AvGroup>
                <Label for="question-section">
                  <Translate contentKey="assessmentApp.question.section">Section</Translate>
                </Label>
                <AvInput id="question-section" data-cy="section" type="select" className="form-control" name="sectionId">
                  <option value="" key="0" />
                  {sections
                    ? sections.map(otherEntity => (
                        <option value={otherEntity.id} key={otherEntity.id}>
                          {otherEntity.id}
                        </option>
                      ))
                    : null}
                </AvInput>
              </AvGroup>
              <Button tag={Link} id="cancel-save" to="/question" replace color="info">
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
  candidateAnswers: storeState.candidateAnswer.entities,
  sections: storeState.section.entities,
  questionEntity: storeState.question.entity,
  loading: storeState.question.loading,
  updating: storeState.question.updating,
  updateSuccess: storeState.question.updateSuccess,
});

const mapDispatchToProps = {
  getCandidateAnswers,
  getSections,
  getEntity,
  updateEntity,
  createEntity,
  reset,
};

type StateProps = ReturnType<typeof mapStateToProps>;
type DispatchProps = typeof mapDispatchToProps;

export default connect(mapStateToProps, mapDispatchToProps)(QuestionUpdate);
