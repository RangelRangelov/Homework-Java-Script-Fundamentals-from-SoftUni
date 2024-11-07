function countWords(input) {
    let wordMap = new Map();

    input.forEach(word => {
        if (wordMap.has(word)) {
            wordMap.set(word, wordMap.get(word) + 1);
        } else {
            wordMap.set(word, 1);
        }
    });

    let sortedEntries = Array.from(wordMap.entries()).sort((a, b) => b[1] - a[1]);

    sortedEntries.forEach(([word, count]) => {
        console.log(`${word} -> ${count} times`);
    });
}

countWords(["Here", "is", "the", "first", "sentence", "Here", "is", "another", "sentence", "And", "finally", "the", "third", "sentence"]);
// Output:
// sentence -> 3 times
// Here -> 2 times
// is -> 2 times
// the -> 2 times
// first -> 1 times
// another -> 1 times
// And -> 1 times
// finally -> 1 times
// third -> 1 times

countWords(["dog", "bye", "city", "dog", "dad", "boys", "ginger"]);
// Output:
// dog -> 2 times
// bye -> 1 times
// city -> 1 times
// dad -> 1 times
// boys -> 1 times
// ginger -> 1 times
