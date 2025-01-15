function wordsTracker(arr) {
    let searchedWords = arr.shift().split(' ');
    let wordsNeeded = {};
    for (const word of searchedWords) {
        wordsNeeded[word] = 0;
    }

    for (const word of arr) {
        if (word in wordsNeeded) {
            wordsNeeded[word]++;
        }
    }

    let entries = Object.entries(wordsNeeded).sort((a, b) => b[1] - a[1]);
    for (const [word, needed] of entries) {
        console.log(`${word} - ${needed}`);

    }
}
wordsTracker([
    'this sentence',
    'In', 'this', 'sentence', 'you', 'have', 'to', 'count', 'the', 'occurrences', 'of', 'the', 'words', 'this', 'and', 'sentence', 'because', 'this', 'is', 'your', 'task'
]
);