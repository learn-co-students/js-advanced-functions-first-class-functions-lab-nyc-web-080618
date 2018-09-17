// Code your solution in this file!
const drivers = ['Sally', 'Bob', 'Freddy', 'Claudia'];
const returnFirstTwoDrivers= function(drivers){
  return drivers.slice(0,2);
}

const returnLastTwoDrivers = function(drivers){
  return drivers.slice(-2);
}

const selectingDrivers =[returnFirstTwoDrivers, returnLastTwoDrivers]

function createFareMultiplier(num) {
  return function fareQuintupler(multiplier){
    return num * multiplier;
  }
}
// function fareDoubler(num){
//   return num * 2;
// }
fareDoubler = createFareMultiplier(2)
function fareTripler(num){
  return num * 3;
}


function fetchSpecifiedDrivers(drivers, callback){
  return callback(drivers);
}
