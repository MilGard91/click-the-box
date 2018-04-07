import * as actionTypes from './actionTypes';

export const timerStarted = () => {
    return {
        type: actionTypes.TIMER_STARTED,
    }
}


export const timerStoped = () => {
    return {
        type: actionTypes.TIMER_STOPED
    }
}

export const timerTick = () => {
    return {
        type: actionTypes.TIMER_TICK
    }
}

export const timer = (gameStarted, gameEnded) => {
    return dispatch => {
        let timer;
        if (gameStarted){
            dispatch(timerStarted());
            timer = setInterval(dispatch(timerTick()), 1000);
        } else {
            clearInterval(timer);
            dispatch(timerStoped())
        }
    }
}