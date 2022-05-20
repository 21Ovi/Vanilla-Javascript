const friends = ['Warner', 'Kane', 'Johnny'];
console.log(friends);

const year = new Array(1999, 2001, 2017, 2021);
console.log(year);

//we can call any element from an array with it's index number(Position)
//FYI array always starts with 0

console.log(friends[0]);
console.log(friends[2]);

//to see lenght of an array

console.log(friends.length);

//to see last element of an array

console.log(friends[friends.length - 1]);

//we can change elements of an array even if it's declared in const, however we cam't change array because obvously it is declared with const

friends[2] = 'Baristow';
console.log(friends);
const Kane = 'Williamson';
friends[1] = Kane;
console.log(friends);

//we can store different datatypes in a single array

const firstName = 'Mohammad';
const Ovi = [firstName, 'Ovesh', 2021 - 1999, 'Student', friends];
console.log(Ovi);

//Exersice

const calcAge = function (birthyear) {
    return 2021 - birthyear;
}
const years = [1999, 2001, 2015, 2017, 2020, 2021, 2016];

const age1 = calcAge(years[0]);
const age2 = calcAge(years[1]);
const age3 = calcAge(years[years.length - 1]);
console.log(age1, age2, age3);

const ages = [calcAge(years[0]), calcAge(years[1]), calcAge(years[years.length - 1])];
console.log(ages);