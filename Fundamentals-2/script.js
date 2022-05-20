const calcAge = birthYear => 2021 - birthYear;
const age = calcAge(1999);
console.log(calcAge);

const UntilRetirement = (birthYear, firstName) => {
  const age = 2021 - birthYear;
  const retirement = 65 - age;
  //return retirement;
  return `${firstName} retires in ${retirement} years`;
};

console.log(UntilRetirement(1999, 'ovi'));
