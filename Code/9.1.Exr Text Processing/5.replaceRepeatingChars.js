function replaceRepeatingChars(str) {
    let nonRepeatStr = '';
    let previousChar = '';

    for (const currChar of str) {
        if (currChar !== previousChar) {
            nonRepeatStr += currChar;
            previousChar = currChar;
        }
    }

    console.log(nonRepeatStr);   
}

replaceRepeatingChars('aaaaabbbbbcdddeeeedssaa');