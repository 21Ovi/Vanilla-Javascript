// const describeCountry = (Country, Population, Capital) => {
//     const Statement = `${Country} has Population of ${Population} Million People and it's capital is${Capital}`;

//     return Statement;
// }

// console.log(describeCountry);

'use strict';

const percentageOfWorld3 = population => (population / 7900) * 100;

const percPortugal3 = percentageOfWorld3(10);
const percChina3 = percentageOfWorld3(1441);
const percUSA3 = percentageOfWorld3(332);
console.log(percPortugal3, percChina3, percUSA3);


const PercentageofWorld = population2 => (population2 / 7900) * 100;

const percIndia = PercentageofWorld(1385);
const StatIndia = `India Holds ${percIndia} % of World Population`;
console.log(StatIndia);

const drinks = flavour => (flavour);
const sprite = drinks(2);
console.log(sprite);

function war(castles, city, state) {
    const power = `Turks have ${castles} Castle ${city} City and ${state} State`
    console.log(power);
    return power;
}
war(`Karachaisar`, `Sogut`, `Seljuk`);
const prop = war(1, 2, 3);
console.log(prop);

