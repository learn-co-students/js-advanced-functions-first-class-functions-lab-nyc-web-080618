// Code your solution in this file!
const returnFirstTwoDrivers=function(drivers){
  return drivers.slice(0,2)
}
const returnLastTwoDrivers=function(drivers){
  return drivers.slice(drivers.length-2)
}
const selectingDrivers=[returnFirstTwoDrivers,returnLastTwoDrivers]

const createFareMultiplier=function(n1){
  return function(n2){
    return n1*n2
  }
}

const fareDoubler=createFareMultiplier(2)

const fareTripler=createFareMultiplier(3)

const fetchSpecifiedDrivers=function(array,callback){
  return callback(array)
}
