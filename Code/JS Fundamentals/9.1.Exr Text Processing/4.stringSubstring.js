function stringInclusion(word, text) {
    text = text.toLowerCase().split(' ');
    if (text.includes(word)) {
        console.log(word);
    } else {
        console.log(`${word} not found!`);
        
    }
}

stringInclusion('javascript', 'JavaScript is the best programming language');