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
  const searchValue = value;
  let maxElem = arr.length - 1;
  let minElem = 0;
  let midElem;
  let found = false;
  let searchIndex;
  // do binary search while shwitcher is false and array length more than 1 element
  while (found === false && minElem <= maxElem) {
    // divide array by half
    midElem = Math.floor((maxElem + minElem) / 2);
    // compare elements - midElem match we need? switch to 'true'
    if (arr[midElem] === searchValue) {
      found = true;
      searchIndex = midElem; // determine if our element in the beggining of the array
    } else if (arr[midElem] > searchValue) {
      maxElem = midElem - 1; // determine if our element in the end of the array
    } else if (arr[midElem] < searchValue) {
      minElem = midElem + 1;
    }
  }
  return searchIndex;
}

module.exports = findIndex;
