import { combineReducers } from 'redux';

import boardReducer from './board-reducer'
import counterReducer from './counter'

const rootReducer = combineReducers({
    board: boardReducer,
    generation: counterReducer
  });

  export default rootReducer;
