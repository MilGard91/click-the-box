import * as actionTypes from './actionTypes';

export const timerStarted = () => {
    return {
        type: actionTypes.TIMER_STARTED,
    }
}


// export const timerStoped = () => {
//     return {
//         type: actionTypes.TIMER_STOPED
//     }
// }

export const timerTick = () => {
    return {
        type: actionTypes.TIMER_TICK
    };
};
let sec;
export const timer = () => {
    return dispatch => {
            dispatch(timerStarted());
            setInterval(dispatch(timerTick()), 1000);
    };
};

export const timerStoped = () => {
    return dispatch => {
        clearInterval(sec)
    }
}


export const submitNewPlayer = (newPlayer) => {
    return {
        type: actionTypes.SUBMIT_NEW_PLAYER,
        newPlayer: newPlayer,
    }
}

