import { combineReducers } from 'redux';

import boardReducer from './board-reducer'
import counterReducer from './counter'
import playStateReducer from './playState'

const rootReducer = combineReducers({
    board: boardReducer,
    generation: counterReducer,
    playState: playStateReducer
  });

  export default rootReducer;
