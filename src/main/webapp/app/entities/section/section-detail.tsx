import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { Link, RouteComponentProps } from 'react-router-dom';
import { Button, UncontrolledTooltip, Row, Col } from 'reactstrap';
import { Translate } from 'react-jhipster';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { IRootState } from 'app/shared/reducers';
import { getEntity } from './section.reducer';
import { APP_DATE_FORMAT, APP_LOCAL_DATE_FORMAT } from 'app/config/constants';

export interface ISectionDetailProps extends StateProps, DispatchProps, RouteComponentProps<{ id: string }> {}

export const SectionDetail = (props: ISectionDetailProps) => {
  useEffect(() => {
    props.getEntity(props.match.params.id);
  }, []);

  const { sectionEntity } = props;
  return (
    <Row>
      <Col md="8">
        <h2 data-cy="sectionDetailsHeading">
          <Translate contentKey="assessmentApp.section.detail.title">Section</Translate>
        </h2>
        <dl className="jh-entity-details">
          <dt>
            <span id="id">
              <Translate contentKey="global.field.id">ID</Translate>
            </span>
          </dt>
          <dd>{sectionEntity.id}</dd>
          <dt>
            <span id="sectionQuestion">
              <Translate contentKey="assessmentApp.section.sectionQuestion">Section Question</Translate>
            </span>
            <UncontrolledTooltip target="sectionQuestion">
              <Translate contentKey="assessmentApp.section.help.sectionQuestion" />
            </UncontrolledTooltip>
          </dt>
          <dd>{sectionEntity.sectionQuestion}</dd>
          <dt>
            <span id="sectionNumberHeading">
              <Translate contentKey="assessmentApp.section.sectionNumberHeading">Section Number Heading</Translate>
            </span>
            <UncontrolledTooltip target="sectionNumberHeading">
              <Translate contentKey="assessmentApp.section.help.sectionNumberHeading" />
            </UncontrolledTooltip>
          </dt>
          <dd>{sectionEntity.sectionNumberHeading}</dd>
          <dt>
            <span id="sectionNumber">
              <Translate contentKey="assessmentApp.section.sectionNumber">Section Number</Translate>
            </span>
            <UncontrolledTooltip target="sectionNumber">
              <Translate contentKey="assessmentApp.section.help.sectionNumber" />
            </UncontrolledTooltip>
          </dt>
          <dd>{sectionEntity.sectionNumber}</dd>
        </dl>
        <Button tag={Link} to="/section" replace color="info" data-cy="entityDetailsBackButton">
          <FontAwesomeIcon icon="arrow-left" />{' '}
          <span className="d-none d-md-inline">
            <Translate contentKey="entity.action.back">Back</Translate>
          </span>
        </Button>
        &nbsp;
        <Button tag={Link} to={`/section/${sectionEntity.id}/edit`} replace color="primary">
          <FontAwesomeIcon icon="pencil-alt" />{' '}
          <span className="d-none d-md-inline">
            <Translate contentKey="entity.action.edit">Edit</Translate>
          </span>
        </Button>
      </Col>
    </Row>
  );
};

const mapStateToProps = ({ section }: IRootState) => ({
  sectionEntity: section.entity,
});

const mapDispatchToProps = { getEntity };

type StateProps = ReturnType<typeof mapStateToProps>;
type DispatchProps = typeof mapDispatchToProps;

export default connect(mapStateToProps, mapDispatchToProps)(SectionDetail);
