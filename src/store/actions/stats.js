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
    };
};



export const submitNewPlayer = (newPlayer) => {
    return {
        type: actionTypes.SUBMIT_NEW_PLAYER,
        newPlayer: newPlayer,
    }
}

export const selectPlayer = (playerName) => {
    return {
        type: actionTypes.SELECT_PLAYER,
        playerName: playerName
    }
}

export const selectLevel = (lvlNumber) => {
    return {
        type: actionTypes.SELECT_LEVEL,
        lvlNumber: lvlNumber,
    }
}
