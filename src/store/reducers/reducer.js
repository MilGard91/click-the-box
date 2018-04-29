import * as actionTypes from '../actions/actionTypes';
import * as algorithms from './algorithms';
import * as utility from '../../Utility';

const intitialState = {
  gameReady: false,

  time: 0,
  counter: '~',
  newData: false,
  data: {
    users: [],
  },
  selectedPlayer: '',
  selectedPlayerIndex: null,
  wrongUsername: false,
  scores: [],
  levelScores: [],
  levelScore: [],
  userlevels: 1,
  lives: 1,
  level: 1,
  pickLvl: false,
  pickPlayer: true,
  topScore: '',
  showTopScores: false,
  showCharts: false,
  chartLevel: [],

  gameStarted: false,
  gameFinished: false,
  finishType: '',
  finishMessage: '',
  nextPosition: [],
  activePosition: [],
  mustPosition: [],
  lastClicked: [],
};


const reducer = (state = intitialState, action) => {
  switch (action.type) {
    case actionTypes.GET_DATA:
      return {
        ...state,
        data: { ...action.data },
      };

    case actionTypes.GAME_READY:
      return {
        ...state,
        gameReady: true,
      };

    case actionTypes.SUBMIT_NEW_PLAYER:
      return {
        ...state,
        data: {
          ...state.data,
          users: [...state.data.users, action.newPlayer],
          [action.newPlayer]: {
            scores: [],
            lives: 1,
            levels: 1,
            levelScores: [],
          },
        },
        newData: true,
      };
    case actionTypes.INVALID_USERNAME:
      return {
        ...state,
        wrongUsername: true,
        pickPlayer: false,
      };
    case actionTypes.RETRY_USERNAME:
      return {
        ...state,
        wrongUsername: false,
        pickPlayer: true,
      };
    case actionTypes.SELECT_PLAYER:
      return {
        ...state,
        selectedPlayer: action.playerName,
        selectedPlayerIndex: action.playerIndex,
        lives: state.data[action.playerName].lives,
        userlevels: state.data[action.playerName].levels,
        scores: [...state.data[action.playerName].scores],
        levelScores: [...state.data[action.playerName].levelScores],
        pickPlayer: false,
        pickLvl: true,
      };
    case actionTypes.SELECT_LEVEL:
      return {
        ...state,
        pickLvl: false,
        level: action.lvlNumber,
      };
    case actionTypes.SWITCH_PLAYER:
      return {
        ...state,
        pickPlayer: true,
        gameStarted: false,
        gameFinished: false,
        finishType: '',
        finishMessage: '',
        nextPosition: [],
        activePosition: [],
        mustPosition: [],
        lastClicked: [],
        counter: '~',
      };
    case actionTypes.SWITCH_LVL:
      return {
        ...state,
        pickLvl: true,
        gameStarted: false,
        gameFinished: false,
        finishType: '',
        finishMessage: '',
        nextPosition: [],
        activePosition: [],
        mustPosition: [],
        lastClicked: [],
        counter: '~',
      };
    case actionTypes.DELETE_PLAYER: {
      const deletePlayerData = { ...state.data };
      delete deletePlayerData[action.playerName];
      const deletePlayerArr = [...state.data.users];
      deletePlayerArr.splice(action.index, 1);
      deletePlayerData.users = deletePlayerArr;
      return {
        ...state,
        data: deletePlayerData,
        newData: true,

      }; }
    case actionTypes.DATA_STORED:
      return {
        ...state,
        newData: false,
      };

    case actionTypes.GAME_START:
      return {
        ...state,
        gameStarted: true,
        activePosition: [action.position],
        mustPosition: algorithms.gameBuild(state.level, [action.position]),
        counter: state.level,
        time: 0,
      };

    case actionTypes.TIMER_TICK:
      return {
        ...state,
        time: state.time + 1,
      };

    case actionTypes.NEXT_STEPS:
      return {
        ...state,
        nextPosition: algorithms.nextMoves([action.position], state.mustPosition),
      };
    case actionTypes.BOX_ACTIVATED:
      if (utility.isItInArray(state.nextPosition, action.position)) {
        return {
          ...state,
          activePosition: [...state.activePosition, action.position],
          mustPosition: algorithms.positionClicked(action.position, state.mustPosition),
          nextPosition: algorithms.nextMoves([action.position], algorithms.positionClicked(action.position, state.mustPosition)),
          levelScore: [...state.levelScore, state.time],

        };
      } return {
        ...state,
      };
    case actionTypes.GAME_FINISH:
      if (state.nextPosition.length === 0 && state.mustPosition.length === 0 && state.finishType !== 'Lost') {
        const arr = [...state.scores];
        if (arr.length > state.level - 1) {
          arr[state.level - 1] = [...state.scores[state.level - 1], state.time];
        } else {
          arr.push([state.time]);
        }
        let newLvlScore = [];
        let newLvlScores = [];
        newLvlScores = [...state.levelScores];
        if (state.level > state.levelScores.length) {
          newLvlScore = [...state.levelScore];
          newLvlScores.push(newLvlScore);
        } else if (state.levelScore[state.level - 1] < state.levelScores[state.level - 1][state.level - 1]) {
          newLvlScore = [...state.levelScore];
          newLvlScores[state.level - 1] = newLvlScore;
        } else {
          newLvlScore = [...state.levelScores[state.level - 1]];
          newLvlScores[state.level - 1] = newLvlScore;
        }
        let newLevels = state.userlevels;
        if (!(state.level < state.userlevels)) {
          newLevels += 1;
        }
        const newLives = state.lives + 1;
        return {
          ...state,
          gameFinished: true,
          level: state.level + 1,
          finishMessage: 'You finished level: ',
          finishType: 'Win',
          scores: arr,
          levelScores: newLvlScores,
          levelScore: [],
          userlevels: newLevels,
          lives: newLives,
          data: {
            ...state.data,
            [state.selectedPlayer]: {
              ...state.data[state.selectedPlayer],
              scores: arr,
              lives: newLives,
              levels: newLevels,
              levelScores: newLvlScores,
            },
          },
          newData: true,
        };
      } else if (state.nextPosition.length === 0 && !utility.isItInArray(state.nextPosition, action.position)) {
        if ((state.lives - state.counter) <= 0) {
          return {
            ...state,
            data: {
              ...state.data,
              [state.selectedPlayer]: {
                ...state.data[state.selectedPlayer],
                lives: 1,
                levels: 1,
              },
            },
            gameFinished: true,
            finishMessage: 'YOU LOST ALL YOUR LIVES :(',
            finishType: 'AllLost',
            level: 1,
            userlevels: 1,
            newData: true,
            lives: 1,
            levelScore: [],
          };
        }

        const newLives = state.lives - state.counter;
        return {
          ...state,
          gameFinished: true,
          finishMessage: 'You lost! :(',
          finishType: 'Lost',
          lives: newLives,
          data: {
            ...state.data,
            [state.selectedPlayer]: {
              ...state.data[state.selectedPlayer],
              lives: newLives,
            },
          },
          newData: true,
          levelScore: [],
        };
      } return {
        ...state,
        counter: state.counter - 1,
      };
    case actionTypes.NEXT_LVL:
      return {
        ...state,
        gameStarted: false,
        gameFinished: false,
        finishType: '',
        finishMessage: '',
        nextPosition: [],
        activePosition: [],
        mustPosition: [],
        lastClicked: [],
        counter: '~',
      };
    case actionTypes.SHOW_TOP_SCORES:
      return {
        ...state,
        showTopScores: !state.showTopScores,
      };
    case actionTypes.SHOW_CHARTS:
      return {
        ...state,
        showTopScores: !state.showTopScores,
        showCharts: !state.showCharts,
        chartLevel: [...state.levelScores[action.chartLevel - 1]],
      };
    case actionTypes.HIDE_CHART:
      return {
        ...state,
        showCharts: !state.showCharts,
        showTopScores: !state.showTopScores,
      };
    default: return state;
  }
};

export default reducer;
