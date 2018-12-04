import { combineReducers } from 'redux';
import counter from './counter';
import score from './score';

export interface CounterState {
  value: number;
}

export interface ScoreState {
  value: number;
}

export interface AppState {
  counter: CounterState,
  score: ScoreState
}

export default combineReducers({
  counter,
  score
});
