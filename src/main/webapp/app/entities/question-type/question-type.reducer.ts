import axios from 'axios';
import { ICrudGetAction, ICrudGetAllAction, ICrudPutAction, ICrudDeleteAction } from 'react-jhipster';

import { cleanEntity } from 'app/shared/util/entity-utils';
import { REQUEST, SUCCESS, FAILURE } from 'app/shared/reducers/action-type.util';

import { IQuestionType, defaultValue } from 'app/shared/model/question-type.model';

export const ACTION_TYPES = {
  FETCH_QUESTIONTYPE_LIST: 'questionType/FETCH_QUESTIONTYPE_LIST',
  FETCH_QUESTIONTYPE: 'questionType/FETCH_QUESTIONTYPE',
  FETCH_CANDIDATE_QUESTIONTYPE: 'questionType/FETCH_CANDIDATE_QUESTIONTYPE',
  CREATE_QUESTIONTYPE: 'questionType/CREATE_QUESTIONTYPE',
  UPDATE_QUESTIONTYPE: 'questionType/UPDATE_QUESTIONTYPE',
  PARTIAL_UPDATE_QUESTIONTYPE: 'questionType/PARTIAL_UPDATE_QUESTIONTYPE',
  DELETE_QUESTIONTYPE: 'questionType/DELETE_QUESTIONTYPE',
  RESET: 'questionType/RESET',
};

const initialState = {
  loading: false,
  errorMessage: null,
  entities: [] as ReadonlyArray<IQuestionType>,
  entity: defaultValue,
  updating: false,
  updateSuccess: false,
};

export type QuestionTypeState = Readonly<typeof initialState>;

// Reducer

export default (state: QuestionTypeState = initialState, action): QuestionTypeState => {
  switch (action.type) {
    case REQUEST(ACTION_TYPES.FETCH_QUESTIONTYPE_LIST):
    case REQUEST(ACTION_TYPES.FETCH_QUESTIONTYPE):
    case REQUEST(ACTION_TYPES.FETCH_CANDIDATE_QUESTIONTYPE):
      return {
        ...state,
        errorMessage: null,
        updateSuccess: false,
        loading: true,
      };
    case REQUEST(ACTION_TYPES.CREATE_QUESTIONTYPE):
    case REQUEST(ACTION_TYPES.UPDATE_QUESTIONTYPE):
    case REQUEST(ACTION_TYPES.DELETE_QUESTIONTYPE):
    case REQUEST(ACTION_TYPES.PARTIAL_UPDATE_QUESTIONTYPE):
      return {
        ...state,
        errorMessage: null,
        updateSuccess: false,
        updating: true,
      };
    case FAILURE(ACTION_TYPES.FETCH_QUESTIONTYPE_LIST):
    case FAILURE(ACTION_TYPES.FETCH_QUESTIONTYPE):
    case FAILURE(ACTION_TYPES.FETCH_CANDIDATE_QUESTIONTYPE):
    case FAILURE(ACTION_TYPES.CREATE_QUESTIONTYPE):
    case FAILURE(ACTION_TYPES.UPDATE_QUESTIONTYPE):
    case FAILURE(ACTION_TYPES.PARTIAL_UPDATE_QUESTIONTYPE):
    case FAILURE(ACTION_TYPES.DELETE_QUESTIONTYPE):
      return {
        ...state,
        loading: false,
        updating: false,
        updateSuccess: false,
        errorMessage: action.payload,
      };
    case SUCCESS(ACTION_TYPES.FETCH_QUESTIONTYPE_LIST):
      return {
        ...state,
        loading: false,
        entities: action.payload.data,
      };
    case SUCCESS(ACTION_TYPES.FETCH_QUESTIONTYPE):
      return {
        ...state,
        loading: false,
        entity: action.payload.data,
      };
    case SUCCESS(ACTION_TYPES.CREATE_QUESTIONTYPE):
    case SUCCESS(ACTION_TYPES.UPDATE_QUESTIONTYPE):
    case SUCCESS(ACTION_TYPES.PARTIAL_UPDATE_QUESTIONTYPE):
      return {
        ...state,
        updating: false,
        updateSuccess: true,
        entity: action.payload.data,
      };
    case SUCCESS(ACTION_TYPES.DELETE_QUESTIONTYPE):
      return {
        ...state,
        updating: false,
        updateSuccess: true,
        entity: {},
      };
    case SUCCESS(ACTION_TYPES.FETCH_CANDIDATE_QUESTIONTYPE):
      return {
        ...state,
        loading: false,
        entity: action.payload.data.sections,
      };
    case ACTION_TYPES.RESET:
      return {
        ...initialState,
      };
    default:
      return state;
  }
};

const apiUrl = 'api/question-types';

// Actions

export const getEntities: ICrudGetAllAction<IQuestionType> = (page, size, sort) => ({
  type: ACTION_TYPES.FETCH_QUESTIONTYPE_LIST,
  payload: axios.get<IQuestionType>(`${apiUrl}?cacheBuster=${new Date().getTime()}`),
});

export const getEntity: ICrudGetAction<IQuestionType> = id => {
  const requestUrl = `${apiUrl}/${id}`;
  return {
    type: ACTION_TYPES.FETCH_QUESTIONTYPE,
    payload: axios.get<IQuestionType>(requestUrl),
  };
};

export const getCandidateQuestion: ICrudGetAction<IQuestionType> = id => {
  const requestUrl = `${apiUrl}/${id}/get-candidate-questions`;
  return {
    type: ACTION_TYPES.FETCH_CANDIDATE_QUESTIONTYPE,
    payload: axios.get<IQuestionType>(requestUrl),
  };
};
export const createEntity: ICrudPutAction<IQuestionType> = entity => async dispatch => {
  const result = await dispatch({
    type: ACTION_TYPES.CREATE_QUESTIONTYPE,
    payload: axios.post(apiUrl, cleanEntity(entity)),
  });
  dispatch(getEntities());
  return result;
};

export const updateEntity: ICrudPutAction<IQuestionType> = entity => async dispatch => {
  const result = await dispatch({
    type: ACTION_TYPES.UPDATE_QUESTIONTYPE,
    payload: axios.put(`${apiUrl}/${entity.id}`, cleanEntity(entity)),
  });
  return result;
};

export const partialUpdate: ICrudPutAction<IQuestionType> = entity => async dispatch => {
  const result = await dispatch({
    type: ACTION_TYPES.PARTIAL_UPDATE_QUESTIONTYPE,
    payload: axios.patch(`${apiUrl}/${entity.id}`, cleanEntity(entity)),
  });
  return result;
};

export const deleteEntity: ICrudDeleteAction<IQuestionType> = id => async dispatch => {
  const requestUrl = `${apiUrl}/${id}`;
  const result = await dispatch({
    type: ACTION_TYPES.DELETE_QUESTIONTYPE,
    payload: axios.delete(requestUrl),
  });
  dispatch(getEntities());
  return result;
};

export const reset = () => ({
  type: ACTION_TYPES.RESET,
});
