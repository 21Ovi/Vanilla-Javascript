'use strict';

const bills = [22, 295, 176, 440, 37, 105, 10, 1100, 86, 52];
const tips = [];
const totals = [];
let tip, i;
function calcTip(billAmount) {
  if (billAmount >= 50 && billAmount <= 300) {
    tip = (billAmount * 15) / 100;
  } else {
    tip = (billAmount * 20) / 100;
  }
  return tip;
}
for (i = 0; i < bills.length; i++) {
  //tips[i] = calcTip(bills[i]);
  tips.push(calcTip(bills[i]));
  totals.push(tips[i] + bills[i]);

  console.log(`Total Bill`, totals[i]);
}
console.log('__________________Bonus Task___________________________');

function calcAverage(arr) {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    sum = sum + arr[i];
  }
  return sum / arr.length;
}
console.log(calcAverage(totals));
