import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { Link, RouteComponentProps } from 'react-router-dom';
import { Button, UncontrolledTooltip, Row, Col } from 'reactstrap';
import { Translate } from 'react-jhipster';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { IRootState } from 'app/shared/reducers';
import { getEntity } from './question.reducer';
import { APP_DATE_FORMAT, APP_LOCAL_DATE_FORMAT } from 'app/config/constants';

export interface IQuestionDetailProps extends StateProps, DispatchProps, RouteComponentProps<{ id: string }> {}

export const QuestionDetail = (props: IQuestionDetailProps) => {
  useEffect(() => {
    props.getEntity(props.match.params.id);
  }, []);

  const { questionEntity } = props;
  return (
    <Row>
      <Col md="8">
        <h2 data-cy="questionDetailsHeading">
          <Translate contentKey="assessmentApp.question.detail.title">Question</Translate>
        </h2>
        <dl className="jh-entity-details">
          <dt>
            <span id="id">
              <Translate contentKey="global.field.id">ID</Translate>
            </span>
          </dt>
          <dd>{questionEntity.id}</dd>
          <dt>
            <span id="question">
              <Translate contentKey="assessmentApp.question.question">Question</Translate>
            </span>
            <UncontrolledTooltip target="question">
              <Translate contentKey="assessmentApp.question.help.question" />
            </UncontrolledTooltip>
          </dt>
          <dd>{questionEntity.question}</dd>
          <dt>
            <span id="questionNumber">
              <Translate contentKey="assessmentApp.question.questionNumber">Question Number</Translate>
            </span>
            <UncontrolledTooltip target="questionNumber">
              <Translate contentKey="assessmentApp.question.help.questionNumber" />
            </UncontrolledTooltip>
          </dt>
          <dd>{questionEntity.questionNumber}</dd>
          <dt>
            <span id="a">
              <Translate contentKey="assessmentApp.question.a">A</Translate>
            </span>
            <UncontrolledTooltip target="a">
              <Translate contentKey="assessmentApp.question.help.a" />
            </UncontrolledTooltip>
          </dt>
          <dd>{questionEntity.a}</dd>
          <dt>
            <span id="b">
              <Translate contentKey="assessmentApp.question.b">B</Translate>
            </span>
            <UncontrolledTooltip target="b">
              <Translate contentKey="assessmentApp.question.help.b" />
            </UncontrolledTooltip>
          </dt>
          <dd>{questionEntity.b}</dd>
          <dt>
            <span id="c">
              <Translate contentKey="assessmentApp.question.c">C</Translate>
            </span>
            <UncontrolledTooltip target="c">
              <Translate contentKey="assessmentApp.question.help.c" />
            </UncontrolledTooltip>
          </dt>
          <dd>{questionEntity.c}</dd>
          <dt>
            <span id="d">
              <Translate contentKey="assessmentApp.question.d">D</Translate>
            </span>
            <UncontrolledTooltip target="d">
              <Translate contentKey="assessmentApp.question.help.d" />
            </UncontrolledTooltip>
          </dt>
          <dd>{questionEntity.d}</dd>
          <dt>
            <span id="e">
              <Translate contentKey="assessmentApp.question.e">E</Translate>
            </span>
            <UncontrolledTooltip target="e">
              <Translate contentKey="assessmentApp.question.help.e" />
            </UncontrolledTooltip>
          </dt>
          <dd>{questionEntity.e}</dd>
          <dt>
            <span id="answer">
              <Translate contentKey="assessmentApp.question.answer">Answer</Translate>
            </span>
            <UncontrolledTooltip target="answer">
              <Translate contentKey="assessmentApp.question.help.answer" />
            </UncontrolledTooltip>
          </dt>
          <dd>{questionEntity.answer}</dd>
          <dt>
            <Translate contentKey="assessmentApp.question.section">Section</Translate>
          </dt>
          <dd>{questionEntity.section ? questionEntity.section.id : ''}</dd>
        </dl>
        <Button tag={Link} to="/question" replace color="info" data-cy="entityDetailsBackButton">
          <FontAwesomeIcon icon="arrow-left" />{' '}
          <span className="d-none d-md-inline">
            <Translate contentKey="entity.action.back">Back</Translate>
          </span>
        </Button>
        &nbsp;
        <Button tag={Link} to={`/question/${questionEntity.id}/edit`} replace color="primary">
          <FontAwesomeIcon icon="pencil-alt" />{' '}
          <span className="d-none d-md-inline">
            <Translate contentKey="entity.action.edit">Edit</Translate>
          </span>
        </Button>
      </Col>
    </Row>
  );
};

const mapStateToProps = ({ question }: IRootState) => ({
  questionEntity: question.entity,
});

const mapDispatchToProps = { getEntity };

type StateProps = ReturnType<typeof mapStateToProps>;
type DispatchProps = typeof mapDispatchToProps;

export default connect(mapStateToProps, mapDispatchToProps)(QuestionDetail);
