/**
 * @param {string[]} words
 * @param {number[]} groups
 * @return {string[]}
 */

// Approach 1 : #DP
const getLongestSubsequence = function(words, groups) {
    let result = [words[0]];
    let length = groups.length;
    // dp[i] --> length of th longest subsequence ending in words[i]
    let dp = Array(length - 1);
    dp[0] = 1;
    for (let i = 1; i < length; i++) {
        if (groups[i] === groups[i - 1]) {
            dp[i] = dp[i - 1];
        } else {
            dp[i] = dp[i - 1] + 1;
            result.push(words[i]);
        }
    }

    return result;
};

// Approach 2 : #Greedy
const getLongestSubsequence2 = function(words, groups) {
    let result = [words[0]];
    for (let i = 1; i < groups.length; i++) {
        if (groups[i] !== groups[i - 1]) {
            result.push(words[i]);
        }
    }
    return result;
};