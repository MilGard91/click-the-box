import * as actionTypes from '../actions/actionTypes';

const intitialState = {
    time: 0
}

const reducer = (state = intitialState, action) => {
    switch (action.type) {
        case actionTypes.TIMER_STARTED:
        return {
            ...state,
            time:0
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
        default: return state;
    }
}

export default reducer;
