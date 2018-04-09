import * as actionTypes from '../actions/actionTypes';
import * as algorithms from './algorithms';
import * as utility from '../../Utility'

const intitialState = {
    counter: '~',
    gameStarted: false,
    gameFinished: false,
    finishType: '',
    finishMessage: '',
    nextPosition: [],
    activePosition: [],
    mustPosition: [],
    lastClicked: [],
    flaged: [],
    level: 1,
    lives: 1
}


const reducer = (state = intitialState, action) => {
    switch (action.type) {
        case actionTypes.GAME_START:

            return {
                ...state,
                gameStarted: true,
                activePosition: [action.position],
                mustPosition: algorithms.gameBuild(state.level, [action.position]),
                counter: state.level
            };
        case actionTypes.NEXT_STEPS:
            return {
                ...state,
                nextPosition: algorithms.nextMoves([action.position], state.mustPosition)
            }
        case actionTypes.CHECK_THE_BOX:
            if (utility.isItInArray(state.nextPosition, action.position)) {
                return {
                    ...state,
                }
            } else return {
                ...state,
                gameFinished: true,
                flaged: [action.position],
                finishMessage: 'Clicked the wrong box',
                finishType: 'Lost',
                lives: state.lives - state.counter
            }
        case actionTypes.BOX_ACTIVATED:
            return {
                ...state,
                activePosition: [...state.activePosition, action.position],
                mustPosition: algorithms.positionClicked(action.position, state.mustPosition),
                nextPosition: algorithms.nextMoves([action.position], algorithms.positionClicked(action.position, state.mustPosition)),
                counter: state.counter -1,
            }
        case actionTypes.GAME_FINISHED:
            if (state.nextPosition.length === 0 && state.mustPosition.length === 0 && state.finishType !== 'Lost') {
                return {
                    ...state,
                    gameFinished: true,
                    level: state.level + 1,
                    lives: state.lives + 1,
                    finishMessage: 'You finished level: ',
                    finishType: 'Win'
                }
            } else if (state.nextPosition.length === 0 && !utility.isItInArray(state.nextPosition, action.position)) {
                return {
                    ...state,
                    gameFinished: true,
                    finishMessage: 'You lost! :(',
                    finishType: 'Lost',
                    lives: state.lives - state.counter
                }
            } else return {
                ...state
            }
        case actionTypes.NEXT_LVL:
            return {
                ...state,
                gameStarted: false,
                gameFinished: false,
                finishType: '',
                finishMessage: '',
                nextPosition: [],
                activePosition: [],
                mustPosition: [],
                lastClicked: [],
                flaged: [],
                counter: '~'
            }

        default: return state;
    }
}

export default reducer;