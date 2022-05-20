function calcTip(billAmount) {
    let tip;
    if (billAmount >= 50 && billAmount <= 300) {
        tip = billAmount * 15 / 100;
    } else {
        tip = billAmount * 20 / 100;
    }
    return tip;
}
const bill = [125, 55, 44];

const tips = [calcTip(bill[0]), calcTip(bill[1]), calcTip(bill[2])];
console.log(tips);

const total = [(bill[0] + tips[0]), (bill[1] + tips[1]), (bill[2] + tips[2])];

console.log(total);