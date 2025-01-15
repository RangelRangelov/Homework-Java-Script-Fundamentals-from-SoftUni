function sortBy2Criteria(arr) {
    function comparator(a, b) {
        let firstCriteria = a.length - b.length;
        if (firstCriteria !== 0) {
            return firstCriteria;
        } else {
            return a.toUpperCase().localeCompare(b.toUpperCase())
        }
    }

    let sortedArr = arr.sort(comparator);
    console.log(sortedArr.join('\n')); 
}

sortBy2Criteria(['Isacc', 'Theodor', 'Jack', 'Harrison', 'George']);