function oddOccurrences(str) {
    let occurrences = new Map();
    let elements = str.split(' ');

    for (let element of elements) {
        element = element.toLowerCase();

        if (occurrences.has(element)) {
            let oldOccurrences = occurrences.get(element);
            occurrences.set(element, oldOccurrences + 1)
        } else {
            occurrences.set(element, 1);
        }
    }

    let result = [];
    
    for (let [word, wordRepeat] of occurrences) {
        if (wordRepeat % 2 === 1) {
            result.push(word);
        }
    }

    console.log(result.join(' '));  
}

oddOccurrences('Java C# Php PHP Java PhP 3 C# 3 1 5 C#');