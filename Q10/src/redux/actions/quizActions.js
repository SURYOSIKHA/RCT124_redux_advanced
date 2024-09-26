import { UPDATE_SCORE } from "./actionTypes";

// Action creator for updating the score
export const updateScore = (score) => {
  return {
    type: UPDATE_SCORE,
    payload: score,
  };
};
