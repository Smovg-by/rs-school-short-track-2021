/**
 * Given a number, replace this number with
 * the sum of its digits until we get to a one digit number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For 100, the result should be 1 (1 + 0 + 0 = 1)
 * For 91, the result should be 1 (9 + 1 = 10, 1 + 0 = 1)
 *
 */
function getSumOfDigits(n) {
  let num = n;
  num = num.toString();
  let acc = 0;
  for (let i = 0; i < num.length; i++) {
    acc += Number(num[i]);
  }
  // if we got more than 1 digit, call the function again (recursion)
  if (acc.toString().length > 1) {
    return getSumOfDigits(acc);
  }
  return acc;
}

module.exports = getSumOfDigits;
