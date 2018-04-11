import * as actionTypes from '../actions/actionTypes';
import * as algorithms from './algorithms';
import * as utility from '../../Utility'

const intitialState = {
    gameReady: false,

    time: 0,
    topScore: '',
    counter: '~',
    newData: false,
    data: {
        users: []
    },
    selectedPlayer: '',
    wrongUsername: false,
    user: [],
    pickLvl: false,
    pickPlayer: true,
    lives: 1,
    level: 1,

    gameStarted: false,
    gameFinished: false,
    finishType: '',
    finishMessage: '',
    nextPosition: [],
    activePosition: [],
    mustPosition: [],
    lastClicked: [],
    flaged: [],
}


const reducer = (state = intitialState, action) => {
    switch (action.type) {

        case actionTypes.GET_DATA:
            return {
                ...state,
                data: { ...action.data }
            }

        case actionTypes.GAME_READY:
            return {
                ...state,
                gameReady: true,
            }

        case actionTypes.SUBMIT_NEW_PLAYER:
            return {
                ...state,
                data: {
                    ...state.data,
                    users: [...state.data.users, [action.newPlayer, 1]],
                    [action.newPlayer]: [],
                },
                newData: true
            }
        case actionTypes.INVALID_USERNAME:
            return {
                ...state,
                wrongUsername: true,
                pickPlayer: false
            }
        case actionTypes.RETRY_USERNAME:
            return {
                ...state,
                wrongUsername: false,
                pickPlayer: true
            }
        case actionTypes.SELECT_PLAYER:
            return {
                ...state,
                selectedPlayer: action.playerName,
                user: [...state.data[action.playerName]],
                pickPlayer: false,
                pickLvl: true,
            }
        case actionTypes.SELECT_LEVEL:
            return {
                ...state,
                pickLvl: false,
                level: action.lvlNumber
            }
        case actionTypes.SWITCH_PLAYER:
            return {
                ...state,
                pickPlayer: true,
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
        case actionTypes.SWITCH_LVL:
            return {
                ...state,
                pickLvl: true,
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
        case actionTypes.DELETE_PLAYER:
            let deletePlayerData = {...state.data};
            delete deletePlayerData[action.playerName];
            let deletePlayerArr = [...state.data.users];
            deletePlayerArr.splice(action.index,1);
            deletePlayerData.users = deletePlayerArr;
            return{
                ...state,
                data: deletePlayerData,
                newData:true
            }
        case actionTypes.DATA_STORED:
            return {
                ...state,
                newData: false
            }

        case actionTypes.GAME_START:
            return {
                ...state,
                gameStarted: true,
                activePosition: [action.position],
                mustPosition: algorithms.gameBuild(state.level, [action.position]),
                counter: state.level,
                time: 0
            };

        case actionTypes.TIMER_TICK:
            return {
                ...state,
                time: state.time + 1
            }

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
                finishType: 'Lost',
                lives: state.lives - state.counter
            }
        case actionTypes.BOX_ACTIVATED:
            return {
                ...state,
                activePosition: [...state.activePosition, action.position],
                mustPosition: algorithms.positionClicked(action.position, state.mustPosition),
                nextPosition: algorithms.nextMoves([action.position], algorithms.positionClicked(action.position, state.mustPosition)),
                counter: state.counter - 1,
            }
        case actionTypes.GAME_FINISH:
            if (state.nextPosition.length === 0 && state.mustPosition.length === 0 && state.finishType !== 'Lost') {

                let arr = [...state.user];
                if (arr.length > state.level - 1) {
                    arr[state.level - 1] = [...state.user[state.level - 1], state.time]
                } else {
                    arr.push([state.time])
                }
                return {
                    ...state,
                    gameFinished: true,
                    level: state.level + 1,
                    lives: state.lives + 1,
                    finishMessage: 'You finished level: ',
                    finishType: 'Win',
                    data: {
                        ...state.data,
                        [state.selectedPlayer]: arr
                    },
                    user: arr,
                    newData: true
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
            };
        default: return state;
    }
}

export default reducer;