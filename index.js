// Code your solution in this file!

//should return a new array containing
//the first two drivers passed-in array
const returnFirstTwoDrivers = function (driver) {
    return driver.slice(0,2); //["Sally", "Bob"]
}

const returnLastTwoDrivers = function (driver) {
    return driver.slice(2); // ["Freddy", "Claudia"]
}

const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers]
//invoking either function

const createFareMultiplier = function(num) {
  return function(multiply) {
    return multiply * num
  }
}

const fareDoubler = createFareMultiplier(2)

const fareTripler = createFareMultiplier(3)

function fetchSpecifiedDrivers(drivers, driversFunction) {
  return driversFunction(drivers)
}
