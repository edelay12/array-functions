/*
8. Merge arrays
Imagine you have 2 arrays which have already been sorted. Write an algorithm to merge the 2 arrays into a single array, which should also be sorted.

Input:[1, 3, 6, 8, 11] and [2, 3, 5, 8, 9, 10]
Output:[1, 2, 3, 3, 5, 6, 8, 8, 9, 10, 11]
*/

function MergeArrays(arr1, arr2){
    let arr3 = arr1.concat(arr2);
   arr3 = arr3.sort((a, b) => {return a-b});
   return console.log(arr3)
}

let arr1 = [1, 3, 6, 8, 11];
let arr2 = [2, 3, 5, 8, 9, 10];

MergeArrays(arr1, arr2);