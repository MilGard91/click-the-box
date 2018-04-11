import * as actionTypes from './actionTypes';


//////////////////////GAME START///////////////////////////

export const getData = (fetchedData) => {
    return {
        type: actionTypes.GET_DATA,
        data: fetchedData
    }
}

const gameReady = () => {
    return {
        type: actionTypes.GAME_READY
    }
}

export const storeGameData = (gameData) => {
    return dispatch => {
        console.log(gameData)
        localStorage.setItem('click-the-box', JSON.stringify(gameData));
        dispatch(storingComplete());
    }
}

export const checkGameData = (gameData) => {
    return dispatch => {
        const data = localStorage.getItem('click-the-box')
        if (!data) {
            dispatch(storeGameData(gameData));
        } else {
            const fetchedData = JSON.parse(data);
            console.log(fetchedData)
            dispatch(getData(fetchedData));
        }
        dispatch(gameReady());
    }
}

//////////////PLAYER AND LVL SELECT////////////

export const storeNewData = (gameData) => {
    return dispatch => {
        localStorage.setItem('click-the-box', JSON.stringify(gameData));
        dispatch(storingComplete());
    }
}

export const storingComplete = () => {
    return {
        type: actionTypes.DATA_STORED
    }
}
export const submitNewPlayer = (newPlayer) => {

    return {
        type: actionTypes.SUBMIT_NEW_PLAYER,
        newPlayer: newPlayer,
    }
}

export const invalidUsername = () => {
    return {
        type: actionTypes.INVALID_USERNAME
    }
}

export const retryUsername = () => {
    return {
        type: actionTypes.RETRY_USERNAME
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

export const switchPlayer = () => {
    return {
        type: actionTypes.SWITCH_PLAYER,
    }
}

export const switchLvl = () => {
    return {
        type: actionTypes.SWITCH_LVL,
    }
}
export const deletePlayer = (playerName, index) => {
    return {
        type: actionTypes.DELETE_PLAYER,
        playerName: playerName,
        index: index
    }
}
///////////////GAMEPLAY///////////////////
export const gameStart = (positionX, positionY) => {
    return {
        type: actionTypes.GAME_START,
        position: [positionX, positionY]
    };
};

const nextSteps = (positionX, positionY) => {
    return {
        type: actionTypes.NEXT_STEPS,
        position: [positionX, positionY]
    }
}

const boxActivated = (positionX, positionY) => {
    return {
        type: actionTypes.BOX_ACTIVATED,
        position: [positionX, positionY]
    }
}

const checkTheBox = (positionX, positionY) => {
    return {
        type: actionTypes.CHECK_THE_BOX,
        position: [positionX, positionY]
    }
}

export const gameFinish = (positionX, positionY) => {
    return {
        type: actionTypes.GAME_FINISH,
        position: [positionX, positionY]
    }
}

export const boxClicked = (gameStarted, positionX, positionY) => {
    return dispatch => {
        if (!gameStarted) {
            dispatch(gameStart(positionX, positionY));
            dispatch(nextSteps(positionX, positionY));
        } else {
            dispatch(checkTheBox(positionX, positionY));
            dispatch(boxActivated(positionX, positionY));
            dispatch(gameFinish(positionX, positionY));
        }
    }

}

export const nextLvl = () => {
    return {
        type: actionTypes.NEXT_LVL
    }
}


export const timerTick = () => {
    return {
        type: actionTypes.TIMER_TICK
    };
};



