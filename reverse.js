function reverseWord(str) {
    let words = [];
    words = str.match(/\S+/g);
    let result = "";

    for (let i = 0; i < words.length; i++) {
        result += words[i].split('').reverse().join('') + ' ';
    }
    return result;
}

console.log(reverseWord("what is your name"))