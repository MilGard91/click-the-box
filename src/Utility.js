export const isItInArray = (arr, el) => {
    let i, j, current;
    for (i = 0; i < arr.length; i++) {
        if (el.length === arr[i].length) {
            current = arr[i];
            for (j = 0; j < el.length && el[j] === current[j]; ++j);
            if (j === el.length) {
                return true;
            }
        }
    }
    return false;
};

export const positionInArray = (arr, el) => {
    let i, j, current;
    for (i = 0; i < arr.length; i++) {
        if (el.length === arr[i].length) {
            current = arr[i];
            for (j = 0; j < el.length && el[j] === current[j]; ++j);
            if (j === el.length) {
                return i;
            }
        }
    }
    return -1;
};
