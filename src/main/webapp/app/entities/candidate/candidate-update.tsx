import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { Link, RouteComponentProps } from 'react-router-dom';
import { Button, Row, Col, Label, UncontrolledTooltip } from 'reactstrap';
import { AvFeedback, AvForm, AvGroup, AvInput, AvField } from 'availity-reactstrap-validation';
import { Translate, translate } from 'react-jhipster';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { IRootState } from 'app/shared/reducers';

import { IUser } from 'app/shared/model/user.model';
import { getUsers } from 'app/modules/administration/user-management/user-management.reducer';
import { getEntity, updateEntity, createEntity, reset } from './candidate.reducer';
import { ICandidate } from 'app/shared/model/candidate.model';
import { convertDateTimeFromServer, convertDateTimeToServer, displayDefaultDateTime } from 'app/shared/util/date-utils';
import { mapIdList } from 'app/shared/util/entity-utils';

export interface ICandidateUpdateProps extends StateProps, DispatchProps, RouteComponentProps<{ id: string }> {}

export const CandidateUpdate = (props: ICandidateUpdateProps) => {
  const [isNew] = useState(!props.match.params || !props.match.params.id);

  const { candidateEntity, users, loading, updating } = props;

  const handleClose = () => {
    props.history.push('/candidate');
  };

  useEffect(() => {
    if (isNew) {
      props.reset();
    } else {
      props.getEntity(props.match.params.id);
    }

    props.getUsers();
  }, []);

  useEffect(() => {
    if (props.updateSuccess) {
      handleClose();
    }
  }, [props.updateSuccess]);

  const saveEntity = (event, errors, values) => {
    if (errors.length === 0) {
      const entity = {
        ...candidateEntity,
        ...values,
        user: users.find(it => it.id.toString() === values.userId.toString()),
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
          <h2 id="assessmentApp.candidate.home.createOrEditLabel" data-cy="CandidateCreateUpdateHeading">
            <Translate contentKey="assessmentApp.candidate.home.createOrEditLabel">Create or edit a Candidate</Translate>
          </h2>
        </Col>
      </Row>
      <Row className="justify-content-center">
        <Col md="8">
          {loading ? (
            <p>Loading...</p>
          ) : (
            <AvForm model={isNew ? {} : candidateEntity} onSubmit={saveEntity}>
              {!isNew ? (
                <AvGroup>
                  <Label for="candidate-id">
                    <Translate contentKey="global.field.id">ID</Translate>
                  </Label>
                  <AvInput id="candidate-id" type="text" className="form-control" name="id" required readOnly />
                </AvGroup>
              ) : null}
              <AvGroup>
                <Label id="firstNameLabel" for="candidate-firstName">
                  <Translate contentKey="assessmentApp.candidate.firstName">First Name</Translate>
                </Label>
                <AvField id="candidate-firstName" data-cy="firstName" type="text" name="firstName" />
                <UncontrolledTooltip target="firstNameLabel">
                  <Translate contentKey="assessmentApp.candidate.help.firstName" />
                </UncontrolledTooltip>
              </AvGroup>
              <AvGroup>
                <Label id="lastNameLabel" for="candidate-lastName">
                  <Translate contentKey="assessmentApp.candidate.lastName">Last Name</Translate>
                </Label>
                <AvField id="candidate-lastName" data-cy="lastName" type="text" name="lastName" />
                <UncontrolledTooltip target="lastNameLabel">
                  <Translate contentKey="assessmentApp.candidate.help.lastName" />
                </UncontrolledTooltip>
              </AvGroup>
              <AvGroup>
                <Label id="emailLabel" for="candidate-email">
                  <Translate contentKey="assessmentApp.candidate.email">Email</Translate>
                </Label>
                <AvField id="candidate-email" data-cy="email" type="text" name="email" />
                <UncontrolledTooltip target="emailLabel">
                  <Translate contentKey="assessmentApp.candidate.help.email" />
                </UncontrolledTooltip>
              </AvGroup>
              <AvGroup>
                <Label id="latestTestScoreLabel" for="candidate-latestTestScore">
                  <Translate contentKey="assessmentApp.candidate.latestTestScore">Latest Test Score</Translate>
                </Label>
                <AvField
                  id="candidate-latestTestScore"
                  data-cy="latestTestScore"
                  type="string"
                  className="form-control"
                  name="latestTestScore"
                />
                <UncontrolledTooltip target="latestTestScoreLabel">
                  <Translate contentKey="assessmentApp.candidate.help.latestTestScore" />
                </UncontrolledTooltip>
              </AvGroup>
              <AvGroup>
                <Label id="lastTestDateLabel" for="candidate-lastTestDate">
                  <Translate contentKey="assessmentApp.candidate.lastTestDate">Last Test Date</Translate>
                </Label>
                <AvField id="candidate-lastTestDate" data-cy="lastTestDate" type="date" className="form-control" name="lastTestDate" />
                <UncontrolledTooltip target="lastTestDateLabel">
                  <Translate contentKey="assessmentApp.candidate.help.lastTestDate" />
                </UncontrolledTooltip>
              </AvGroup>
              <AvGroup>
                <Label id="registrationDateLabel" for="candidate-registrationDate">
                  <Translate contentKey="assessmentApp.candidate.registrationDate">Registration Date</Translate>
                </Label>
                <AvField
                  id="candidate-registrationDate"
                  data-cy="registrationDate"
                  type="date"
                  className="form-control"
                  name="registrationDate"
                />
                <UncontrolledTooltip target="registrationDateLabel">
                  <Translate contentKey="assessmentApp.candidate.help.registrationDate" />
                </UncontrolledTooltip>
              </AvGroup>
              <AvGroup>
                <Label id="registrationCountLabel" for="candidate-registrationCount">
                  <Translate contentKey="assessmentApp.candidate.registrationCount">Registration Count</Translate>
                </Label>
                <AvField
                  id="candidate-registrationCount"
                  data-cy="registrationCount"
                  type="string"
                  className="form-control"
                  name="registrationCount"
                />
                <UncontrolledTooltip target="registrationCountLabel">
                  <Translate contentKey="assessmentApp.candidate.help.registrationCount" />
                </UncontrolledTooltip>
              </AvGroup>
              <AvGroup>
                <Label id="testTakenCountLabel" for="candidate-testTakenCount">
                  <Translate contentKey="assessmentApp.candidate.testTakenCount">Test Taken Count</Translate>
                </Label>
                <AvField
                  id="candidate-testTakenCount"
                  data-cy="testTakenCount"
                  type="string"
                  className="form-control"
                  name="testTakenCount"
                />
                <UncontrolledTooltip target="testTakenCountLabel">
                  <Translate contentKey="assessmentApp.candidate.help.testTakenCount" />
                </UncontrolledTooltip>
              </AvGroup>
              <AvGroup check>
                <Label id="canTakeTestLabel">
                  <AvInput
                    id="candidate-canTakeTest"
                    data-cy="canTakeTest"
                    type="checkbox"
                    className="form-check-input"
                    name="canTakeTest"
                  />
                  <Translate contentKey="assessmentApp.candidate.canTakeTest">Can Take Test</Translate>
                </Label>
                <UncontrolledTooltip target="canTakeTestLabel">
                  <Translate contentKey="assessmentApp.candidate.help.canTakeTest" />
                </UncontrolledTooltip>
              </AvGroup>
              <AvGroup>
                <Label for="candidate-user">
                  <Translate contentKey="assessmentApp.candidate.user">User</Translate>
                </Label>
                <AvInput id="candidate-user" data-cy="user" type="select" className="form-control" name="userId">
                  <option value="" key="0" />
                  {users
                    ? users.map(otherEntity => (
                        <option value={otherEntity.id} key={otherEntity.id}>
                          {otherEntity.id}
                        </option>
                      ))
                    : null}
                </AvInput>
              </AvGroup>
              <Button tag={Link} id="cancel-save" to="/candidate" replace color="info">
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
  users: storeState.userManagement.users,
  candidateEntity: storeState.candidate.entity,
  loading: storeState.candidate.loading,
  updating: storeState.candidate.updating,
  updateSuccess: storeState.candidate.updateSuccess,
});

const mapDispatchToProps = {
  getUsers,
  getEntity,
  updateEntity,
  createEntity,
  reset,
};

type StateProps = ReturnType<typeof mapStateToProps>;
type DispatchProps = typeof mapDispatchToProps;

export default connect(mapStateToProps, mapDispatchToProps)(CandidateUpdate);
