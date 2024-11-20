function passwordGenerator(arr) {
    let [str1, str2, replaceStr] = arr;
    let concatenatedStr = str1 + str2;
    let vowels = ['a', 'e', 'o', 'i', 'u'];
    let index = 0;

    for (let letter of concatenatedStr) {
        if (vowels.includes(letter)) {
            let newLetter = replaceStr[index].toUpperCase();
            concatenatedStr = concatenatedStr.replace(letter, newLetter);
            index++;

            if (index >= replaceStr.length) {
                index = 0;
            }
        }
    }

    let pass = concatenatedStr.split('').reverse().join('');
    console.log(`Your generated password is ${pass}`);
    
}
passwordGenerator([
    'ilovepizza', 'ihatevegetables',
    'orange'
    ]);