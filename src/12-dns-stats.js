/**
 * Given an array of domains, return the object with the appearances of the DNS.
 *
 * @param {Array} domains
 * @return {Object}
 *
 * @example
 * domains = [
 *  'code.yandex.ru',
 *  'music.yandex.ru',
 *  'yandex.ru'
 * ]
 *
 * The result should be the following:
 * {
 *   '.ru': 3,
 *   '.ru.yandex': 3,
 *   '.ru.yandex.code': 1,
 *   '.ru.yandex.music': 1,
 * }
 *
 */
function getDNSStats(domains) {
  let domainsArray = [];
  domainsArray = [...domains]; // clone array
  const domStatsObj = {}; // create new object
  if (domainsArray.length === 0) {
    // if there is nothing to maintain - return empty object
    return domStatsObj;
  }
  let counter = 0;
  let addStr = '';
  // add a '.' to the begginning of each array item (to find words boundaries than)
  for (let j = 0; j < domainsArray.length; j++) {
    domainsArray[j] = `.${domainsArray[j]}`;
  }
  // add the first property to the object, We need it to compare strings later
  let tempStr = domainsArray[0];
  let pointPos = tempStr.lastIndexOf('.');
  let strPartTemp = tempStr.substring(pointPos, tempStr.length);
  // cut the array item string until the length > 0
  while (domainsArray.join('').length !== 0) {
    for (let i = 0; i < domainsArray.length; i++) {
      if (domainsArray[i].length > 0) {
        tempStr = domainsArray[i];
        pointPos = tempStr.lastIndexOf('.');
        const strPart = tempStr.substring(pointPos, tempStr.length);
        // if previous property KEY differ from current,
        // reset counter and remember perevious KEY name
        if (strPartTemp !== strPart) {
          counter = 1;
          addStr += strPartTemp;
          strPartTemp = strPart;
        } else {
          counter++;
        }
        // add a KEY and VALUE to the object
        domStatsObj[addStr + strPart] = counter;
        // cut the current string until next '.'
        domainsArray[i] = domainsArray[i].substring(0, pointPos);
      }
    }
    // reset counter after iteration
    counter = 0;
  }
  return domStatsObj;
}

module.exports = getDNSStats;
