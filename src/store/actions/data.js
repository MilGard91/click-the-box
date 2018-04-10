import * as actionTypes from './actionTypes';


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

export const gameStored = () => {
    return {
        type: actionTypes.DATA_STORED
    }
}


export const storeGameData = (gameData) => {
    return dispatch => {
        console.log(gameData)
        localStorage.setItem('click-the-box', JSON.stringify(gameData));
        dispatch(gameStored());
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
