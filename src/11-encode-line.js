/**
 * Given a string, return its encoding version.
 *
 * @param {String} str
 * @return {String}
 *
 * @example
 * For aabbbc should return 2a3bc
 *
 */
function encodeLine(str) {
  const initString = str;
  let counter = 1;
  const codeArr = [];
  let codeStr = '';
  for (let i = 1; i < initString.length + 1; i++) {
    // iterate string. length + 1 add to avoid 'last character error',
    // when we have nothing to compare the last symbol with
    if (initString[i] === initString[i - 1]) {
      // plus counter is previous character match the currrent one
      counter++;
    } else if (initString[i] !== initString[i - 1]) {
      // if previous character does not match current push counter if it is >1 and push character
      if (counter > 1) {
        codeArr.push(counter);
      }
      codeArr.push(initString[i - 1]);
      counter = 1;
    }
  } // join the array to get the string
  codeStr = codeArr.join('');
  return codeStr;
}

module.exports = encodeLine;
