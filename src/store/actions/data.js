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

export const storeGameData = (gameData) => {
    // localStorage.removeItem('click-the-box');
    localStorage.setItem('click-the-box', JSON.stringify(gameData))
    return {
        type:actionTypes.STORE_DATA
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
