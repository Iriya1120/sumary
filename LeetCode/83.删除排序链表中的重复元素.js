/*
 * @lc app=leetcode.cn id=83 lang=javascript
 *
 * [83] 删除排序链表中的重复元素
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
 * @return {ListNode}
 */
var deleteDuplicates = function(head) {
    let map = new Map()
    let res = new ListNode()
    let cur = res
    while(head){
        if(!map.has(head.val)){
            map.set(head.val, true)
            cur.next = head
            cur = cur.next
        }else {
            cur.next = null
        }
        head = head.next
    }

    return res.next
};
// @lc code=end

