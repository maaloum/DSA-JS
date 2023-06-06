
// [-1, 0, -1, 2, -1, 4] => [[-1, 0 , 1], [-1, -1 2]]
// [-1, -1, 0, 1, 2, 4] sorted
// i = 0;  nums[i] = -1, left = 1, nums[left] = -1, nums[right] =4, right = 5, sum = 3 , target = 1 
// sum > target => right --;
// i =1; nums[i] = -1, left =2, right = 3, sum = 1, target = 1 

var threeSum = function(nums) {

    // check if all element are positives
const positives_nums = nums.every(el => el > 0);
// result 
const result = [];
// check if all element are zeros
const zeros_nums = nums.every(el => el ==0);
if(positives_nums || nums.length < 3 ) return [];
if(zeros_nums) return nums;
nums.sort((a,b) => a-b);
for(var i = 0; i< nums.length; i++){
    if(i>0 && nums[i] === nums[i-1]) continue
    let left = i+1;
    let right = nums.length -1;
    const target = 0 -nums[i]
    while(left < right){
        const sum = nums[left] + nums[right];
        if(target < sum){
            right--;
        }
        else if(target > sum){
            left++;
        } else {
            result.push([nums[i], nums[left], nums[right]]);
            while(nums[left] === nums[left + 1]) left++;
            while(nums[right] === nums[right -1]) right--;
            left++;
            right--;
        }
        
    }
}

return result

};

console.log(threeSum([-1, 0, -1, 2, -1, 4]))