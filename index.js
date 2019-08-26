// Code your solution in this file!
function distanceFromHqInBlocks(location) {
  const hq = 42
  const locationBeforeOrAfter42 = [location, hq].sort()
  return locationBeforeOrAfter42[1] - locationBeforeOrAfter42[0]
}

function distanceFromHqInFeet(location) {
  const distancePerBlock = 264;
  return distanceFromHqInBlocks(location) * distancePerBlock
}

function distanceTravelledInFeet(location) {
  
}