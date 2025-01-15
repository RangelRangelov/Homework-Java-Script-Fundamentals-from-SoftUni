function substringFromString(str, startIndex, count) {
    let result = str.substr(startIndex, count);
    console.log(result);
}

// Example usage
substringFromString('ASentence', 1, 8); // Output: Sentence
substringFromString('SkipWord', 4, 7);  // Output: Word
