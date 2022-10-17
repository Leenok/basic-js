const { NotImplementedError } = require('../extensions/index.js');

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
  let ar = n.toString().split("");

  let nar = [];
  for (let i = 0; i < ar.length; i++) {
    let z = ar;
    let y = z[i];
    z[i] = "";
    nar[i] = +z.join("");
    z[i] = y;
  }
  return Math.max(...nar);
}

module.exports = {
  deleteDigit
};
