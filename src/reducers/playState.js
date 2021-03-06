const initialState = {
  timerId: null,
  isRunning: false
};

export default (state = initialState, action) => {
  switch(action.type){
    case 'PLAY':
      return {
        timerId: action.timerId,
        isRunning: true
      };
    case 'PAUSE':
      return {
        timerId: null,
        isRuninng: false
      };
    default:
      return state;
  }
}
