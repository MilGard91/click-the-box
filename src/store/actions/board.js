import * as actionTypes from './actionTypes';

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

export const gameFinished = (lives) => {
    return {
        type:actionTypes.GAME_FINISHED,
        lives: lives
    }
}


export const boxClicked = (gameStarted, positionX, positionY) => {
    return (dispatch, getState) => {
        if (!gameStarted) {
            dispatch(gameStart(positionX, positionY));
            dispatch(nextSteps(positionX, positionY));
        } else {
            dispatch(checkTheBox(positionX, positionY));
            dispatch(boxActivated(positionX, positionY));
            dispatch(gameFinish(positionX, positionY));
        }
        if (getState().board.gameFinished && getState().board.finisType === 'Win') {
            dispatch(gameFinished(getState().board.lives))
        }

    }

}

export const nextLvl = () => {
    return {
        type: actionTypes.NEXT_LVL
    }
}





// export const 