/**
 * Given an array with heights, sort them except if the value is -1.
 *
 * @param {Array} arr
 * @return {Array}
 *
 * @example
 * arr = [-1, 150, 190, 170, -1, -1, 160, 180]
 *
 * The result should be [-1, 150, 160, 170, -1, -1, 180, 190]
 */
function sortByHeight(arr) {
  const initArr = arr.slice();
  let j = 0;
  const sortArr = arr
    .slice()
    .sort((a, b) => a - b)
    .filter((element) => element !== -1);
  for (let i = 0; i < arr.length; i++) {
    if (initArr[i] !== -1) {
      initArr[i] = sortArr[j];
      j++;
    }
  }
  return initArr;
}

module.exports = sortByHeight;
