/**
 * In the popular Minesweeper game you have a board with some mines and those cells
 * that don't contain a mine have a number in it that indicates the total number of mines
 * in the neighboring cells. Starting off with some arrangement of mines
 * we want to create a Minesweeper game setup.
 *
 * @param {Array<Array>} matrix
 * @return {Array<Array>}
 *
 * @example
 * matrix = [
 *  [true, false, false],
 *  [false, true, false],
 *  [false, false, false]
 * ]
 *
 * The result should be following:
 * [
 *  [1, 2, 1],
 *  [2, 1, 1],
 *  [1, 1, 1]
 * ]
 */
function minesweeper(matrix) {
  const resArr = matrix.slice();
  for (let k = 0; k < resArr.length; k++) {
    for (let n = 0; n < resArr[k].length; n++) {
      // asiign all the 'false' cells number 0, to add bomb counter
      if (resArr[k][n] === false) {
        resArr[k][n] = 0;
      }
    }
  }
  // console.log(resArr);
  for (let i = 0; i < resArr.length; i++) {
    for (let j = 0; j < resArr[i].length; j++) {
      // check wether the bomb 'true' at the cell or not
      if (resArr[i][j] === true) {
        //
        //
        // RIGHT & LEFT
        // add +1 to the RIGHT cell if it exists and not a bomb "true"
        if (resArr[i][j + 1] !== undefined && resArr[i][j + 1] !== true) {
          resArr[i][j + 1] += 1;
        } // add +1 to the LEFT cell if it exists and not a bomb "true"
        if (resArr[i][j - 1] !== undefined && resArr[i][j - 1] !== true) {
          resArr[i][j - 1] += 1;
        }
        //
        //
        // TOP, TOP-RIGHT & TOP-LEFT
        // check wether the top array resArr[i - 1] exists
        if (resArr[i - 1] !== undefined) {
          // add +1 to the TOP cell if it exists and not a bomb "true"
          if (resArr[i - 1][j] !== undefined && resArr[i - 1][j] !== true) {
            resArr[i - 1][j] += 1;
          } // add +1 to the TOP-LEFT cell if it exists and not a bomb "true"
          if (
            resArr[i - 1][j - 1] !== undefined
            && resArr[i - 1][j - 1] !== true
          ) {
            resArr[i - 1][j - 1] += 1;
          }
          // add +1 to the TOP-RIGHT cell if it exists and not a bomb "true"
          if (
            resArr[i - 1][j + 1] !== undefined
            && resArr[i - 1][j + 1] !== true
          ) {
            resArr[i - 1][j + 1] += 1;
          }
        }
        //
        //
        // DOWN, DOWN-RIGHT & DOWN-LEFT
        // check wether the top array resArr[i + 1] exists
        if (resArr[i + 1] !== undefined) {
          // add +1 to the DOWN cell if it exists and not a bomb "true"
          if (resArr[i + 1][j] !== undefined && resArr[i + 1][j] !== true) {
            resArr[i + 1][j] += 1;
          } // add +1 to the DOWN-LEFT cell if it exists and not a bomb "true"
          if (
            resArr[i + 1][j - 1] !== undefined
            && resArr[i + 1][j - 1] !== true
          ) {
            resArr[i + 1][j - 1] += 1;
          }
          // add +1 to the DOWN-RIGHT cell if it exists and not a bomb "true"
          if (
            resArr[i + 1][j + 1] !== undefined
            && resArr[i + 1][j + 1] !== true
          ) {
            resArr[i + 1][j + 1] += 1;
          }
        }
      }
    }
  }
  // console.log(resArr)
  for (let s = 0; s < resArr.length; s++) {
    for (let t = 0; t < resArr[s].length; t++) {
      // asiign all the 'false' cells number 0, to add bomb counter
      if (resArr[s][t] === true) {
        resArr[s][t] = 1;
      }
    }
  }
  return resArr;
}

module.exports = minesweeper;
