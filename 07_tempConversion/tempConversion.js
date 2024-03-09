const convertToCelsius = function(num) {
    return Math.round((5*(num-32)/9)*10)/10;
};

const convertToFahrenheit = function(num) {
  return Math.round(((num*1.8) + 32)*10)/10;
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
