/**
 * The MAC-48 address is six groups of two hexadecimal digits (0 to 9 or A to F),
 * separated by hyphens.
 *
 * Your task is to check by given string inputString
 * whether it's a MAC-48 address or not.
 *
 * @param {Number} inputString
 * @return {Number}
 *
 * @example
 * For 00-1B-63-84-45-E6, the output should be true.
 *
 */
function isMAC48Address(n) {
  // check if the length in 17 characters long
  const str = n;
  if (str.length !== 17) {
    return false;
  }
  // check '-' symbol after pair of letter/number
  for (let i = 2; i < str.length; i += 3) {
    if (str[i] !== '-') {
      return false;
    }
  }
  // check if the string consists only of A-F, 0-9 and '-' symbols
  const Reg = new RegExp(/[^A-F0-9-]/);
  if (Reg.test(str)) {
    return false;
  }
  return true;
}

module.exports = isMAC48Address;
