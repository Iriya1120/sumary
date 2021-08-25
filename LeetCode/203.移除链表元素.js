/*
 * @lc app=leetcode.cn id=203 lang=javascript
 *
 * [203] 移除链表元素
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
 * @param {number} val
 * @return {ListNode}
 */
var removeElements = function(head, val) {
    let res = new ListNode()
    let cur = res

    while(head){
        cur.next = null
        if(head.val != val){
            cur.next = head
            cur = cur.next
        }
        head = head.next
    }
    return res.next
};
// @lc code=end

