import * as actionTypes from './actionTypes';


// ////////////////////GAME START///////////////////////////

export const getData = fetchedData => (
  {
    type: actionTypes.GET_DATA,
    data: fetchedData,
  }
);

const gameReady = () => (
  {
    type: actionTypes.GAME_READY,
  }
);

export const storingComplete = () => ({
  type: actionTypes.DATA_STORED,
});

export const storeGameData = gameData => (dispatch) => {
  localStorage.setItem('click-the-box', JSON.stringify(gameData));
  dispatch(storingComplete());
};

export const checkGameData = gameData => (dispatch) => {
  const data = localStorage.getItem('click-the-box');
  if (!data) {
    dispatch(storeGameData(gameData));
  } else {
    const fetchedData = JSON.parse(data);
    dispatch(getData(fetchedData));
  }
  dispatch(gameReady());
};

// ////////////PLAYER AND LVL SELECT////////////

export const storeNewData = gameData => (dispatch) => {
  localStorage.setItem('click-the-box', JSON.stringify(gameData));
  dispatch(storingComplete());
};


export const submitNewPlayer = newPlayer => ({
  type: actionTypes.SUBMIT_NEW_PLAYER,
  newPlayer,
});

export const invalidUsername = () => ({
  type: actionTypes.INVALID_USERNAME,
});


export const retryUsername = () => ({
  type: actionTypes.RETRY_USERNAME,
});

export const selectPlayer = (playerName, playerIndex) => ({
  type: actionTypes.SELECT_PLAYER,
  playerName,
  playerIndex,
});

export const selectLevel = lvlNumber => ({
  type: actionTypes.SELECT_LEVEL,
  lvlNumber,
});

export const switchPlayer = () => ({
  type: actionTypes.SWITCH_PLAYER,
});

export const switchLvl = () => ({
  type: actionTypes.SWITCH_LVL,
});
export const deletePlayer = (playerName, index) => ({
  type: actionTypes.DELETE_PLAYER,
  playerName,
  index,
});
// //////////CHARTS/////////////////////
export const showCharts = chartLevel => ({
  type: actionTypes.SHOW_CHARTS,
  chartLevel,
});

export const hideChart = () => ({
  type: actionTypes.HIDE_CHART,
});


// /////////////GAMEPLAY///////////////////
export const gameStart = (positionX, positionY) => ({
  type: actionTypes.GAME_START,
  position: [positionX, positionY],
});

const nextSteps = (positionX, positionY) => ({
  type: actionTypes.NEXT_STEPS,
  position: [positionX, positionY],
});

const boxActivated = (positionX, positionY) => ({
  type: actionTypes.BOX_ACTIVATED,
  position: [positionX, positionY],
});

const checkTheBox = (positionX, positionY) => ({
  type: actionTypes.CHECK_THE_BOX,
  position: [positionX, positionY],
});

export const gameFinish = (positionX, positionY) => ({
  type: actionTypes.GAME_FINISH,
  position: [positionX, positionY],
});

export const boxClicked = (gameStarted, positionX, positionY) => (dispatch) => {
  if (!gameStarted) {
    dispatch(gameStart(positionX, positionY));
    dispatch(nextSteps(positionX, positionY));
  } else {
    dispatch(checkTheBox(positionX, positionY));
    dispatch(boxActivated(positionX, positionY));
    dispatch(gameFinish(positionX, positionY));
  }
};

export const nextLvl = () => ({
  type: actionTypes.NEXT_LVL,
});


export const timerTick = () => ({
  type: actionTypes.TIMER_TICK,
});

// //////////TOP SCORES//////////////////

export const showTopScores = () => ({
  type: actionTypes.SHOW_TOP_SCORES,
});
