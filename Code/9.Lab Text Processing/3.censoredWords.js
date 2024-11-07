function censorWord(text, word) {
    let censoredText = text.split(word).join('*'.repeat(word.length));
    console.log(censoredText);
}

// Example usage
censorWord('A small sentence with some words', 'small'); // Output: A ***** sentence with some words
censorWord('Find the hidden word', 'hidden'); // Output: Find the ****** word
