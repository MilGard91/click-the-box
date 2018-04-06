import * as actionTypes from '../actions/actionTypes';

const intitialState = {
    startPosition: [],
    nextPosition: [],
    activePosition: [] ,
    mustPosition: [],
    lastClicked: [],
    level=1,
}

const directions = [[-3,0], [-2, 2], [0,3] [2,2], [3,0], [2,-2], [0,3], [-2 ,-2]];

const addingField = (cur, move) => {
    let moved = [cur[0]+move[0], cur[1]+move[1]];
    return moved;
}
const levelBuilder = (lvl, startPosition) => {
    
    for (let i=0; i<lvl; i++) {
        directions[Math.floor(Math.random() * 8)]
    }
}

const reducer = (state = intitialState, action) => {
    switch (action.type) {
        case actionTypes.GAME_START:
            return {
                ...state,
                startPosition:[[action.activePositionX, action.activePositionY]],
                activePosition: [[action.activePositionX, action.activePositionY]],
                nextPosition: [[action.activePositionX +1, action.activePositionY + 2]]
            };
        case actionTypes.BOX_CLICKED:
            return {
                ...state,
                activePosition: [...state.activePosition, [action.activePositionX, action.activePositionY]]
            }

        default: return state;
    }
}

export default reducer;