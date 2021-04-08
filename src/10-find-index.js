/**
 * Given a sorted array, find the index of the element with the given value.
 * Time complexity should be O(logN)
 *
 * @param {Array} array
 * @param {Number} value
 * @return {Number}
 *
 * @example
 * For ([1, 2, 3], 1) should return 0
 * For ([1, 2, 3], 2) should return 1
 *
 */
function findIndex(array, value) {
  const arr = array;
  let searchValue = value;
  let maxElem = arr.length -1;
  let minElem = 0;
  let midElem = Math.floor((maxElem + minElem) / 2);
  let found = false;

  while ((found === false && minElem <= maxElem)) {
    if (arr[midElem] === searchValue) {
      found = true;
      searchIndex = midElem;
    } else if (arr[midElem] > searchValue) {
      maxElem = midElem - 1;
    } else if (arr[midElem] < searchValue) {
      minElem = midElem + 1;
    }
  }
  return searchIndex;
}

module.exports = findIndex;
