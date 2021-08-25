/*
 * @lc app=leetcode.cn id=234 lang=javascript
 *
 * [234] 回文链表
 */

// @lc code=start
/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {boolean}
 */
var isPalindrome = function(head) {
    let arr = []
    while(head){
        arr.push(head.val)
        head = head.next
    }
    let pre = 0, suf = arr.length - 1
    while(pre < suf){
        if(arr[pre] != arr[suf]){
            return false
        }
        pre ++
        suf --
    }
    return true
};
// @lc code=end

