// removed th id primary key
import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { Link, RouteComponentProps } from 'react-router-dom';
import { Button, Col, Row, Table } from 'reactstrap';
import { Translate } from 'react-jhipster';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { IRootState } from 'app/shared/reducers';
import { getEntities } from './question.reducer';
import { IQuestion } from 'app/shared/model/question.model';
import { APP_DATE_FORMAT, APP_LOCAL_DATE_FORMAT } from 'app/config/constants';

export interface IQuestionProps extends StateProps, DispatchProps, RouteComponentProps<{ url: string }> {}

export const Question = (props: IQuestionProps) => {
  useEffect(() => {
    props.getEntities();
  }, []);

  const handleSyncList = () => {
    props.getEntities();
  };

  const { questionList, match, loading } = props;
  return (
    <div>
      <h2 id="question-heading" data-cy="QuestionHeading">
        <Translate contentKey="assessmentApp.question.home.title">Questions</Translate>
        <div className="d-flex justify-content-end">
          <Button className="mr-2" color="info" onClick={handleSyncList} disabled={loading}>
            <FontAwesomeIcon icon="sync" spin={loading} />{' '}
            <Translate contentKey="assessmentApp.question.home.refreshListLabel">Refresh List</Translate>
          </Button>
          <Link to={`${match.url}/new`} className="btn btn-primary jh-create-entity" id="jh-create-entity" data-cy="entityCreateButton">
            <FontAwesomeIcon icon="plus" />
            &nbsp;
            <Translate contentKey="assessmentApp.question.home.createLabel">Create new Question</Translate>
          </Link>
        </div>
      </h2>
      <div className="table-responsive">
        {questionList && questionList.length > 0 ? (
          <Table responsive>
            <thead>
              <tr>
                <th>
                  <Translate contentKey="assessmentApp.question.id">ID</Translate>
                </th>
                <th>
                  <Translate contentKey="assessmentApp.question.question">Question</Translate>
                </th>
                <th>
                  <Translate contentKey="assessmentApp.question.questionNumber">Question Number</Translate>
                </th>
                <th>
                  <Translate contentKey="assessmentApp.question.a">A</Translate>
                </th>
                <th>
                  <Translate contentKey="assessmentApp.question.b">B</Translate>
                </th>
                <th>
                  <Translate contentKey="assessmentApp.question.c">C</Translate>
                </th>
                <th>
                  <Translate contentKey="assessmentApp.question.d">D</Translate>
                </th>
                <th>
                  <Translate contentKey="assessmentApp.question.e">E</Translate>
                </th>
                <th>
                  <Translate contentKey="assessmentApp.question.answer">Answer</Translate>
                </th>
                <th>
                  <Translate contentKey="assessmentApp.question.section">Section</Translate>
                </th>
                <th />
              </tr>
            </thead>
            <tbody>
              {questionList.map((question, i) => (
                <tr key={`entity-${i}`} data-cy="entityTable">
                  <td>
                    <Button tag={Link} to={`${match.url}/${question.id}`} color="link" size="sm">
                      {question.id}
                    </Button>
                  </td>
                  <td>{question.question}</td>
                  <td>{question.questionNumber}</td>
                  <td>{question.a}</td>
                  <td>{question.b}</td>
                  <td>{question.c}</td>
                  <td>{question.d}</td>
                  <td>{question.e}</td>
                  <td>{question.answer}</td>
                  <td>{question.section ? <Link to={`section/${question.section.id}`}>{question.section.id}</Link> : ''}</td>
                  <td className="text-right">
                    <div className="btn-group flex-btn-group-container">
                      <Button tag={Link} to={`${match.url}/${question.id}`} color="info" size="sm" data-cy="entityDetailsButton">
                        <FontAwesomeIcon icon="eye" />{' '}
                        <span className="d-none d-md-inline">
                          <Translate contentKey="entity.action.view">View</Translate>
                        </span>
                      </Button>
                      <Button tag={Link} to={`${match.url}/${question.id}/edit`} color="primary" size="sm" data-cy="entityEditButton">
                        <FontAwesomeIcon icon="pencil-alt" />{' '}
                        <span className="d-none d-md-inline">
                          <Translate contentKey="entity.action.edit">Edit</Translate>
                        </span>
                      </Button>
                      <Button tag={Link} to={`${match.url}/${question.id}/delete`} color="danger" size="sm" data-cy="entityDeleteButton">
                        <FontAwesomeIcon icon="trash" />{' '}
                        <span className="d-none d-md-inline">
                          <Translate contentKey="entity.action.delete">Delete</Translate>
                        </span>
                      </Button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </Table>
        ) : (
          !loading && (
            <div className="alert alert-warning">
              <Translate contentKey="assessmentApp.question.home.notFound">No Questions found</Translate>
            </div>
          )
        )}
      </div>
    </div>
  );
};

const mapStateToProps = ({ question }: IRootState) => ({
  questionList: question.entities,
  loading: question.loading,
});

const mapDispatchToProps = {
  getEntities,
};

type StateProps = ReturnType<typeof mapStateToProps>;
type DispatchProps = typeof mapDispatchToProps;

export default connect(mapStateToProps, mapDispatchToProps)(Question);
