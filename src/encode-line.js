const { NotImplementedError } = require('../extensions/index.js');

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
  let nstr = "";
  let n = 1;
  for (let i = 0; i < str.length; i++) {

    if (str[i] != str[i + 1]) {
      if (n > 1) {
        nstr += n + str[i];
      } else {
        nstr += str[i];
      }
      n = 1;
    } else {
      n += 1;

    }
  }
  return nstr;
}

module.exports = {
  encodeLine
};
