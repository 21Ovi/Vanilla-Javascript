const cutPieces = function (fruit) {
    return fruit * 4;
}
const fruitProcessor = function (apples, oranges) {
    const applePieces = cutPieces(apples);
    const orangePieces = cutPieces(oranges);

    const juice = `Juice with ${applePieces} pieces of Apples and ${orangePieces} of Oranges`;

    return juice;
}

console.log(fruitProcessor(2, 3));

console.log("__________________________________________________________________________________");

function PercentageOfWorld1(population) {
    const percent = population / WorldPopulation * 100;
    console.log(`India has ${population} million people so its about ${percent} % of the world population`);
    return percent;
}

function describePopulation(Country, Population) {

    //const percent = ()
    // const perc = `${Country} Has ${Population} people and it hold ${population}`;
}

