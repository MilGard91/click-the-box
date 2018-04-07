// import * as actionTypes from '../actions/actionTypes';

// const intitialState = {
//     timeStarted: 0,
//     timeStoped: 0,
//     gameStarted: false,
//     counter: 0,
//     lives: 1,
// }

// const reducer = (state = intitialState, action) => {
//     switch (action.type) {
//         case actionTypes.GAME_START:
//             return {
//                 ...state,
//                 gameStarted: true,
//                 counter: state.lvl,
//                 timeStarted: Date.now(),
//             };
//             case actionTypes.CHECK_THE_BOX:
//             if (utility.isItInArray(state.nextPosition, action.position)) {
//                 return {
//                     ...state,
//                 }
//             } else return {
//                 ...state,
//                 gameFinished: true,
//                 finishMessage: 'Clicked the wrong box',
//                 finishType: 'Lost'
//             }
//         case actionTypes.BOX_ACTIVATED:
//             return {
//                 ...state,
//                 counter: state.counter + 1
//             }
//             case actionTypes.TIMER_STARTED:
//             return {
//                 ...state,
//                 timeStarted: action.now,
//                 timeStoped: undefined
//             }
//             case actionTypes.TIMER_STOPED:
//             return {
//                 ...state,
//                 timeStoped: action.now
//             }
//         default: return state;
//     }
// }

// export default reducer;
