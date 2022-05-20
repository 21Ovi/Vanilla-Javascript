let arr = ['a', 'b', 'c', 'd', 'e', 'f', 'g'];

//slice
//non-mutating(means will no affect the orignal array just display it)
console.log(arr);
console.log(arr.slice(2));
console.log(arr.slice(2, 4));
console.log(arr.slice(-2));

//splice
//similar as slice but but splice method is mutautng means it will affect the orignal method

//console.log(arr.splice(2));
arr.splice(1, 2);
console.log(arr);

//Reverse
//reverse is also a mutatuing method
arr = ['a', 'b', 'c', 'd', 'e', 'f', 'g'];
const arr2 = ['h', 'i', 'j', 'k', 'l', 'm', 'n', 'o'];
console.log('Before reverse', arr2);
console.log('After reverse', arr2.reverse());
arr2.reverse();

//concat
//use to join 2 arrays togeather

const letters = arr.concat(arr2);
console.log(letters);

//join
console.log(letters.join('-'));
