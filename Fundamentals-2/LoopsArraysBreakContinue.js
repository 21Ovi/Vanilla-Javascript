
'use strict';

const Ovesh = [
    'Mohammad',
    'Ovesh',
    'Ansari',
    2021 - 1999,
    31 + ' January',
    'Student',
    ['Kevin', 'Mihir', 'Sahil'],
    true
];
const type = [];

//consoling elements of an array inside a loop

for (let i = 0; i < Ovesh.length; i++) {
    console.log(Ovesh[i], typeof Ovesh[i]);
    type[i] = typeof Ovesh[i];

}
console.log(type);

const typeArray = [];

for (let i = 0; i < Ovesh.length; i++) {
    typeArray.push(typeof Ovesh[i]);
}

//fill ages array with birthyear array
const year = [1999, 2001, 2012, 2015, 2018];
const ages = [];
for (let i = 0; i < year.length; i++) {
    ages.push(2021 - year[i]);
}
console.log(ages);

//continue

console.log('--------------ONLY STRING----------------');
for (let i = 0; i < Ovesh.length; i++) {
    if (typeof Ovesh[i] !== 'string') continue;
    console.log(Ovesh[i], typeof Ovesh[i]);

}

//break

console.log('-----------------BREAK WITH NUMBER---------------');
for (let i = 0; i < Ovesh.length; i++) {
    if (typeof Ovesh[i] === 'number') break;
    console.log(Ovesh[i], typeof Ovesh[i]);
}

console.log('___________________________________________________________');

//lopingBackwards

for (let i = Ovesh.length - 1; i >= 0; i--) {
    console.log(i, Ovesh[i])
}

console.log('__________________________________________________________________');

//Loop inside a Loop

for (let exercise = 1; exercise < 4; exercise++) {
    console.log(`-----Starting Exercise ${exercise}`);

    for (let rep = 1; rep < 6; rep++) {
        console.log(`exercise${exercise}: repetation ${rep}`);
    }
}