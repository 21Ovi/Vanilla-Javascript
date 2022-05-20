const WorldPopulation = 7900;
function PercentageOfWorld1(population) {
    const percent = population / WorldPopulation * 100;
    console.log(`India has ${population} million people so its about ${percent} % of the world population`);
    return percent;
}

const IndiaPopulation = 1386
const TurkeyPopulation = 85;
const SaudiPopulation = 33;

PercentageOfWorld1(IndiaPopulation);
PercentageOfWorld1(TurkeyPopulation);
PercentageOfWorld1(SaudiPopulation);

const 