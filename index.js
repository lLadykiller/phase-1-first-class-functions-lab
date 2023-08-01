function returnFirstTwoDrivers(drivers) {
    return drivers.slice(0, 2);
  }
  function returnLastTwoDrivers(drivers) {
    return drivers.slice(-2);
  }
  function createFareMultiplier(multiplier) {
    return function (fare) {
      return fare * multiplier;
    };
  }
  
  const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers];
  const fareDoubler = createFareMultiplier(2);
  const fareTripler = createFareMultiplier(3);
  function selectDifferentDrivers(arrayOfDrivers, driverFunction) {
    return driverFunction(arrayOfDrivers);
  }
  