const { NotImplementedError } = require('../extensions/index.js');

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
  let y = {};
  let z = []
  for (let i = 0; i < names.length; i++) {
    if (names[i] in y) {
      y[names[i]] += 1;
      names[i] = names[i] + "(" + y[names[i]] + ")";
      z.push(names[i]);
    } else {
      y[names[i]] = 0;
      if (z.includes(names[i])) {
        y[names[i]] = 1;
        names[i] = names[i] + '(1)';
      }
      z.push(names[i]);
    }

  }
  return z;
}

module.exports = {
  renameFiles
};
