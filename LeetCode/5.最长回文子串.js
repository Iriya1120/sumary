/*
 * @lc app=leetcode.cn id=5 lang=javascript
 *
 * [5] 最长回文子串
 */

// @lc code=start
/**
 * @param {string} s
 * @return {string}
 */
// 中心扩散法
var longestPalindrome = function(s) {
    let len = s.length
    if(len < 2) return s
    
    let begin = 0;
    let maxLen = 1;
    

    const getMaxLen = (left, right) => {
        while(left >= 0 && right < len){
            if(s[left] === s[right]){
                left --
                right ++
            }else {
                break
            }
        }
        return right - left - 1
    }

    for(let i = 0; i < len - 1; i++){
        let oddLen = getMaxLen(i, i)
        let evenLen = getMaxLen(i, i + 1)
        let curMaxLen = Math.max(oddLen, evenLen)
        if(curMaxLen > maxLen){
            maxLen = curMaxLen
            begin = i - Math.floor((maxLen - 1) / 2)
        }
    }

    return s.substring(begin, begin + maxLen)
};
// @lc code=end

