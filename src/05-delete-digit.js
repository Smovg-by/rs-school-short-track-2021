/**
 * Given some integer, find the maximal number you can obtain
 * by deleting exactly one digit of the given number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For n = 152, the output should be 52
 *
 */
function deleteDigit(n) {
  const initNum = n;
  let maxNum = 0;
  let tempNum;
  let numArr = []; // convert string to a number, then to an array
  numArr = initNum.toString().split('');
  for (let i = 0; i < numArr.length; i++) {
    // iterate array
    tempNum = numArr[i]; // assign numArr value to a temp variable
    // tempIndex = i;
    delete numArr[i]; // exclude element from array
    if (maxNum <= Number(numArr.join(''))) {
      // compare array w/o deleted number to maximum
      maxNum = Number(numArr.join(''));
    }
    numArr[i] = tempNum; // get back the deleted number to an array
  }
  return maxNum;
}

module.exports = deleteDigit;
