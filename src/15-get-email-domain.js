/**
 * Given an email address, return it's domain.
 *
 * @param {String} email
 * @return {String}
 *
 * @example
 * For the input 'prettyandsimple@example.com', the output should be 'example.com'
 *
 */
function getEmailDomain(email) {
  const emailString = email;
  let domainArr = [];
  // create new regular expression: /(?<=\w@).*?(?=$)/gm
  // (?<=\w@) - look behind thhe string for matching any word char \w and symbol @
  // '.' - any character, '*?' - repeated unlimited times
  // (?=$) - look ahead to the position $ - 'end of the line'
  const reg = new RegExp(/(?<=\w@).*?(?=$)/gm);
  // get the array with matching result.
  domainArr = reg.exec(emailString);
  // Element '0' of .exec() array contains the matching strine - domain name
  return domainArr[0];
}

module.exports = getEmailDomain;
