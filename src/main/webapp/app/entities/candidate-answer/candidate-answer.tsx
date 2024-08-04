// removed th id primary key
import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { Link, RouteComponentProps } from 'react-router-dom';
import { Button, Col, Row, Table } from 'reactstrap';
import { Translate } from 'react-jhipster';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { IRootState } from 'app/shared/reducers';
import { getEntities } from './candidate-answer.reducer';
import { ICandidateAnswer } from 'app/shared/model/candidate-answer.model';
import { APP_DATE_FORMAT, APP_LOCAL_DATE_FORMAT } from 'app/config/constants';

export interface ICandidateAnswerProps extends StateProps, DispatchProps, RouteComponentProps<{ url: string }> {}

export const CandidateAnswer = (props: ICandidateAnswerProps) => {
  useEffect(() => {
    props.getEntities();
  }, []);

  const handleSyncList = () => {
    props.getEntities();
  };

  const { candidateAnswerList, match, loading } = props;
  return (
    <div>
      <h2 id="candidate-answer-heading" data-cy="CandidateAnswerHeading">
        <Translate contentKey="assessmentApp.candidateAnswer.home.title">Candidate Answers</Translate>
        <div className="d-flex justify-content-end">
          <Button className="mr-2" color="info" onClick={handleSyncList} disabled={loading}>
            <FontAwesomeIcon icon="sync" spin={loading} />{' '}
            <Translate contentKey="assessmentApp.candidateAnswer.home.refreshListLabel">Refresh List</Translate>
          </Button>
          <Link to={`${match.url}/new`} className="btn btn-primary jh-create-entity" id="jh-create-entity" data-cy="entityCreateButton">
            <FontAwesomeIcon icon="plus" />
            &nbsp;
            <Translate contentKey="assessmentApp.candidateAnswer.home.createLabel">Create new Candidate Answer</Translate>
          </Link>
        </div>
      </h2>
      <div className="table-responsive">
        {candidateAnswerList && candidateAnswerList.length > 0 ? (
          <Table responsive>
            <thead>
              <tr>
                <th>
                  <Translate contentKey="assessmentApp.candidateAnswer.id">ID</Translate>
                </th>
                <th>
                  <Translate contentKey="assessmentApp.candidateAnswer.answer">Answer</Translate>
                </th>
                <th>
                  <Translate contentKey="assessmentApp.candidateAnswer.question">Question</Translate>
                </th>
                <th>
                  <Translate contentKey="assessmentApp.candidateAnswer.candidateTest">Candidate Test</Translate>
                </th>
                <th />
              </tr>
            </thead>
            <tbody>
              {candidateAnswerList.map((candidateAnswer, i) => (
                <tr key={`entity-${i}`} data-cy="entityTable">
                  <td>
                    <Button tag={Link} to={`${match.url}/${candidateAnswer.id}`} color="link" size="sm">
                      {candidateAnswer.id}
                    </Button>
                  </td>
                  <td>{candidateAnswer.answer}</td>
                  <td>
                    {candidateAnswer.question ? (
                      <Link to={`question/${candidateAnswer.question.id}`}>{candidateAnswer.question.id}</Link>
                    ) : (
                      ''
                    )}
                  </td>
                  <td>
                    {candidateAnswer.candidateTest ? (
                      <Link to={`candidate-test/${candidateAnswer.candidateTest.id}`}>{candidateAnswer.candidateTest.id}</Link>
                    ) : (
                      ''
                    )}
                  </td>
                  <td className="text-right">
                    <div className="btn-group flex-btn-group-container">
                      <Button tag={Link} to={`${match.url}/${candidateAnswer.id}`} color="info" size="sm" data-cy="entityDetailsButton">
                        <FontAwesomeIcon icon="eye" />{' '}
                        <span className="d-none d-md-inline">
                          <Translate contentKey="entity.action.view">View</Translate>
                        </span>
                      </Button>
                      <Button
                        tag={Link}
                        to={`${match.url}/${candidateAnswer.id}/edit`}
                        color="primary"
                        size="sm"
                        data-cy="entityEditButton"
                      >
                        <FontAwesomeIcon icon="pencil-alt" />{' '}
                        <span className="d-none d-md-inline">
                          <Translate contentKey="entity.action.edit">Edit</Translate>
                        </span>
                      </Button>
                      <Button
                        tag={Link}
                        to={`${match.url}/${candidateAnswer.id}/delete`}
                        color="danger"
                        size="sm"
                        data-cy="entityDeleteButton"
                      >
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
              <Translate contentKey="assessmentApp.candidateAnswer.home.notFound">No Candidate Answers found</Translate>
            </div>
          )
        )}
      </div>
    </div>
  );
};

const mapStateToProps = ({ candidateAnswer }: IRootState) => ({
  candidateAnswerList: candidateAnswer.entities,
  loading: candidateAnswer.loading,
});

const mapDispatchToProps = {
  getEntities,
};

type StateProps = ReturnType<typeof mapStateToProps>;
type DispatchProps = typeof mapDispatchToProps;

export default connect(mapStateToProps, mapDispatchToProps)(CandidateAnswer);
