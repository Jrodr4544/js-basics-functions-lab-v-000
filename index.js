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
  } 
}


 it('gives customers a free sample', function() {
      expect(calculatesFarePrice(43, 44)).to.equal(0);
    });

    it('charges 2 cents per foot when total feet travelled is between 400 and 2000 (remember the first 400 feet are free!)', function() {
      // total feet travelled is 528, minus the first 400 feet, comes to 128 -> 2.56
      expect(calculatesFarePrice(34, 32)).to.equal(2.56);
    });

    it('charges 25 dollars for a distance over 2000 feet', function() {
      expect(calculatesFarePrice(50, 58)).to.equal(25);
    });

    it('does not allow rides over 2500 feet', function() {
      expect(calculatesFarePrice(34, 24)).to.equal('cannot travel that far');
    });



