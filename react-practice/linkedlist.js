// Given a singly linked list node, return its length. The linked list has fields next and val.

// Constraints

// n ≤ 100,000 where n is the number of nodes in node

// [node = [5,4,3]     output 3
// node =[1,2]         output 2

class Solution {
    solve(node) {
        let lengthCount = 0
        while (node) {
            lengthCount++
            node = node.next
        }
        return lengthCount
    }
}
