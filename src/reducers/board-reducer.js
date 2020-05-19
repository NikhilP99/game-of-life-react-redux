import {makeRandomBoard, cleanBoard, nextGrid} from '../BoardGen'

const totalRows = 35
const totalCols = 50

let initialBoard = makeRandomBoard(totalRows,totalCols)

export default (state = initialBoard, action) => {
    switch(action.type){
      case 'TOGGLE_STATUS':
        let board = state.slice(0);
        let cell = board[action.payload.x][action.payload.y];
        cell.status = !cell.status;
        cell.newBorn = !cell.newBorn;
        return board;
      case 'RANDOM_GRID':
        return makeRandomBoard(totalRows, totalCols);
      case 'CLEAR':
        return cleanBoard(totalRows, totalCols);
      case 'NEXT':
        return nextGrid(state);
      default:
        return state;
    }
  };
