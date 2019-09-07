const returnFirstTwoDrivers = function(array){
    return array.slice(0,2)
}

const returnLastTwoDrivers = function(array){
    return array.slice(array.length - 2)
}

const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers]

const createFareMultiplier = function (int) {
    return function(fare) {
        return fare * int
    }
}

const fareDoubler = function(fare) {
    return createFareMultiplier(fare)(2)
}

const fareTripler = function(fare) {
    return createFareMultiplier(fare)(3)
}

const selectDifferentDrivers = function(array, func) {
    return func(array)    
}