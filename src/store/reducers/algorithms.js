import { isItInArray, positionInArray } from '../../Utility';

const d = [[-3, 0], [-2, 2], [0, 3], [2, 2], [3, 0], [2, -2], [0, -3], [-2, -2]];


export const gameBuild = (lvl, start) => {

    if (lvl < 87) {
        const check = (res) => {
            if (res.length - 1 === lvl &&
                !(res[res.length - 1][0] < 0) &&
                !(res[res.length - 1][0] >= 10) &&
                !(res[res.length - 1][1] < 0) &&
                !(res[res.length - 1][1] >= 10) &&
                !isItInArray(res.slice(0, res.length - 1), res[res.length - 1])) {
                return res.slice(1);
            }
            else if (res[res.length - 1][0] < 0 ||
                res[res.length - 1][0] >= 10 ||
                res[res.length - 1][1] < 0 ||
                res[res.length - 1][1] >= 10 ||
                isItInArray(res.slice(0, res.length - 1), res[res.length - 1])) {
                return null;
            } else {
                let r = Math.floor(Math.random() * 8);
                return check(res.concat([[res[res.length - 1][0] + d[r][0], res[res.length - 1][1] + d[r][1]]])) ||
                    check(res.concat([[res[res.length - 1][0] + d[0][0], res[res.length - 1][1] + d[0][1]]])) ||
                    check(res.concat([[res[res.length - 1][0] + d[1][0], res[res.length - 1][1] + d[1][1]]])) ||
                    check(res.concat([[res[res.length - 1][0] + d[2][0], res[res.length - 1][1] + d[2][1]]])) ||
                    check(res.concat([[res[res.length - 1][0] + d[3][0], res[res.length - 1][1] + d[3][1]]])) ||
                    check(res.concat([[res[res.length - 1][0] + d[4][0], res[res.length - 1][1] + d[4][1]]])) ||
                    check(res.concat([[res[res.length - 1][0] + d[5][0], res[res.length - 1][1] + d[5][1]]])) ||
                    check(res.concat([[res[res.length - 1][0] + d[6][0], res[res.length - 1][1] + d[6][1]]])) ||
                    check(res.concat([[res[res.length - 1][0] + d[7][0], res[res.length - 1][1] + d[7][1]]]))
            }
        };
        return check([...start]);
    } else {const check = (res) => {
        if (res.length - 1 === lvl &&
            !(res[res.length - 1][0] < 0) &&
            !(res[res.length - 1][0] >= 10) &&
            !(res[res.length - 1][1] < 0) &&
            !(res[res.length - 1][1] >= 10) &&
            !isItInArray(res.slice(0, res.length - 1), res[res.length - 1])) {
            return res.slice(1);
        }
        else if (res[res.length - 1][0] < 0 ||
            res[res.length - 1][0] >= 10 ||
            res[res.length - 1][1] < 0 ||
            res[res.length - 1][1] >= 10 ||
            isItInArray(res.slice(0, res.length - 1), res[res.length - 1])) {
            return null;
        } else {
            return check(res.concat([[res[res.length - 1][0] + d[0][0], res[res.length - 1][1] + d[0][1]]])) ||
                check(res.concat([[res[res.length - 1][0] + d[1][0], res[res.length - 1][1] + d[1][1]]])) ||
                check(res.concat([[res[res.length - 1][0] + d[2][0], res[res.length - 1][1] + d[2][1]]])) ||
                check(res.concat([[res[res.length - 1][0] + d[3][0], res[res.length - 1][1] + d[3][1]]])) ||
                check(res.concat([[res[res.length - 1][0] + d[4][0], res[res.length - 1][1] + d[4][1]]])) ||
                check(res.concat([[res[res.length - 1][0] + d[5][0], res[res.length - 1][1] + d[5][1]]])) ||
                check(res.concat([[res[res.length - 1][0] + d[6][0], res[res.length - 1][1] + d[6][1]]])) ||
                check(res.concat([[res[res.length - 1][0] + d[7][0], res[res.length - 1][1] + d[7][1]]]))
        }
    };
    return check([...start]);}
};

export const nextMoves = (last, must) => {
    let options = [];
    let moves = []
    for (let i = 0; i < d.length; i++) {
        options.push([last[0][0] + d[i][0], last[0][1] + d[i][1]])
    }
    for (let i = 0; i < options.length; i++) {
        if (isItInArray(must, options[i]))
            moves.push(options[i])
    }
    return moves;
};

export const positionClicked = (last, must) => {
    let newMust = [...must];
    let k = positionInArray(newMust, last);
    newMust.splice(k, 1);
    return newMust;
}




