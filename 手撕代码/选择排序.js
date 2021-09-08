function searchSort(nums) {
    for(let i = 0; i < nums.length; i++){
        let min = Infinity
        let index = -1
        for(let j = i; j < nums.length; j++){
            if(nums[j] < min){
                min = nums[j]
                index = j
            }
        }
        [nums[i], nums[index]] = [nums[index],nums[i]]
    }
    return nums
}

console.log(searchSort([1,3,2,5,4,8,7,6]));