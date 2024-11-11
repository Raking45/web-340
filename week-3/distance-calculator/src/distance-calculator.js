/* Astronomical Units(AU) of Each Planet From the Sun rounded to the
thousandths place:
Mars:     0.387
Venus:    0.723
Earth:    1.000
Mars:     1.524
Jupiter:  5.203 
Saturn:   9.537
Uranus:   19.191
Neptune:  30.069
Pluto(not recognized since 2006): 39.482

Test for distance between two planets.
Test for invalid planet input.

Sources:  GPT 4.0 & Microsoft Copilot used for AU distances
and code simplification.
https://phys.org/news/2014-04-planets-sun.html
*/

const planetDistance = {
  Mercury: 0.387,
  Venus: 0.723,
  Earth: 1.000,
  Mars: 1.524,
  Jupiter: 5.203,
  Saturn: 9.537,
  Uranus: 19.191,
  Neptune: 30.069,
  Pluto: 39.482
}

function calculateDistance(planet1, planet2) {
  const distance1 = planetDistance[planet1];
  const distance2 = planetDistance[planet2];

  if (distance1 === undefined || distance2 === undefined) {
    throw new Error("Invalid planet name");
  }
  return Math.abs(distance1 - distance2);
}

module.exports = calculateDistance;