const myCountry = {
    country: 'India',
    capital: 'New Dehli',
    language: 'Hindi',
    population: 1387,
    neighbours: ['Pakistan', 'Nepal', 'Bangladesh', 'China', 'Sri Lanka'],
    describe: function () {
        console.log(`${this.country} has ${this.population} Million ${this.language}-Speaking people, $${this.neighbours.length} Neighbouring Countries and a capital called ${this.capital}`);
    },
    isIsland: function () {
        this.isIsland = this.neighbours.length === 0 ? true : false;
    }
};
console.log(`${myCountry.country} has ${myCountry.population} million ${myCountry.language}-speaking people, ${myCountry.neighbours.length} neighbouring Countries and
 a capital called ${myCountry.capital}`);

myCountry.population += 2;
console.log(myCountry.population);
myCountry['population'] -= 2;
console.log(myCountry['population']);

console.log(myCountry.describe());
console.log(myCountry.isIsland());
console.log(myCountry);