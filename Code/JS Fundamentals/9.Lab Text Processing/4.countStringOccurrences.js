function countOccurrences(text, word) {
    let words = text.split(' ');
    let count = 0;

    for (let w of words) {
        if (w === word) {
            count++;
        }
    }

    console.log(count);
}

// Example usage
countOccurrences('This is a word and it also is a sentence', 'is'); // Output: 2
countOccurrences('softuni is great place for learning new programming languages', 'softuni'); // Output: 1
