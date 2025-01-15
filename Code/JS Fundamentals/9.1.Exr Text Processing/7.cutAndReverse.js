function cutAndReverse(arr) {
   let midIndex = arr.length / 2;
   let leftHalf = arr.substring(0, midIndex);
   let rigthhalf = arr.substring(midIndex);
   
   let leftHalfReverse = leftHalf.split('').reverse().join('');
   let rigthHalfReverse = rigthhalf.split('').reverse().join('');

   console.log(leftHalfReverse);
   console.log(rigthHalfReverse);
}

cutAndReverse('tluciffiDsIsihTgnizamAoSsIsihT');