//let markWeight = 78;
//let markHeight = 1.97;
let markWeight = 85;
let markHeight = 1.57;
let markBMI = markWeight / markHeight ** 2;
//let JohnWeight = 85;
//let johnHeight = 1.57;
let JohnWeight = 78;
let johnHeight = 1.97;
let johnBMI = JohnWeight / johnHeight ** 2;

if (markBMI > johnBMI) {
    console.log(`Mark's BMI(${markBMI}) is higher than John's BMI(${johnBMI})`);
} else {
    console.log(`John's BMI (${johnBMI}) is Higher than Mark's(${markBMI})`);
}