// Code your solution in this file!
const returnFirstTwoDrivers = (function (drivers) {
  return drivers.slice(0,2)
})

const returnLastTwoDrivers = (function (drivers) {
  return drivers.slice(-2)
})

const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers]


const createFareMultiplier = (function (num) {
  return function (num1) {
    return num * num1
  }
})

const fareDoubler = (function(num) {
  return num * 2
})

const fareTripler = (function (num) {
  return num * 3
})

const fetchSpecifiedDrivers = (function (drivers, fun) {
  return fun(drivers);
})
