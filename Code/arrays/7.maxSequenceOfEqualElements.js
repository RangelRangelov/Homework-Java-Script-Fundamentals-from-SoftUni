function maxSequence(arr) {
    let longestSeq = [];
    let firstElement = arr[0];
    let currSeq = [firstElement];

    for (let i = 1; i < arr.length; i++) {
        let currElement = arr[i];
        
        if (currElement === currSeq[0]) {
            currSeq.push(currElement);

            if (currSeq.length > longestSeq.length) {
                longestSeq = currSeq;
            }
        } else {
            currSeq = [currElement];
        }
    }

    console.log(longestSeq.join(' '));
}

maxSequence([2, 1, 1, 2, 3, 3, 2, 2, 2, 1]);