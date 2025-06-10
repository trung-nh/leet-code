/**
 * @param {string[]} words
 * @return {number}
 */
const longestPalindrome = function(words) {
    let result = 0;
    let length = words.length;
    let duplicatedCharsCount = 0;
    let map = new Map();
    for (let i = 0; i < length; i++) {
        const reverseString = words[i].split('').reverse().join('');
        if (map.has(reverseString)) {
            result += 4;
            map.set(reverseString, map.get(reverseString) - 1);
            if (reverseString[0] ===
                reverseString[1]) duplicatedCharsCount--;
        } else {
            map.set(words[i],
                !isNaN(map.get(words[i])) ? map.get(words[i]) + 1 : 1);
            if (words[i][0] === words[i][1]) duplicatedCharsCount++;
        }
    }
    if (duplicatedCharsCount) {
        result += 2;
    }
    return result;
};

console.log(longestPalindrome(['lc', 'cl', 'gg']));