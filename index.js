const returnFirstTwoDrivers = function(drivers){
  return drivers.slice(0, 2);
}

const returnLastTwoDrivers = function(drivers){
  return drivers.slice(-2);
}

const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers];

function createFareMultiplier(num1) {
  return function(num2){
    return num1 * num2;
  }
}

function fareDoubler(num){
  return num * 2;
}

function fareTripler(num){
  return num * 3;
}

function fetchSpecifiedDrivers(arrayOfDrivers, functionName){
  return functionName(arrayOfDrivers);
}
