const oneWord = function (str) {
  return str.replace(/ /g, '').toLowerCase();
};

const upperFirstWord = function (str) {
  const [first, ...others] = str.split(' ');
  return [first.toUpperCase(), ...others].join(' ');
};
/* 
console.log(upperFirstWord('Ovesh Ansari'));
console.log(oneWord('Ovesh Ansari')); */

//higer order funciton

const transformer = function (str, fn) {
  console.log(`Orignal String :${str}`);
  console.log(`Transformed String :${fn(str)}`);
  console.log(`Transformed By :${fn.name}`);
};

console.log('JavaScript is the best', upperFirstWord);
console.log('JavaScript is the best', oneWord);

//JS uses callBacks all the time

const high5 = function () {
  console.log('👋');
};

document.body.addEventListener('click', high5);

['ovi', 'kevi', 'mihi'].forEach(high5);
