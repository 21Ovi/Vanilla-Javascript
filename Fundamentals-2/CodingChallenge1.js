'use strict';

const calcAverage = scrAvg => scrAvg / 3;

function scores(R1, R2, R3) {
    const Avg = R1 + R2 + R3;
    const str = calcAverage(Avg);
    //console.log(str);
    return str;
}

const avgDolphin = scores(85, 54, 41);
console.log(`Average score of team Dolphin is`, avgDolphin);
const avgKoala = scores(23, 34, 27);
console.log(`Average score of team Koala is :`, avgKoala);

function checkWinner(avgDolphins, avgKoalas) {
    if (avgDolphins > avgKoalas && avgDolphins >= avgKoalas * 2) {
        console.log(`Dolphins win`);
    } else if (avgKoalas > avgDolphins && avgKoalas >= avgDolphins * 2) {
        console.log(`Koala wins`);
    } else {
        console.log(`MatchHas been drawn`);
    }
}
checkWinner(avgDolphin, avgKoala);