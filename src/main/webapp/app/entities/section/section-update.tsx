import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { Link, RouteComponentProps } from 'react-router-dom';
import { Button, Row, Col, Label, UncontrolledTooltip } from 'reactstrap';
import { AvFeedback, AvForm, AvGroup, AvInput, AvField } from 'availity-reactstrap-validation';
import { Translate, translate } from 'react-jhipster';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { IRootState } from 'app/shared/reducers';

import { getEntity, updateEntity, createEntity, reset } from './section.reducer';
import { ISection } from 'app/shared/model/section.model';
import { convertDateTimeFromServer, convertDateTimeToServer, displayDefaultDateTime } from 'app/shared/util/date-utils';
import { mapIdList } from 'app/shared/util/entity-utils';

export interface ISectionUpdateProps extends StateProps, DispatchProps, RouteComponentProps<{ id: string }> {}

export const SectionUpdate = (props: ISectionUpdateProps) => {
  const [isNew] = useState(!props.match.params || !props.match.params.id);

  const { sectionEntity, loading, updating } = props;

  const handleClose = () => {
    props.history.push('/section');
  };

  useEffect(() => {
    if (isNew) {
      props.reset();
    } else {
      props.getEntity(props.match.params.id);
    }
  }, []);

  useEffect(() => {
    if (props.updateSuccess) {
      handleClose();
    }
  }, [props.updateSuccess]);

  const saveEntity = (event, errors, values) => {
    if (errors.length === 0) {
      const entity = {
        ...sectionEntity,
        ...values,
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
          <h2 id="assessmentApp.section.home.createOrEditLabel" data-cy="SectionCreateUpdateHeading">
            <Translate contentKey="assessmentApp.section.home.createOrEditLabel">Create or edit a Section</Translate>
          </h2>
        </Col>
      </Row>
      <Row className="justify-content-center">
        <Col md="8">
          {loading ? (
            <p>Loading...</p>
          ) : (
            <AvForm model={isNew ? {} : sectionEntity} onSubmit={saveEntity}>
              {!isNew ? (
                <AvGroup>
                  <Label for="section-id">
                    <Translate contentKey="global.field.id">ID</Translate>
                  </Label>
                  <AvInput id="section-id" type="text" className="form-control" name="id" required readOnly />
                </AvGroup>
              ) : null}
              <AvGroup>
                <Label id="sectionQuestionLabel" for="section-sectionQuestion">
                  <Translate contentKey="assessmentApp.section.sectionQuestion">Section Question</Translate>
                </Label>
                <AvField id="section-sectionQuestion" data-cy="sectionQuestion" type="text" name="sectionQuestion" />
                <UncontrolledTooltip target="sectionQuestionLabel">
                  <Translate contentKey="assessmentApp.section.help.sectionQuestion" />
                </UncontrolledTooltip>
              </AvGroup>
              <AvGroup>
                <Label id="sectionNumberHeadingLabel" for="section-sectionNumberHeading">
                  <Translate contentKey="assessmentApp.section.sectionNumberHeading">Section Number Heading</Translate>
                </Label>
                <AvField id="section-sectionNumberHeading" data-cy="sectionNumberHeading" type="text" name="sectionNumberHeading" />
                <UncontrolledTooltip target="sectionNumberHeadingLabel">
                  <Translate contentKey="assessmentApp.section.help.sectionNumberHeading" />
                </UncontrolledTooltip>
              </AvGroup>
              <AvGroup>
                <Label id="sectionNumberLabel" for="section-sectionNumber">
                  <Translate contentKey="assessmentApp.section.sectionNumber">Section Number</Translate>
                </Label>
                <AvField id="section-sectionNumber" data-cy="sectionNumber" type="string" className="form-control" name="sectionNumber" />
                <UncontrolledTooltip target="sectionNumberLabel">
                  <Translate contentKey="assessmentApp.section.help.sectionNumber" />
                </UncontrolledTooltip>
              </AvGroup>
              <Button tag={Link} id="cancel-save" to="/section" replace color="info">
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
  sectionEntity: storeState.section.entity,
  loading: storeState.section.loading,
  updating: storeState.section.updating,
  updateSuccess: storeState.section.updateSuccess,
});

const mapDispatchToProps = {
  getEntity,
  updateEntity,
  createEntity,
  reset,
};

type StateProps = ReturnType<typeof mapStateToProps>;
type DispatchProps = typeof mapDispatchToProps;

export default connect(mapStateToProps, mapDispatchToProps)(SectionUpdate);
