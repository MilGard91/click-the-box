import * as actionTypes from '../actions/actionTypes';

const intitialState = {
    time: 0,
    topScore: '',
    data: {
        users: ['marko', 'zika'],
        marko: [[10,5], [11,15],[6,12]],
        zika: [],
        guest:[]
    },
    user: [],
    pickLvl: false,
    pickPlayer: true,
}

const reducer = (state = intitialState, action) => {
    switch (action.type) {
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
        case actionTypes.TIMER_STOPED:
        return {
            ...state
        }
        case actionTypes.SUBMIT_NEW_PLAYER:
         return {
             ...state,
             data: {
                 ...state.data,
                 users: [...state.data.users, action.newPlayer],
                 newPlayer: [],
             }
         }
        default: return state;
    }
}

export default reducer;
