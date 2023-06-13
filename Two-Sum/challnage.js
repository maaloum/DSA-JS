// HashMap : the idea is to find the complement of an item to reach the target then store its index and val
/*
    {5,2,4} -> 6

    hashMap :
    K -> v
  0 1 -> 0  (5 + k = 6) with index 0;
//   check if 2 exsits in the hashmap
  1 4 -> 1 (2 + k = 6) with index 1;
  //   check if 4 exsits in the hashmap
  2 2 -> 2 (4 + k = 6) with index 2;  
  
  return 1, 2
*/

/*
Algo
1 Create an empty hash map.
2 Iterate over the array and for each element:
1.1 Calculate the complement by subtracting the element from the target.
1.2 Check if the complement exists in the hash map.
1.3 If the complement exists, return the indices of the current element and the idex of complement.
1.4 If the complement does not exist, add the element and its index to the hash map.
3 If no pair is found, return null or an empty result.


*/


var twoSum = function(nums, target) {
    let sum = 0;
    const preValues = new Map();

    for(let i =0; i< nums.length; i++){
        let complement = target - nums[i];
        if(preValues.has(complement)){
            return [preValues.get(complement), i];
        }
        else {
            preValues.set(nums[i], i);
        }
        
    }
    
}; 

// Brute force solution

// const twoSum = (nums, target) => {
//     let sum = 0;

//     for(let i =0; i< nums.length; i++){
//         for(let j= i+1; j< nums.length; j++){
//             sum = nums[i] + nums[j]
//             if(sum === target) 
//             return [i, j]
//         }

//     }

// }


console.log(twoSum([2,7,11,15], 9));
console.log(twoSum([3,2,4], 6));
console.log(twoSum([3,3], 6));
console.log(twoSum([3,2,3], 6))
