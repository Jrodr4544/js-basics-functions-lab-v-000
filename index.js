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

function distanceTravelledInFeet(start, end) {
  const numOfBlocksTravelled = [start, end].sort()[1] - [start, end].sort()[0]
  return numOfBlocksTravelled * 264
}

function calculatesFarePrice(start, destination) {
  const price = 0;
  const distanceTravelled = distanceTravelledInFeet(start, destination)
  if (distanceTravelled <= 400) {
    return price;
  } else if (distanceTravelled > 400 && distanceTravelled < 2000) {
    return price += (distanceTravelled - 400) * .02
  } else if (distanceTravelled < 2000 && distanceTravelled > 2500) {
    return 25
  } else {
    return 'cannot travel that far.'
  }
}
