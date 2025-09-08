const findTheOldest = function(people) {
  let aAge = 0;
  let bAge = 0;
  return people.sort((a, b) => {
    if (!("yearOfDeath" in a)) {
      aAge = 2025 - a.yearOfBirth;
    } else {
      aAge = a.yearOfDeath - a.yearOfBirth;
    }
    if (!("yearOfDeath" in b)) {
      bAge = 2025 - b.yearOfBirth;
    } else {
      bAge = b.yearOfDeath - b.yearOfBirth;
    }
    return bAge - aAge;
  })[0];
};

// Do not edit below this line
module.exports = findTheOldest;
