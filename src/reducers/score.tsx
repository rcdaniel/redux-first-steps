import ActionType from '../actions';
import { ScoreState } from './index';

const initialState: ScoreState = {
  value: 0
};

const score = (state = initialState, action: ActionType) => {
  switch (action.type) {
    case 'INCREMENT_SCORE':
      return { ...state, value: state.value + action.delta };
    case 'DECREMENT_SCORE':
      return { ...state, value: state.value - action.delta };
    default:
      return state;
  }
};
export default score;
