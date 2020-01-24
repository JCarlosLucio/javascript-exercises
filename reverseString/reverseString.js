const reverseString = function(word) {
    let reverseWord = '';
    for (let i = 1; i < word.length + 1; i++) {
        reverseWord += word.charAt(word.length - i)
    }
    return reverseWord;
}

module.exports = reverseString
