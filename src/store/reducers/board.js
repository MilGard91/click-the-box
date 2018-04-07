import * as actionTypes from '../actions/actionTypes';
import * as algorithms from './algorithms';

const intitialState = {
    nextPosition: [],
    activePosition: [],
    mustPosition: [],
    lastClicked: [],
    level: 10,
}


const reducer = (state = intitialState, action) => {
    switch (action.type) {
        case actionTypes.GAME_START:
            let must = algorithms.gameBuild(state.level, [[action.activePositionX, action.activePositionY]]);
            return {
                ...state,
                activePosition: [[action.activePositionX, action.activePositionY]],
                mustPosition: must,
                nextPosition: algorithms.nextMoves([[action.activePositionX, action.activePositionY]], must),
            };
        case actionTypes.BOX_CLICKED:
            let newMust = algorithms.positionClicked( [[action.activePositionX, action.activePositionY]], state.mustPosition)
            return {
                ...state,
                activePosition: [...state.activePosition, [action.activePositionX, action.activePositionY]],
                mustPosition: newMust,
                nextPosition: algorithms.nextMoves([[action.activePositionX, action.activePositionY]], newMust),
            }

        default: return state;
    }
}

export default reducer;