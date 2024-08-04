import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { Link, RouteComponentProps } from 'react-router-dom';
import { Button, Row, Col, Label, UncontrolledTooltip } from 'reactstrap';
import { AvFeedback, AvForm, AvGroup, AvInput, AvField } from 'availity-reactstrap-validation';
import { Translate, translate } from 'react-jhipster';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { IRootState } from 'app/shared/reducers';

import { ICandidate } from 'app/shared/model/candidate.model';
import { getEntities as getCandidates } from 'app/entities/candidate/candidate.reducer';
import { getEntity, updateEntity, createEntity, reset } from './candidate-test.reducer';
import { ICandidateTest } from 'app/shared/model/candidate-test.model';
import { convertDateTimeFromServer, convertDateTimeToServer, displayDefaultDateTime } from 'app/shared/util/date-utils';
import { mapIdList } from 'app/shared/util/entity-utils';

export interface ICandidateTestUpdateProps extends StateProps, DispatchProps, RouteComponentProps<{ id: string }> {}

export const CandidateTestUpdate = (props: ICandidateTestUpdateProps) => {
  const [isNew] = useState(!props.match.params || !props.match.params.id);

  const { candidateTestEntity, candidates, loading, updating } = props;

  const handleClose = () => {
    props.history.push('/candidate-test');
  };

  useEffect(() => {
    if (isNew) {
      props.reset();
    } else {
      props.getEntity(props.match.params.id);
    }

    props.getCandidates();
  }, []);

  useEffect(() => {
    if (props.updateSuccess) {
      handleClose();
    }
  }, [props.updateSuccess]);

  const saveEntity = (event, errors, values) => {
    values.testStartDateTime = convertDateTimeToServer(values.testStartDateTime);
    values.testEndDateTime = convertDateTimeToServer(values.testEndDateTime);

    if (errors.length === 0) {
      const entity = {
        ...candidateTestEntity,
        ...values,
        candidate: candidates.find(it => it.id.toString() === values.candidateId.toString()),
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
          <h2 id="assessmentApp.candidateTest.home.createOrEditLabel" data-cy="CandidateTestCreateUpdateHeading">
            <Translate contentKey="assessmentApp.candidateTest.home.createOrEditLabel">Create or edit a CandidateTest</Translate>
          </h2>
        </Col>
      </Row>
      <Row className="justify-content-center">
        <Col md="8">
          {loading ? (
            <p>Loading...</p>
          ) : (
            <AvForm model={isNew ? {} : candidateTestEntity} onSubmit={saveEntity}>
              {!isNew ? (
                <AvGroup>
                  <Label for="candidate-test-id">
                    <Translate contentKey="global.field.id">ID</Translate>
                  </Label>
                  <AvInput id="candidate-test-id" type="text" className="form-control" name="id" required readOnly />
                </AvGroup>
              ) : null}
              <AvGroup>
                <Label id="testCompletionDateLabel" for="candidate-test-testCompletionDate">
                  <Translate contentKey="assessmentApp.candidateTest.testCompletionDate">Test Completion Date</Translate>
                </Label>
                <AvField
                  id="candidate-test-testCompletionDate"
                  data-cy="testCompletionDate"
                  type="date"
                  className="form-control"
                  name="testCompletionDate"
                />
                <UncontrolledTooltip target="testCompletionDateLabel">
                  <Translate contentKey="assessmentApp.candidateTest.help.testCompletionDate" />
                </UncontrolledTooltip>
              </AvGroup>
              <AvGroup>
                <Label id="testScoreLabel" for="candidate-test-testScore">
                  <Translate contentKey="assessmentApp.candidateTest.testScore">Test Score</Translate>
                </Label>
                <AvField id="candidate-test-testScore" data-cy="testScore" type="string" className="form-control" name="testScore" />
                <UncontrolledTooltip target="testScoreLabel">
                  <Translate contentKey="assessmentApp.candidateTest.help.testScore" />
                </UncontrolledTooltip>
              </AvGroup>
              <AvGroup>
                <Label id="testScheduledDateLabel" for="candidate-test-testScheduledDate">
                  <Translate contentKey="assessmentApp.candidateTest.testScheduledDate">Test Scheduled Date</Translate>
                </Label>
                <AvField
                  id="candidate-test-testScheduledDate"
                  data-cy="testScheduledDate"
                  type="date"
                  className="form-control"
                  name="testScheduledDate"
                />
                <UncontrolledTooltip target="testScheduledDateLabel">
                  <Translate contentKey="assessmentApp.candidateTest.help.testScheduledDate" />
                </UncontrolledTooltip>
              </AvGroup>
              <AvGroup>
                <Label id="questionsAttemptedLabel" for="candidate-test-questionsAttempted">
                  <Translate contentKey="assessmentApp.candidateTest.questionsAttempted">Questions Attempted</Translate>
                </Label>
                <AvField id="candidate-test-questionsAttempted" data-cy="questionsAttempted" type="text" name="questionsAttempted" />
                <UncontrolledTooltip target="questionsAttemptedLabel">
                  <Translate contentKey="assessmentApp.candidateTest.help.questionsAttempted" />
                </UncontrolledTooltip>
              </AvGroup>
              <AvGroup>
                <Label id="remainingTimeLabel" for="candidate-test-remainingTime">
                  <Translate contentKey="assessmentApp.candidateTest.remainingTime">Remaining Time</Translate>
                </Label>
                <AvField id="candidate-test-remainingTime" data-cy="remainingTime" type="text" name="remainingTime" />
                <UncontrolledTooltip target="remainingTimeLabel">
                  <Translate contentKey="assessmentApp.candidateTest.help.remainingTime" />
                </UncontrolledTooltip>
              </AvGroup>
              <AvGroup>
                <Label id="testStartDateTimeLabel" for="candidate-test-testStartDateTime">
                  <Translate contentKey="assessmentApp.candidateTest.testStartDateTime">Test Start Date Time</Translate>
                </Label>
                <AvInput
                  id="candidate-test-testStartDateTime"
                  data-cy="testStartDateTime"
                  type="datetime-local"
                  className="form-control"
                  name="testStartDateTime"
                  placeholder={'YYYY-MM-DD HH:mm'}
                  value={isNew ? displayDefaultDateTime() : convertDateTimeFromServer(props.candidateTestEntity.testStartDateTime)}
                />
                <UncontrolledTooltip target="testStartDateTimeLabel">
                  <Translate contentKey="assessmentApp.candidateTest.help.testStartDateTime" />
                </UncontrolledTooltip>
              </AvGroup>
              <AvGroup>
                <Label id="testEndDateTimeLabel" for="candidate-test-testEndDateTime">
                  <Translate contentKey="assessmentApp.candidateTest.testEndDateTime">Test End Date Time</Translate>
                </Label>
                <AvInput
                  id="candidate-test-testEndDateTime"
                  data-cy="testEndDateTime"
                  type="datetime-local"
                  className="form-control"
                  name="testEndDateTime"
                  placeholder={'YYYY-MM-DD HH:mm'}
                  value={isNew ? displayDefaultDateTime() : convertDateTimeFromServer(props.candidateTestEntity.testEndDateTime)}
                />
                <UncontrolledTooltip target="testEndDateTimeLabel">
                  <Translate contentKey="assessmentApp.candidateTest.help.testEndDateTime" />
                </UncontrolledTooltip>
              </AvGroup>
              <AvGroup>
                <Label for="candidate-test-candidate">
                  <Translate contentKey="assessmentApp.candidateTest.candidate">Candidate</Translate>
                </Label>
                <AvInput id="candidate-test-candidate" data-cy="candidate" type="select" className="form-control" name="candidateId">
                  <option value="" key="0" />
                  {candidates
                    ? candidates.map(otherEntity => (
                        <option value={otherEntity.id} key={otherEntity.id}>
                          {otherEntity.id}
                        </option>
                      ))
                    : null}
                </AvInput>
              </AvGroup>
              <Button tag={Link} id="cancel-save" to="/candidate-test" replace color="info">
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
  candidates: storeState.candidate.entities,
  candidateTestEntity: storeState.candidateTest.entity,
  loading: storeState.candidateTest.loading,
  updating: storeState.candidateTest.updating,
  updateSuccess: storeState.candidateTest.updateSuccess,
});

const mapDispatchToProps = {
  getCandidates,
  getEntity,
  updateEntity,
  createEntity,
  reset,
};

type StateProps = ReturnType<typeof mapStateToProps>;
type DispatchProps = typeof mapDispatchToProps;

export default connect(mapStateToProps, mapDispatchToProps)(CandidateTestUpdate);
