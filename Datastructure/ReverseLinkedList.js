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

 function getTail(node) {
    if(node.next !== null ) {
        return getTail(node.next)
    } else {
        return node
    }
}

function reverseNode(node) {
    
    if(node.next !== null) {
        
        let nextNode = reverseNode(node.next)
        
        nextNode.next = node
        return node
    } else {
        return node
    }
}

var reverseList = function(head) {
    if(head === null){
            return head
    }
    const tail = getTail(head)
    reverseNode(head)
    head.next = null
    return tail
};