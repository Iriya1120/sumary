// 简单方法
// function quickSort(nums){
//     if(nums.length <= 1) return nums
//     // 获取第一个值为pivot
//     let pivot = nums.shift()
//     let left = []
//     let right = []

//     // 循环，将小的放在left， 将大的放在right
//     for(let i = 0; i < nums.length; i++){
//         if(nums[i] < pivot) left.push(nums[i])
//         else right.push(nums[i])
//     }

//     return [...quickSort(left), pivot, ...quickSort(right)]
// }

// 定义方法
function quickSort(nums){
    const _quickSort = (left, right) => {
        if(left > right) return
        let leftPoint = left
        let rightPoint = right
        let pivot = nums[left]

        while(leftPoint != rightPoint){
            while(leftPoint < rightPoint && pivot <= nums[rightPoint]) rightPoint --
            while(leftPoint < rightPoint && pivot >= nums[leftPoint]) leftPoint ++
            [nums[leftPoint], nums[rightPoint]] = [nums[rightPoint], nums[leftPoint]]
        }
        [nums[left], nums[rightPoint]] = [nums[rightPoint], nums[left]]
        _quickSort(left, leftPoint - 1)
        _quickSort(rightPoint + 1, nums.length - 1)
    }
    _quickSort(0, nums.length - 1)

    return nums
}

console.log(quickSort([0,3,3,-5,6,0,2,-1,-1,3]));