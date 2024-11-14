function revealWords(wordsStr, text) {
    let words = wordsStr.split(', ');
    for (const word of words) {
        let starCount = word.length;
        let wordWithStars = '*'.repeat(starCount);
        text = text.replace(wordWithStars, word);
    }

    console.log(text); 
}
revealWords('great', 'softuni is ***** place for learning new programming languages');