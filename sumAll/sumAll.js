const sumAll = function(...theArgs) {
    if (theArgs[0] > theArgs[1]) {
        theArgs = [theArgs[1], theArgs[0]]
    } else if (typeof theArgs[0] != 'number' || typeof theArgs[1] != 'number' || theArgs[0] < 0 || theArgs[1] < 0) {
        return 'ERROR'
    }
    let sumArray = [];
    for (let i = theArgs[0]; i <= theArgs[1]; i++) {
        sumArray.push(i);
    }
    let sum = sumArray.reduce((acc, val) => acc + val, 0);
    return sum;
}

module.exports = sumAll
