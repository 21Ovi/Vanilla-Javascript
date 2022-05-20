const WorldPopulation = 7900;
function PercentageOfWorld1(population) {
    const percent = population / WorldPopulation * 100;
    return percent;
}

const DescribePopulation = function (country, population) {
    const percentage = PercentageOfWorld1(population);
    const describtion = `${country} has ${population} million people, which is about ${percentage}% of world's population`;
    console.log(describtion);
}

DescribePopulation('India', 1385);
DescribePopulation(`turkey`, 35);