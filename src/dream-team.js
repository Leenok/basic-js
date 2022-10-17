const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create name of dream team based on the names of its members
 *  
 * @param {Array} members names of the members 
 * @return {String | Boolean} name of the team or false
 * in case of incorrect members
 *
 * @example
 * 
 * createDreamTeam(['Matt', 'Ann', 'Dmitry', 'Max']) => 'ADMM'
 * createDreamTeam(['Olivia', 1111, 'Lily', 'Oscar', true, null]) => 'LOO'
 *
 */
function createDreamTeam(names) {
  if (!Array.isArray(names)) {
    return false;
  }
  let it = names.reduce((name, item) => {

    if (typeof item == "string") {
      item = item.split(' ').join('');
      if (item[0] == item[0].toUpperCase()) {
        name += item[0];
      } else {
        name += item[0].toUpperCase();
      }
    }
    return name;
  }, "");
  if (it === "") {
    return false;
  }
  return it.split("").sort().join("");
}

module.exports = {
  createDreamTeam
};
