const add = function(a, b) {
	return a+b;
};

const subtract = function(a, b) {
	return a-b;
};

const sum = function(numArr) {
	return numArr.reduce((sum, num) => sum + num, 0);
};

const multiply = function(numArr) {
	return numArr.reduce((sum, num) => sum * num);
};

const power = function(base, exponent) {
	return base ** exponent;
};

const factorial = function(num) {
	if (num === 0) {
		return 1;
	}
	ret = 1;
	while (num !== 1) {
		ret *= num;
		num--;
	}
	return ret
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
