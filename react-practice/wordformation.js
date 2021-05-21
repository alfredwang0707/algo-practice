// Given a list of strings words and a string letters, return the length of longest string in words that can be made from letters in letters. If no word can be made, return 0.

// Note that you can't reuse letters.

// Constraints

// n ≤ 10,000 where n is the length of words
// m ≤ 1,000 where m is the length of letters
// Example 1
// Input
// words = ["the", "word", "love", "scott", "finder", "dictionary"]
// letters = "fanierdow"
// Output
// 6
// Explanation
// We can make the word finder out of our letters, which has the longest length of 6.

// Example 2
// Input
// words = ["credit", "nirvana", "karma", "empathy", "hang", "aaaaaaaaa"]
// letters = "afnvlfkm"
// Output
// 0
// Explanation
// We can't make any of these words with the letters we have.

// build a map of count of each letter in letters and then traverse words checking 
// if you have enough letters to build the world, keeping track of the maximum length of those you can

// Implementation
// Time Complexity
// \mathcal{O}(n*w)O(n∗w) -----------------------------------------------------------------------

// Space Complexity
// \mathcal{O}(n)O(n) -----------------------------------------------------------------------

class Solution {
    solve(words, letters) {
        let m = new Map()
        for (let l of letters) {
            if (!m.has(l)) m.set(l, 1)
            else m.set(l, m.get(l) + 1)
        }
        let ans = 0
        for (let w of words) {
            let m2 = new Map(m)
            let p = true
            for (let l of w) {
                if (!m2.has(l) || m2.get(l) == 0) {
                    p = false
                    break
                }
                m2.set(l, m2.get(l) - 1)
            }
            if (p) ans = Math.max(ans, w.length)
        }
        return ans
    }
}
/* **************** other solution */
class Solution {
    solve(words, letters) {
        let letter = {}

        function freq(map, word) {
            for (let i = 0; i < word.length; i++) {
                map[word[i]] = map[word[i]] + 1 || 1
            }
        }
        freq(letter, letters)

        let max = 0
        let temp = {}
        let bool
        for (let i = 0; i < words.length; i++) {
            temp = {}
            freq(temp, words[i])
            bool = true

            for (let j = 0; j < words[i].length; j++) {
                if (!letter[words[i][j]] || letter[words[i][j]] < temp[words[i][j]]) {
                    bool = false
                    break
                }
            }
            if (bool) max = Math.max(max, words[i].length)
        }
        return max
    }
}