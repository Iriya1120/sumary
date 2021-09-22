/*
 * @lc app=leetcode.cn id=6 lang=javascript
 *
 * [6] Z 字形变换
 */

// @lc code=start
/**
 * @param {string} s
 * @param {number} numRows
 * @return {string}
 */
var convert = function(s, numRows) {
    if(numRows == 1) return s
    const res = []
    for(let i = 0; i < numRows; i++) res[i] = ''
    let down = false
    let loc = 0
    for(const c of s) {
        res[loc] += c;
        if(loc == 0 || loc == numRows - 1)
            down = !down;
        loc += down ? 1 : -1;
    }
    return res.join('')
};
// @lc code=end

