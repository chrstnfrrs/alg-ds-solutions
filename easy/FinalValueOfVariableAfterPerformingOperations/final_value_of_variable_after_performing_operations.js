/**
 * @param {string[]} operations
 * @return {number}
 */
 const finalValueAfterOperations = (operations) => {
  return operations.reduce((acc, item) => {
      const isInc = item.charAt(0) === '+' || item.charAt(2) === "+"
      return isInc ? ++acc : --acc
  }, 0)
};