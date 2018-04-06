import * as actionTypes from './actionTypes';

export const gameStart = (positionX, positionY) => {
    return {
        type: actionTypes.GAME_START,
        activePositionX: positionX,
        activePositionY: positionY
    }
}

export const boxClicked = (positionX, positionY) => {
    return {
        type: actionTypes.BOX_CLICKED,
        activePositionX: positionX,
        activePositionY: positionY
    }
}

// export const 