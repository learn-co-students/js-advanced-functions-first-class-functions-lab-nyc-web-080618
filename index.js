// Code your solution in this file!
const returnFirstTwoDrivers = function (drivers){
  return drivers.slice(0, 2);
}


const returnLastTwoDrivers = function(drivers){
  return drivers.slice(drivers.length - 2);
}

const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers];


const createFareMultiplier = function(num1){
  return function (num2) {
    return num1 * num2
  }
}

// function fareDoubler(num){
//   return num * 2;
// }
const fareDoubler = createFareMultiplier(2)

//  function fareTripler(num){
//   return num * 3;
// }
const fareTripler = createFareMultiplier(3)

const fetchSpecifiedDrivers = function(drivers, functionName){
  return functionName(drivers)
}
