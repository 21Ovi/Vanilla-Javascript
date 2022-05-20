let bill = Number(prompt(`What is your Bill?`));
const tip = bill >= 50 && bill <= 300 ? bill * 15 / 100 : bill * 20 / 100;
console.log(`The bill was ${bill} the tip was ${tip} and Total value is ${bill + tip}`);