import { FETCH_QUIZ_REQUEST, FETCH_QUIZ_SUCCESS, FETCH_QUIZ_FAILURE, UPDATE_SCORE } from '../actions/actionTypes';

const initialState = {
  quiz: [],
  loading: false,
  error: null,
  score: 0,
};

export const quizReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_QUIZ_REQUEST:
      return { ...state, loading: true };
    case FETCH_QUIZ_SUCCESS:
      return { ...state, quiz: action.payload, loading: false };
    case FETCH_QUIZ_FAILURE:
      return { ...state, error: action.payload, loading: false };
    case UPDATE_SCORE:
      return { ...state, score: state.score + action.payload };
    default:
      return state;
  }
};
