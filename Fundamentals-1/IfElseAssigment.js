let IndiaPopulation = 1378.6;
let switzerlandPopulation = 8.33;
let AveragePopulation = 33;

let calc = AveragePopulation - switzerlandPopulation;
let calc1 = switzerlandPopulation - AveragePopulation;

let sum = IndiaPopulation - AveragePopulation;
let sum1 = AveragePopulation - IndiaPopulation;

//checking India's Population

if (IndiaPopulation > AveragePopulation) {
    console.log(`India's Population(${IndiaPopulation} Million) is higer than average Population(${AveragePopulation} Million) by ${sum} Million`);
} else {
    console.log(`India's Population(${IndiaPopulation} Million) is below than Averge Poppulation(${AveragePopulation} Million) by ${sum1} `);
}

//checking Switzerland's Population

if (switzerlandPopulation > AveragePopulation) {
    console.log(`Switzerland's Population(${switzerlandPopulation} Million) is higer than Average Population(${AveragePopulation}) by ${calc1}`);
} else {
    console.log(`Switzerland's Population (${switzerlandPopulation} Million) is Below the Average(${AveragePopulation} Million) by ${calc}`);
}