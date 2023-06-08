// Create a new array result
// check if the last character is === as the first char of the next word


function lastFirstLetter(words){
    var firstLetter = words[0].charAt(words[1]. length - 1);
    var lastLetter = words[0].charAt(0);
    const reults = []
    for(let word of words){
        console.log(word[0].charAt(0))
    }
}

lastFirstLetter(['hello', 'World'])