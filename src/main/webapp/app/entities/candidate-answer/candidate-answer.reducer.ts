import axios from 'axios';
import { ICrudGetAction, ICrudGetAllAction, ICrudPutAction, ICrudDeleteAction } from 'react-jhipster';

import { cleanEntity } from 'app/shared/util/entity-utils';
import { REQUEST, SUCCESS, FAILURE } from 'app/shared/reducers/action-type.util';

import { ICandidateAnswer, defaultValue } from 'app/shared/model/candidate-answer.model';

export const ACTION_TYPES = {
  FETCH_CANDIDATEANSWER_LIST: 'candidateAnswer/FETCH_CANDIDATEANSWER_LIST',
  FETCH_CANDIDATEANSWER: 'candidateAnswer/FETCH_CANDIDATEANSWER',
  CREATE_CANDIDATEANSWER: 'candidateAnswer/CREATE_CANDIDATEANSWER',
  UPDATE_CANDIDATEANSWER: 'candidateAnswer/UPDATE_CANDIDATEANSWER',
  PARTIAL_UPDATE_CANDIDATEANSWER: 'candidateAnswer/PARTIAL_UPDATE_CANDIDATEANSWER',
  DELETE_CANDIDATEANSWER: 'candidateAnswer/DELETE_CANDIDATEANSWER',
  RESET: 'candidateAnswer/RESET',
};

const initialState = {
  loading: false,
  errorMessage: null,
  entities: [] as ReadonlyArray<ICandidateAnswer>,
  entity: defaultValue,
  updating: false,
  updateSuccess: false,
};

export type CandidateAnswerState = Readonly<typeof initialState>;

// Reducer

export default (state: CandidateAnswerState = initialState, action): CandidateAnswerState => {
  switch (action.type) {
    case REQUEST(ACTION_TYPES.FETCH_CANDIDATEANSWER_LIST):
    case REQUEST(ACTION_TYPES.FETCH_CANDIDATEANSWER):
      return {
        ...state,
        errorMessage: null,
        updateSuccess: false,
        loading: true,
      };
    case REQUEST(ACTION_TYPES.CREATE_CANDIDATEANSWER):
    case REQUEST(ACTION_TYPES.UPDATE_CANDIDATEANSWER):
    case REQUEST(ACTION_TYPES.DELETE_CANDIDATEANSWER):
    case REQUEST(ACTION_TYPES.PARTIAL_UPDATE_CANDIDATEANSWER):
      return {
        ...state,
        errorMessage: null,
        updateSuccess: false,
        updating: true,
      };
    case FAILURE(ACTION_TYPES.FETCH_CANDIDATEANSWER_LIST):
    case FAILURE(ACTION_TYPES.FETCH_CANDIDATEANSWER):
    case FAILURE(ACTION_TYPES.CREATE_CANDIDATEANSWER):
    case FAILURE(ACTION_TYPES.UPDATE_CANDIDATEANSWER):
    case FAILURE(ACTION_TYPES.PARTIAL_UPDATE_CANDIDATEANSWER):
    case FAILURE(ACTION_TYPES.DELETE_CANDIDATEANSWER):
      return {
        ...state,
        loading: false,
        updating: false,
        updateSuccess: false,
        errorMessage: action.payload,
      };
    case SUCCESS(ACTION_TYPES.FETCH_CANDIDATEANSWER_LIST):
      return {
        ...state,
        loading: false,
        entities: action.payload.data,
      };
    case SUCCESS(ACTION_TYPES.FETCH_CANDIDATEANSWER):
      return {
        ...state,
        loading: false,
        entity: action.payload.data,
      };
    case SUCCESS(ACTION_TYPES.CREATE_CANDIDATEANSWER):
    case SUCCESS(ACTION_TYPES.UPDATE_CANDIDATEANSWER):
    case SUCCESS(ACTION_TYPES.PARTIAL_UPDATE_CANDIDATEANSWER):
      return {
        ...state,
        updating: false,
        updateSuccess: true,
        entity: action.payload.data,
      };
    case SUCCESS(ACTION_TYPES.DELETE_CANDIDATEANSWER):
      return {
        ...state,
        updating: false,
        updateSuccess: true,
        entity: {},
      };
    case ACTION_TYPES.RESET:
      return {
        ...initialState,
      };
    default:
      return state;
  }
};

const apiUrl = 'api/candidate-answers';

// Actions

export const getEntities: ICrudGetAllAction<ICandidateAnswer> = (page, size, sort) => ({
  type: ACTION_TYPES.FETCH_CANDIDATEANSWER_LIST,
  payload: axios.get<ICandidateAnswer>(`${apiUrl}?cacheBuster=${new Date().getTime()}`),
});

export const getEntity: ICrudGetAction<ICandidateAnswer> = id => {
  const requestUrl = `${apiUrl}/${id}`;
  return {
    type: ACTION_TYPES.FETCH_CANDIDATEANSWER,
    payload: axios.get<ICandidateAnswer>(requestUrl),
  };
};

export const createEntity: ICrudPutAction<ICandidateAnswer> = entity => async dispatch => {
  const result = await dispatch({
    type: ACTION_TYPES.CREATE_CANDIDATEANSWER,
    payload: axios.post(apiUrl, cleanEntity(entity)),
  });
  dispatch(getEntities());
  return result;
};

export const updateEntity: ICrudPutAction<ICandidateAnswer> = entity => async dispatch => {
  const result = await dispatch({
    type: ACTION_TYPES.UPDATE_CANDIDATEANSWER,
    payload: axios.put(`${apiUrl}/${entity.id}`, cleanEntity(entity)),
  });
  return result;
};

export const partialUpdate: ICrudPutAction<ICandidateAnswer> = entity => async dispatch => {
  const result = await dispatch({
    type: ACTION_TYPES.PARTIAL_UPDATE_CANDIDATEANSWER,
    payload: axios.patch(`${apiUrl}/${entity.id}`, cleanEntity(entity)),
  });
  return result;
};

export const deleteEntity: ICrudDeleteAction<ICandidateAnswer> = id => async dispatch => {
  const requestUrl = `${apiUrl}/${id}`;
  const result = await dispatch({
    type: ACTION_TYPES.DELETE_CANDIDATEANSWER,
    payload: axios.delete(requestUrl),
  });
  dispatch(getEntities());
  return result;
};

export const reset = () => ({
  type: ACTION_TYPES.RESET,
});
