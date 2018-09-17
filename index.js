const returnFirstTwoDrivers = function(array){
  return array.slice(0,2)
}

const returnLastTwoDrivers = function(array){
  return array.slice(array.length-2,array.length)
}

const selectingDrivers = [returnFirstTwoDrivers,returnLastTwoDrivers]

function createFareMultiplier(int){
  return function(fare){
    return int*fare
  }
}

const fareDoubler = function(num){
  return createFareMultiplier(num)(2)
}

const fareTripler = function(num){
  return createFareMultiplier(num)(3)
}

function fetchSpecifiedDrivers(arrayOfDrivers,inputFunction){
  return inputFunction(arrayOfDrivers)
}
