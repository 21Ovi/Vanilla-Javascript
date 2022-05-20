function logger() {
    console.log("My name is Ovi");
}

logger();

function fruitProcessor(apples, oranges) {
    const juice = `juice with ${apples} Apples and ${oranges} Oranges`;
    return juice;
}
const applejuice = fruitProcessor(5, 2);
console.log(applejuice);
const appleOrangeJuice = fruitProcessor(2, 4);
console.log(appleOrangeJuice);

const x = prompt("Enter Number of apple you want in Juice");
const y = prompt("Enter Number of Oranges you want in your Juice");

function OrderedJuice() {
    console.log(fruitProcessor(x, y));
}
OrderedJuice();

function maths(p, q, r, s) {
    const sum = p + q + r + s;
    const sub = p - q - r - s;
    const mul = p * q * r * s;
    const div = p / q / r / s;

    console.log(sum);
    console.log(sub);
    console.log(mul);
    console.log(div);

    return sum;
}

const p = Number(prompt("Enter Number"));
const q = Number(prompt("Enter Number"));
const r = Number(prompt("Enter Number"));
const s = Number(prompt("Enter Number"));

maths(p, q, r, s);