/**
 * There's a list of file, since two files cannot have equal names,
 * the one which comes later will have a suffix (k),
 * where k is the smallest integer such that the found name is not used yet.
 *
 * Return an array of names that will be given to the files.
 *
 * @param {Array} names
 * @return {Array}
 *
 * @example
 * For input ["file", "file", "image", "file(1)", "file"],
 * the output should be ["file", "file(1)", "image", "file(1)(1)", "file(2)"]
 *
 */
function renameFiles(names) {
  const initArr = names;
  let counter = 0;
  let indx;
  // set up a new RegExp to find (number) part in the end of the array element
  const Reg = new RegExp(/\(\d\)+$/gm);
  for (let i = 0; i < initArr.length; i++) {
    // do add (counter) to the elemets while there are matching elements in the array
    while (initArr.indexOf(initArr[i], i + 1) !== -1) {
      // to distinguish true (number) from false (number) lets do this, if true, reset counter
      if (Reg.test(initArr[i].toString())) {
        counter = 0;
      }
      // iterate counter if elements match
      counter++;
      indx = initArr.indexOf(initArr[i], i + 1);
      initArr[indx] = `${initArr[indx]}(${counter})`;
    }
  }
  return initArr;
}

module.exports = renameFiles;
