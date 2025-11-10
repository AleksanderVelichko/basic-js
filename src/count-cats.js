const { NotImplementedError } = require('../lib')

/**
 * Given matrix where you have to find cats by ears "^^"
 *
 * @param {Array<Array>} matrix
 * @return {Number} count of cats found
 *
 * @example
 * countCats([
 *  [0, 1, '^^'],
 *  [0, '^^', 2],
 *  ['^^', 1, 2]
 * ]) => 3`
 *
 */
function countCats(matrix) {
  let flatMatrix = matrix.flat()
  let cats = 0
  flatMatrix.forEach((e) => {
    if (e == '^^') cats++
  })
  return cats ? cats : 0
}

module.exports = {
  countCats,
}
