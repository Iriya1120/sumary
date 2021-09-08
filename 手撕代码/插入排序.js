function insertSort(nums) {
    for(let i = 0; i < nums.length; i++){
        for(let j = i + 1; j > 0; j--){
            if(nums[j] < nums[j - 1])
                [nums[j],nums[j - 1]] = [nums[j - 1], nums[j]]
            else break
        }
    }
    return nums
}

console.log(insertSort([1,3,2,5,4,8,7,6]));