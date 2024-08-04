export const ACTION_TYPES = {
  PAGE_OPEN: 'page/PAGE_OPEN',
  PAGE_CLOSE: 'page/PAGE_CLOSE',
};

const initialState = {
  candidateId: null,
  status: null,
};

export type CandidateDetailState = Readonly<typeof initialState>;

// Reducer

export default (state: CandidateDetailState = initialState, { type, payload }): CandidateDetailState => {
  switch (type) {
    case ACTION_TYPES.PAGE_OPEN:
      return {
        ...state,
        candidateId: payload,
        status: true,
      };
    case ACTION_TYPES.PAGE_CLOSE:
      return {
        ...state,
        status: false,
      };
    default:
      return state;
  }
};

// Actions
export const closePage = () => ({
  type: ACTION_TYPES.PAGE_CLOSE,
});

export const openPage = candidateId => ({
  type: ACTION_TYPES.PAGE_OPEN,
  payload: candidateId,
});
