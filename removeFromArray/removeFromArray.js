const removeFromArray = function(list, ...theRemoves) {
    let cleanArray = list;
    for(let i = 0; i < theRemoves.length; i++){
        cleanArray = cleanArray.filter(element => element != theRemoves[i]); 
    }
    return cleanArray;
}

module.exports = removeFromArray
