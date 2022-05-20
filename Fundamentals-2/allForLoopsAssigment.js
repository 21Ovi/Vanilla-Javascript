'use strict'

for (let i = 1; i <= 50; i++) {
    console.log(`Voter Number ${i} is Voting..`)
}
console.log('===----====----====----====----===----====----====----=======----====----====----=======----====----====----=======----====----====----=======----====----====----====');

const population = [1385, 41, 140, 130, 200];
const percentages2 = [];


function percentageOfWorld1(population) {
    const percent = population / 7900 * 100;
    return percent;
}

for (let i = 0; i < population.length; i++) {
    percentages2[i] = percentageOfWorld1(population[i]);
    console.log(percentages2[i]);
}

console.log('------------________________-----------------_____________________---------------------______________________--------------------------');

const listOfNeighbours = [
    ['Canada', 'Mexico'],
    ['Spain'],
    ['Norway', 'Sweden', 'Russia']
];
for (let i = 0; i < listOfNeighbours.length; i++) {
    for (let j = 0; j < listOfNeighbours.length; j++) {
        console.log(`Neighbour : ${listOfNeighbours[i][j]}`)
    }
}

let i, j, k;
j = [6, 12, 18, 24, 30, 36];
k = [12, 24, 36, 48, 60];

for (i = 0; i < j.length; i++) {
    for (let y = 0; y < j.length; y++) {
        console.log(j[i], [y]);
    }
}