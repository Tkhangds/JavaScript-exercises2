const add = function(num1,num2) {
	return num1+num2;
};

const subtract = function(num1,num2) {
	return num1 - num2;
};

const sum = function(array) {
	let ans = array.reduce((acc, curr) => acc += curr, 0);

  return ans;
};

const multiply = function(arr) {
  return arr.reduce((acc,num) => acc *= num,1);
};

const power = function(num1,num2) {
	let ans = 1;
  
  for(let i = 0; i < num2;i++){
    ans *= num1;
  }

  return ans;
};

const factorial = function(num1) {
	let ans = 1;
  for(let i = 1 ; i < num1 + 1;i++){
      ans *= i;
  }
  return ans;
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
