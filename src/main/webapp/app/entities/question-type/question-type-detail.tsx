import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { Link, RouteComponentProps } from 'react-router-dom';
import { Button, UncontrolledTooltip, Row, Col } from 'reactstrap';
import { Translate } from 'react-jhipster';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { IRootState } from 'app/shared/reducers';
import { getEntity } from './question-type.reducer';
import { APP_DATE_FORMAT, APP_LOCAL_DATE_FORMAT } from 'app/config/constants';

export interface IQuestionTypeDetailProps extends StateProps, DispatchProps, RouteComponentProps<{ id: string }> {}

export const QuestionTypeDetail = (props: IQuestionTypeDetailProps) => {
  useEffect(() => {
    props.getEntity(props.match.params.id);
  }, []);

  const { questionTypeEntity } = props;
  return (
    <Row>
      <Col md="8">
        <h2 data-cy="questionTypeDetailsHeading">
          <Translate contentKey="assessmentApp.questionType.detail.title">QuestionType</Translate>
        </h2>
        <dl className="jh-entity-details">
          <dt>
            <span id="id">
              <Translate contentKey="global.field.id">ID</Translate>
            </span>
          </dt>
          <dd>{questionTypeEntity.id}</dd>
          <dt>
            <span id="typeKey">
              <Translate contentKey="assessmentApp.questionType.typeKey">Type Key</Translate>
            </span>
            <UncontrolledTooltip target="typeKey">
              <Translate contentKey="assessmentApp.questionType.help.typeKey" />
            </UncontrolledTooltip>
          </dt>
          <dd>{questionTypeEntity.typeKey}</dd>
        </dl>
        <Button tag={Link} to="/question-type" replace color="info" data-cy="entityDetailsBackButton">
          <FontAwesomeIcon icon="arrow-left" />{' '}
          <span className="d-none d-md-inline">
            <Translate contentKey="entity.action.back">Back</Translate>
          </span>
        </Button>
        &nbsp;
        <Button tag={Link} to={`/question-type/${questionTypeEntity.id}/edit`} replace color="primary">
          <FontAwesomeIcon icon="pencil-alt" />{' '}
          <span className="d-none d-md-inline">
            <Translate contentKey="entity.action.edit">Edit</Translate>
          </span>
        </Button>
      </Col>
    </Row>
  );
};

const mapStateToProps = ({ questionType }: IRootState) => ({
  questionTypeEntity: questionType.entity,
});

const mapDispatchToProps = { getEntity };

type StateProps = ReturnType<typeof mapStateToProps>;
type DispatchProps = typeof mapDispatchToProps;

export default connect(mapStateToProps, mapDispatchToProps)(QuestionTypeDetail);
