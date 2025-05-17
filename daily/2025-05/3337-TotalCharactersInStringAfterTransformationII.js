/**
 * @param {string} s
 * @param {number} t
 * @param {number[]} nums
 * @return {number}
 */
const lengthAfterTransformations = function(s, t, nums) {
    const MOD = Math.pow(10, 9) + 7;
    let currentFrequency = Array(26).fill(0);
    let length = s.length;

    for (let i = 0; i < length; i++) {
        currentFrequency[s.charCodeAt(i) - 'a'.charCodeAt(0)]++;
    }

    for (let round = 0; round < t; round++) {
        let nextFrequency = Array(26).fill(0);
        for (let i = 0; i < 26; i++) {
            let frequency = currentFrequency[i];
            if (frequency === 0) continue;
            let numOfNextChar = nums[i];
            length += frequency * (numOfNextChar - 1);
            length %= MOD;

            for (let j = 1; j <= numOfNextChar; j++) {
                nextFrequency[(i + j) % 26] = currentFrequency[(i + j) % 26] +
                    frequency;
            }
        }
        currentFrequency = nextFrequency;
    }

    return length;
};

console.log(lengthAfterTransformations('abcyy', 2, Array(25).fill(1).push(2)));
console.log(lengthAfterTransformations('azbk', 1, Array(26).fill(2)));