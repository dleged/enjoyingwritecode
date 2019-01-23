setToArray = (set) => {
    let index = -1;
    let result = [];
    if(set.constructor !== Set) return [];
    set.forEach(element => {
        result[++index] = element;
    });
    return result;
}

console.log(setToArray(new Set([1,2,3,4,5,1,2,3,4,5,'🌟','🌟'])));