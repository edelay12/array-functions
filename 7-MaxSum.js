function findMaxSum(arr){
    let max = 0
arr.map((item, index) => {
  for(let i of arr) {
      if(arr.indexOf(i) != index) {
         let sum = item + i;
         if (sum > max) max = sum
      }
  }
        });
        console.log(max)
        }


let input = [4, 6, -3, 5, -2, 1];
findMaxSum(input);