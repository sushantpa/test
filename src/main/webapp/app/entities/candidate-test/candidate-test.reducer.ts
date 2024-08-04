import axios from 'axios';
import { ICrudGetAction, ICrudGetAllAction, ICrudPutAction, ICrudDeleteAction } from 'react-jhipster';

import { cleanEntity } from 'app/shared/util/entity-utils';
import { REQUEST, SUCCESS, FAILURE } from 'app/shared/reducers/action-type.util';

import { ICandidateTest, defaultValue } from 'app/shared/model/candidate-test.model';

export const ACTION_TYPES = {
  FETCH_CANDIDATETEST_LIST: 'candidateTest/FETCH_CANDIDATETEST_LIST',
  FETCH_CANDIDATETEST: 'candidateTest/FETCH_CANDIDATETEST',
  CREATE_CANDIDATETEST: 'candidateTest/CREATE_CANDIDATETEST',
  UPDATE_CANDIDATETEST: 'candidateTest/UPDATE_CANDIDATETEST',
  SUBMIT_ASSESSMENT: 'candidateTest/SUBMIT_ASSESSMENT',
  START_ASSESSMENT: 'candidateTest/START_ASSESSMENT',
  GET_ASSESSMENT_TIME: 'candidateTest/GET_ASSESSMENT_TIME',
  PARTIAL_UPDATE_CANDIDATETEST: 'candidateTest/PARTIAL_UPDATE_CANDIDATETEST',
  DELETE_CANDIDATETEST: 'candidateTest/DELETE_CANDIDATETEST',
  RESET: 'candidateTest/RESET',
};

const initialState = {
  loading: false,
  errorMessage: null,
  entities: [] as ReadonlyArray<ICandidateTest>,
  entity: defaultValue,
  updating: false,
  updateSuccess: false,
  remainingTime: 0,
  assessmentStarted: false,
};

export type CandidateTestState = Readonly<typeof initialState>;

// Reducer

export default (state: CandidateTestState = initialState, action): CandidateTestState => {
  switch (action.type) {
    case REQUEST(ACTION_TYPES.FETCH_CANDIDATETEST_LIST):
    case REQUEST(ACTION_TYPES.FETCH_CANDIDATETEST):
    case REQUEST(ACTION_TYPES.GET_ASSESSMENT_TIME):
      return {
        ...state,
        errorMessage: null,
        updateSuccess: false,
        loading: true,
      };
    case REQUEST(ACTION_TYPES.CREATE_CANDIDATETEST):
    case REQUEST(ACTION_TYPES.UPDATE_CANDIDATETEST):
    case REQUEST(ACTION_TYPES.DELETE_CANDIDATETEST):
    case REQUEST(ACTION_TYPES.PARTIAL_UPDATE_CANDIDATETEST):
    case REQUEST(ACTION_TYPES.START_ASSESSMENT):
    case REQUEST(ACTION_TYPES.SUBMIT_ASSESSMENT):
      return {
        ...state,
        errorMessage: null,
        updateSuccess: false,
        updating: true,
      };
    case FAILURE(ACTION_TYPES.FETCH_CANDIDATETEST_LIST):
    case FAILURE(ACTION_TYPES.FETCH_CANDIDATETEST):
    case FAILURE(ACTION_TYPES.CREATE_CANDIDATETEST):
    case FAILURE(ACTION_TYPES.UPDATE_CANDIDATETEST):
    case FAILURE(ACTION_TYPES.PARTIAL_UPDATE_CANDIDATETEST):
    case FAILURE(ACTION_TYPES.DELETE_CANDIDATETEST):
    case FAILURE(ACTION_TYPES.START_ASSESSMENT):
    case FAILURE(ACTION_TYPES.GET_ASSESSMENT_TIME):
    case FAILURE(ACTION_TYPES.SUBMIT_ASSESSMENT):
      return {
        ...state,
        loading: false,
        updating: false,
        updateSuccess: false,
        errorMessage: action.payload,
      };
    case SUCCESS(ACTION_TYPES.FETCH_CANDIDATETEST_LIST):
      return {
        ...state,
        loading: false,
        entities: action.payload.data,
      };
    case SUCCESS(ACTION_TYPES.FETCH_CANDIDATETEST):
      return {
        ...state,
        loading: false,
        entity: action.payload.data,
      };
    case SUCCESS(ACTION_TYPES.CREATE_CANDIDATETEST):
    case SUCCESS(ACTION_TYPES.UPDATE_CANDIDATETEST):
    case SUCCESS(ACTION_TYPES.PARTIAL_UPDATE_CANDIDATETEST):
      return {
        ...state,
        updating: false,
        updateSuccess: true,
        entity: action.payload.data,
      };

    case SUCCESS(ACTION_TYPES.SUBMIT_ASSESSMENT):
      return {
        ...state,
        updating: false,
        updateSuccess: true,
      };
    case SUCCESS(ACTION_TYPES.DELETE_CANDIDATETEST):
      return {
        ...state,
        updating: false,
        updateSuccess: true,
        entity: {},
      };
    case SUCCESS(ACTION_TYPES.GET_ASSESSMENT_TIME):
      return {
        ...state,
        loading: false,
        remainingTime: action.payload.data,
      };
    case SUCCESS(ACTION_TYPES.START_ASSESSMENT):
      return {
        ...state,
        loading: false,
        assessmentStarted: true,
      };
    case ACTION_TYPES.RESET:
      return {
        ...initialState,
      };
    default:
      return state;
  }
};

const apiUrl = 'api/candidate-tests';

// Actions

export const getEntities: ICrudGetAllAction<ICandidateTest> = (page, size, sort) => ({
  type: ACTION_TYPES.FETCH_CANDIDATETEST_LIST,
  payload: axios.get<ICandidateTest>(`${apiUrl}?cacheBuster=${new Date().getTime()}`),
});

export const getEntity: ICrudGetAction<ICandidateTest> = id => {
  const requestUrl = `${apiUrl}/${id}`;
  return {
    type: ACTION_TYPES.FETCH_CANDIDATETEST,
    payload: axios.get<ICandidateTest>(requestUrl),
  };
};

export const createEntity: ICrudPutAction<ICandidateTest> = entity => async dispatch => {
  const result = await dispatch({
    type: ACTION_TYPES.CREATE_CANDIDATETEST,
    payload: axios.post(apiUrl, cleanEntity(entity)),
  });
  dispatch(getEntities());
  return result;
};

export const updateEntity: ICrudPutAction<ICandidateTest> = entity => async dispatch => {
  const result = await dispatch({
    type: ACTION_TYPES.UPDATE_CANDIDATETEST,
    payload: axios.put(`${apiUrl}/${entity.id}`, cleanEntity(entity)),
  });
  return result;
};

export const startAssessment: ICrudPutAction<ICandidateTest> = id => async dispatch => {
  const result = await dispatch({
    type: ACTION_TYPES.START_ASSESSMENT,
    payload: axios.put(`${apiUrl}/${id}/start`),
  });
  return result;
};

export const getRemainingTime = id => {
  const requestUrl = `${apiUrl}/${id}/remaining-time`;
  return {
    type: ACTION_TYPES.GET_ASSESSMENT_TIME,
    payload: axios.get(requestUrl),
  };
};

export const submitAssessment = (answers, id) => async dispatch => {
  const result = await dispatch({
    type: ACTION_TYPES.SUBMIT_ASSESSMENT,
    payload: axios.put(`${apiUrl}/${id}/submit`, answers),
  });
  return result;
};

export const partialUpdate: ICrudPutAction<ICandidateTest> = entity => async dispatch => {
  const result = await dispatch({
    type: ACTION_TYPES.PARTIAL_UPDATE_CANDIDATETEST,
    payload: axios.patch(`${apiUrl}/${entity.id}`, cleanEntity(entity)),
  });
  return result;
};

export const deleteEntity: ICrudDeleteAction<ICandidateTest> = id => async dispatch => {
  const requestUrl = `${apiUrl}/${id}`;
  const result = await dispatch({
    type: ACTION_TYPES.DELETE_CANDIDATETEST,
    payload: axios.delete(requestUrl),
  });
  dispatch(getEntities());
  return result;
};

export const reset = () => ({
  type: ACTION_TYPES.RESET,
});
