import * as actionTypes from './actionTypes';

export const timerStarted = () => {
    return {
        type: actionTypes.TIMER_STARTED,
        now: new Date().getTime()
    }
}


export const timerStoped = () => {
    return {
        type: actionTypes.TIMER_STOPED,
        now: new Date().getTime()
    }
}

