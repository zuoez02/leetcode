/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
const twoSum = function(nums, target) {
    const targetNums = [];
    for(let numsIndex = 0; numsIndex < nums.length; numsIndex++) {
        const num = nums[numsIndex];
        for (let targetNumsIndex = 0; targetNumsIndex < targetNums.length; targetNumsIndex++) {
            const targetNum = targetNums[targetNumsIndex];
            if (num === targetNum.number) {
                return [targetNum.index, numsIndex];
            }
        }
        targetNums.push({ index: numsIndex, number: target - num });
    }
    return [];
};

console.log(twoSum([2,7,11,15], 9));