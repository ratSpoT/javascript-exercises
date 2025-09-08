const fibonacci = function(num) {
  if (num <= 0) {
    return 0
  }
  
  let a = 1;
  let b = 1;
  for (let i=3; i<=num; i++) {
    let temp = b;
    b += a;
    a = temp;
  }
  return b;
    
};

// Do not edit below this line
module.exports = fibonacci;
