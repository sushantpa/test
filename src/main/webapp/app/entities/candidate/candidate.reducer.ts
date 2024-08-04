import axios from 'axios';
import { ICrudGetAction, ICrudGetAllAction, ICrudPutAction, ICrudDeleteAction } from 'react-jhipster';

import { cleanEntity } from 'app/shared/util/entity-utils';
import { REQUEST, SUCCESS, FAILURE } from 'app/shared/reducers/action-type.util';

import { ICandidate, defaultValue } from 'app/shared/model/candidate.model';

export const ACTION_TYPES = {
  FETCH_CANDIDATE_LIST: 'candidate/FETCH_CANDIDATE_LIST',
  FETCH_CANDIDATE: 'candidate/FETCH_CANDIDATE',
  FETCH_LOGIN_CANDIDATE: 'candidate/FETCH_LOGIN_CANDIDATE',
  CREATE_CANDIDATE: 'candidate/CREATE_CANDIDATE',
  UPDATE_CANDIDATE: 'candidate/UPDATE_CANDIDATE',
  ACTIVATE_CANDIDATE: 'candidate/ACTIVATE_CANDIDATE',
  DEACTIVATE_CANDIDATE: 'candidate/DEACTIVATE_CANDIDATE',
  PARTIAL_UPDATE_CANDIDATE: 'candidate/PARTIAL_UPDATE_CANDIDATE',
  DELETE_CANDIDATE: 'candidate/DELETE_CANDIDATE',
  DOWNLOAD_ALL_CANDIDATE: 'candidate/DOWNLOAD_ALL_CANDIDATE',
  DOWNLOAD_SUMMARY_CANDIDATE: 'candidate/DOWNLOAD_SUMMARY_CANDIDATE',
  DOWNLOAD_ALL_CANDIDATE_RESULT: 'candidate/DOWNLOAD_ALL_CANDIDATE_RESULT',
  DOWNLOAD_SUMMARY_CANDIDATE_RESULT: 'candidate/DOWNLOAD_SUMMARY_CANDIDATE_RESULT',
  DOWNLOAD_RESET: 'candidate/DOWNLOAD_RESET',
  RESET: 'candidate/RESET',
};

const initialState = {
  loading: false,
  errorMessage: null,
  entities: [] as ReadonlyArray<ICandidate>,
  entity: defaultValue,
  updating: false,
  candidateLatestTest: null,
  updateSuccess: false,
  assessmentStarted: false,
  assessmentCompleted: false,
  message: '',
  candidatesDownloads: null,
  candidatesSummaryDownloads: null,
  candidatesResultDownloads: null,
  candidatesResultSummaryDownloads: null,
  assessmentStatus: null,
};

export type CandidateState = Readonly<typeof initialState>;

// Reducer

// eslint-disable-next-line complexity
export default (state: CandidateState = initialState, action): CandidateState => {
  switch (action.type) {
    case REQUEST(ACTION_TYPES.FETCH_CANDIDATE_LIST):
    case REQUEST(ACTION_TYPES.FETCH_CANDIDATE):
    case REQUEST(ACTION_TYPES.FETCH_LOGIN_CANDIDATE):
    case REQUEST(ACTION_TYPES.DOWNLOAD_ALL_CANDIDATE):
    case REQUEST(ACTION_TYPES.DOWNLOAD_SUMMARY_CANDIDATE):
    case REQUEST(ACTION_TYPES.DOWNLOAD_ALL_CANDIDATE_RESULT):
    case REQUEST(ACTION_TYPES.DOWNLOAD_SUMMARY_CANDIDATE_RESULT):
      return {
        ...state,
        errorMessage: null,
        updateSuccess: false,
        loading: true,
      };
    case REQUEST(ACTION_TYPES.CREATE_CANDIDATE):
    case REQUEST(ACTION_TYPES.UPDATE_CANDIDATE):
    case REQUEST(ACTION_TYPES.DELETE_CANDIDATE):
    case REQUEST(ACTION_TYPES.PARTIAL_UPDATE_CANDIDATE):
    case REQUEST(ACTION_TYPES.ACTIVATE_CANDIDATE):
    case REQUEST(ACTION_TYPES.DEACTIVATE_CANDIDATE):
      return {
        ...state,
        errorMessage: null,
        updateSuccess: false,
        updating: true,
      };
    case FAILURE(ACTION_TYPES.FETCH_CANDIDATE_LIST):
    case FAILURE(ACTION_TYPES.FETCH_CANDIDATE):
    case FAILURE(ACTION_TYPES.FETCH_LOGIN_CANDIDATE):
    case FAILURE(ACTION_TYPES.CREATE_CANDIDATE):
    case FAILURE(ACTION_TYPES.UPDATE_CANDIDATE):
    case FAILURE(ACTION_TYPES.PARTIAL_UPDATE_CANDIDATE):
    case FAILURE(ACTION_TYPES.ACTIVATE_CANDIDATE):
    case FAILURE(ACTION_TYPES.DEACTIVATE_CANDIDATE):
    case FAILURE(ACTION_TYPES.DELETE_CANDIDATE):
    case FAILURE(ACTION_TYPES.DOWNLOAD_ALL_CANDIDATE):
    case FAILURE(ACTION_TYPES.DOWNLOAD_SUMMARY_CANDIDATE):
    case FAILURE(ACTION_TYPES.DOWNLOAD_ALL_CANDIDATE_RESULT):
    case FAILURE(ACTION_TYPES.DOWNLOAD_SUMMARY_CANDIDATE_RESULT):
      return {
        ...state,
        loading: false,
        updating: false,
        updateSuccess: false,
        errorMessage: action.payload,
      };
    case SUCCESS(ACTION_TYPES.FETCH_CANDIDATE_LIST):
      return {
        ...state,
        loading: false,
        entities: action.payload.data,
      };
    case SUCCESS(ACTION_TYPES.FETCH_CANDIDATE):
      return {
        ...state,
        loading: false,
        entity: action.payload.data,
      };
    case SUCCESS(ACTION_TYPES.FETCH_LOGIN_CANDIDATE):
      return {
        ...state,
        loading: false,
        candidateLatestTest: action.payload.data,
        assessmentStarted: action.payload.data.testStarted,
        assessmentCompleted: action.payload.data.testCompleted,
        assessmentStatus: action.payload.data.active,
      };
    case SUCCESS(ACTION_TYPES.CREATE_CANDIDATE):
    case SUCCESS(ACTION_TYPES.UPDATE_CANDIDATE):
    case SUCCESS(ACTION_TYPES.PARTIAL_UPDATE_CANDIDATE):
      return {
        ...state,
        updating: false,
        updateSuccess: true,
        entity: action.payload.data,
      };
    case SUCCESS(ACTION_TYPES.DELETE_CANDIDATE):
      return {
        ...state,
        updating: false,
        updateSuccess: true,
        entity: {},
      };
    case SUCCESS(ACTION_TYPES.ACTIVATE_CANDIDATE):
      return {
        ...state,
        updating: false,
        updateSuccess: true,
        entity: action.payload.data,
        message: 'Candidate activated Successfully',
      };
    case SUCCESS(ACTION_TYPES.DEACTIVATE_CANDIDATE):
      return {
        ...state,
        updating: false,
        updateSuccess: true,
        entity: action.payload.data,
        message: 'Candidate deactivated Successfully',
      };
    case SUCCESS(ACTION_TYPES.DOWNLOAD_ALL_CANDIDATE):
      return {
        ...state,
        updating: false,
        updateSuccess: true,
        candidatesDownloads: action.payload.data,
      };
    case SUCCESS(ACTION_TYPES.DOWNLOAD_SUMMARY_CANDIDATE):
      return {
        ...state,
        updating: false,
        updateSuccess: true,
        candidatesSummaryDownloads: action.payload.data,
      };
    case SUCCESS(ACTION_TYPES.DOWNLOAD_ALL_CANDIDATE_RESULT):
      return {
        ...state,
        updating: false,
        updateSuccess: true,
        candidatesResultDownloads: action.payload.data,
      };
    case SUCCESS(ACTION_TYPES.DOWNLOAD_SUMMARY_CANDIDATE_RESULT):
      return {
        ...state,
        updating: false,
        updateSuccess: true,
        candidatesResultSummaryDownloads: action.payload.data,
      };
    case ACTION_TYPES.DOWNLOAD_RESET:
      return {
        ...state,
        candidatesDownloads: null,
        candidatesSummaryDownloads: null,
        candidatesResultDownloads: null,
        candidatesResultSummaryDownloads: null,
      };
    case ACTION_TYPES.RESET:
      return {
        ...initialState,
      };
    default:
      return state;
  }
};

const apiUrl = 'api/candidates';

// Actions

export const getEntities: ICrudGetAllAction<ICandidate> = (page = 0, size = 8, search, lastTestDate = '') => ({
  type: ACTION_TYPES.FETCH_CANDIDATE_LIST,
  payload: axios.get<ICandidate>(`${apiUrl}?page=${page}&size=${size}&search=${search}&lastTestDate=${lastTestDate}`),
});

export const getResultEntities: ICrudGetAllAction<ICandidate> = (page = 0, size = 8, search, lastTestDate = true) => ({
  type: ACTION_TYPES.FETCH_CANDIDATE_LIST,
  payload: axios.get<ICandidate>(`${apiUrl}?page=${page}&size=${size}&search=${search}&lastTestDate=${lastTestDate}`),
});

export const getEntity: ICrudGetAction<ICandidate> = id => {
  const requestUrl = `${apiUrl}/${id}`;
  return {
    type: ACTION_TYPES.FETCH_CANDIDATE,
    payload: axios.get<ICandidate>(requestUrl),
  };
};

export const getLoginCandidate = () => {
  const requestUrl = `${apiUrl}/myCandidateRecord`;
  return {
    type: ACTION_TYPES.FETCH_LOGIN_CANDIDATE,
    payload: axios.get<ICandidate>(requestUrl),
  };
};

export const downloadSummaryCandidate = (startDate, endDate) => {
  const requestUrl = `${apiUrl}/download?startDate=${startDate}&endDate=${endDate}`;
  return {
    type: ACTION_TYPES.DOWNLOAD_SUMMARY_CANDIDATE,
    payload: axios.get<ICandidate>(requestUrl),
  };
};

export const downloadAllCandidate = () => {
  const requestUrl = `${apiUrl}/download`;
  return {
    type: ACTION_TYPES.DOWNLOAD_ALL_CANDIDATE,
    payload: axios.get<ICandidate>(requestUrl),
  };
};

export const downloadCandidateResultSummary = (startDate, endDate) => {
  const requestUrl = `${apiUrl}/download?startDate=${startDate}&endDate=${endDate}&lastTestDate=true`;
  return {
    type: ACTION_TYPES.DOWNLOAD_SUMMARY_CANDIDATE_RESULT,
    payload: axios.get<ICandidate>(requestUrl),
  };
};

export const downloadCandidateResult = () => {
  const requestUrl = `${apiUrl}/download?&lastTestDate=true`;
  return {
    type: ACTION_TYPES.DOWNLOAD_ALL_CANDIDATE_RESULT,
    payload: axios.get<ICandidate>(requestUrl),
  };
};

export const createEntity: ICrudPutAction<ICandidate> = entity => async dispatch => {
  const result = await dispatch({
    type: ACTION_TYPES.CREATE_CANDIDATE,
    payload: axios.post(apiUrl, cleanEntity(entity)),
  });
  dispatch(getEntities());
  return result;
};

export const updateEntity: ICrudPutAction<ICandidate> = entity => async dispatch => {
  const result = await dispatch({
    type: ACTION_TYPES.UPDATE_CANDIDATE,
    payload: axios.put(`${apiUrl}/${entity.id}`, cleanEntity(entity)),
  });
  return result;
};

export const activate: ICrudPutAction<ICandidate> = id => async dispatch => {
  const result = await dispatch({
    type: ACTION_TYPES.ACTIVATE_CANDIDATE,
    payload: axios.put(`${apiUrl}/${id}/activate`),
  });
  return result;
};

export const deactivate: ICrudPutAction<ICandidate> = id => async dispatch => {
  const result = await dispatch({
    type: ACTION_TYPES.DEACTIVATE_CANDIDATE,
    payload: axios.put(`${apiUrl}/${id}/deactivate`),
  });
  return result;
};
export const partialUpdate: ICrudPutAction<ICandidate> = entity => async dispatch => {
  const result = await dispatch({
    type: ACTION_TYPES.PARTIAL_UPDATE_CANDIDATE,
    payload: axios.patch(`${apiUrl}/${entity.id}`, cleanEntity(entity)),
  });
  return result;
};

export const deleteEntity: ICrudDeleteAction<ICandidate> = id => async dispatch => {
  const requestUrl = `${apiUrl}/${id}`;
  const result = await dispatch({
    type: ACTION_TYPES.DELETE_CANDIDATE,
    payload: axios.delete(requestUrl),
  });
  dispatch(getEntities());
  return result;
};

export const reset = () => ({
  type: ACTION_TYPES.RESET,
});

export const resetDownload = () => ({
  type: ACTION_TYPES.DOWNLOAD_RESET,
});
