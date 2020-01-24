const repeatString = function(wordString, times) {
    if (times < 0){
        return 'ERROR';
    } else{
        let string = '';
        for(let i = 0; i < times; i++){
            string += wordString;
        } 
        return string;
    }
}

module.exports = repeatString
