const repeatString = function(string, num) {
  let ret = "";
  
  for (let i=0; i<num; i++) {
    ret += string;
  }

  return ret;
};

// Do not edit below this line
module.exports = repeatString;
