const removeFromArray = function(arr, toRemove) {
  let indexToRemove = arr.indexOf(toRemove);
  arr.splice(indexToRemove, 1);
  return arr;
};

// Do not edit below this line
module.exports = removeFromArray;
