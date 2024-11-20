function splitPascalCase(input) {
    let result = input.split(/(?=[A-Z])/).join(', ');
    console.log(result);
}

// Example usage
splitPascalCase('SplitMeIfYouCanHaHaYouCantOrYouCan');
// Output: Split, Me, If, You, Can, Ha, Ha, You, Cant, Or, You, Can
