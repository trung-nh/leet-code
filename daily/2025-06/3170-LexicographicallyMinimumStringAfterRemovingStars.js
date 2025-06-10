/**
 * @param {string} s
 * @return {string}
 */
const clearStars = function(s) {
	let occurrenceMap = new Map();
	let curSmallestChar = 'z';
	let toBeRemovedIndexes = [];
	let sArray = s.split('');

	for (let i = 0; i < s.length; i++) {
		const curOccurrence = occurrenceMap.get(s[i]) ?? [];
		if (s[i] !== '*') {
			curOccurrence.push(i);
			occurrenceMap.set(s[i], curOccurrence);
			curSmallestChar = s[i] < curSmallestChar
				? s[i]
				: curSmallestChar;
		} else {
			const updatedOccurrence = occurrenceMap.get(curSmallestChar);
			const removedIndex = updatedOccurrence.pop();
			occurrenceMap.set(s[i], updatedOccurrence);
			toBeRemovedIndexes.push(i, removedIndex);
			if (updatedOccurrence.length === 0) {
				curSmallestChar = findNextSmallestChar(curSmallestChar,
					occurrenceMap);
			}

		}
	}

	// remove asterisks and corresponding smallest characters
	toBeRemovedIndexes.sort((a, b) => b - a);
	for (let i = 0; i < toBeRemovedIndexes.length; i++) {
		sArray.splice(toBeRemovedIndexes[i], 1);
	}
	return sArray.join('');
};

const findNextSmallestChar = (curChar, occurrenceMap) => {
	const curCharCode = curChar.charCodeAt(0) - 'a'.charCodeAt(0);
	for (let i = curCharCode + 1; i < 26; i++) {
		const nextChar = String.fromCharCode('a'.charCodeAt(0) + i);
		const occurrence = occurrenceMap.get(nextChar);
		if (occurrence && occurrence.length > 0) {
			return nextChar;
		}
	}
	return null;
};