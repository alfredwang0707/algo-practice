// Given a lowercase alphabet string s, determine whether it has all unique characters.

// Constraints

// 0 ≤ n ≤ 100,000 where n is the length of s

// s ="abcde"  true
// s =" aab"  false
// s=""  true





// Make a dictionary and loop through the string's chars.
// If there is no key on the dictionary equal to the iterated letter, then make one, else, means that letter already appeared.
// Then inmediately returns false to avoid looping more uselessly.

// Implementation
// repeat Is the dictionary where letters are saved
// i Is the currently iterated letter

// Example #1
// testcase: s = "abca"

// Loops string:

// Iterates a, doesn't exist so repeat = {a: true}
// Iterates b, doesn't exist so repeat = {a: true, b: true}
// Iterates c, doesn't exist so repeat = {a: true, b: true, c: true}
// Iterates a, already exists so return false
// Time Complexity
// \mathcal{O}(n)O(n) Where n is the amount of letters before first ocurrence or the length of the string, in case there is no ocurrence. (Requires more time to loop)

// Space Complexity
// \mathcal{O}(n)O(n) Where n is the amount of letters before first ocurrence or the length of the string, in case there is no ocurrence. (repeat increases it's size the more different letters are iterated)

class Solution {
    solve(s) {
        let repeat = {}
        for (let i = 0; i < s.length; i++) {
            if (!repeat[s[i]]) repeat[s[i]] = true
            else return false
        }
        return true
    }
}

/* */
class Solution {
    solve(s) {
        // base case
        if (s === '') {
            return true
        }

        // we create an object to keep track of our char count in the map
        const set = {}
        const sl = s.length
        for (let i = 0; i < sl; i++) {
            let chars = s.charAt(i)
            // if there is no char in the map we add
            if (!set[chars]) {
                set[chars] = 1
            } else {
                // we saw more so obviously the string isn't unqiue
                return false
            }
        }

        // otherwise we found our unique string
        return true

    }
}