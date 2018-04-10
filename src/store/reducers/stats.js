import * as actionTypes from '../actions/actionTypes';

const intitialState = {
    level: null,
    time: 0,
    topScore: '',
    data: {
        users: []
    },
    user: [],
    pickLvl: false,
    pickPlayer: true,
    lives: 0,
    gameReady: false
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
        case actionTypes.GAME_START:
            return {
                ...state,
                time: 0
            };
        case actionTypes.TIMER_TICK:
            return {
                ...state,
                time: state.time + 1
            }
        case actionTypes.GAME_FINISHED:
            let arr = [...state.user];
            if (arr.length > state.level - 1) {
                arr[state.level - 1] = [...state.user[state.level - 1], state.time]
            } else {
                arr.push([state.time])
            }
            return {
                ...state,
                user: arr,
                level: state.level + 1,
                lives: action.lives
            }
        case actionTypes.SUBMIT_NEW_PLAYER:
            return {
                ...state,
                data: {
                    ...state.data,
                    users: [...state.data.users, [action.newPlayer, 1]],
                    [action.newPlayer]: [],
                }
            }
        case actionTypes.SELECT_PLAYER:
            return {
                ...state,
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
        case actionTypes.DATA_STORED:
            return {
                ...state
            }
        default: return state;
    }
}

export default reducer;
