function printCommonElements(arr1, arr2) {
    for (let i = 0; i < arr1.length; i++) {
        for (let j = 0; j < arr2.length; j++) {
            if (arr1[i] === arr2[j]) {
                console.log(arr1[i]);
            }
        }
    }
}

let array1 = ['Hey', 'hello', 2, 4, 'Peter', 'e'];
let array2 = ['Petar', 10, 'hey', 4, 'hello', '2'];

printCommonElements(array1, array2);