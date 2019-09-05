// Code your solution in this file!
const returnFirstTwoDrivers = (array) => {
    return array.slice(0, 2)
}

const returnLastTwoDrivers = (array) => {
    return array.slice(-2)
}

const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers]

function createFareMultiplier(num) {
    return function(fare) {
        return fare * num
    }
}

const fareDoubler = createFareMultiplier(2);

const fareTripler = createFareMultiplier(3);

function selectDifferentDrivers(drivers, driverFn) {
    return driverFn(drivers)
}