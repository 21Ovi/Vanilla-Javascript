function describeCountry(Country, Population, capitalCity) {
    const Statement = `${Country} has ${Population} Million people and it's calpial city is ${capitalCity}`;
    console.log(Statement);

    return Statement;
}
const Country = describeCountry('India', 1378, "New Dehli");

const con = String(prompt("Enter a Country"));
const pop = Number(prompt("Enter Population in Number"));
const cap = String(prompt(`Enter Capital of ${con}`));
const Country1 = describeCountry(con, pop, cap);

//variables Inside a function is only valid throughout the function and not recognized outside the function

function CountrySaudi() {

    const con = `Saudi Arabia`;
    const pop = 34;
    const cap = `Riyadh`;
    describeCountry(con, pop, cap);

}

CountrySaudi();