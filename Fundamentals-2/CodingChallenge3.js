'use strict'

const mark = {
    firstName: 'Mark',
    lastName: 'Miller',
    Weight: 78,
    height: 1.69,

    calcBMI: function () {
        this.BMI = this.Weight / this.height ** 2;
        return this.BMI;
    }
}

const John = {
    firstName: 'john',
    lastName: 'Smith',
    Weight: 92,
    height: 1.95,

    calcBMI: function () {
        this.BMI = this.Weight / this.height ** 2;
        return this.BMI;
    }
}
if (mark.calcBMI() > John.calcBMI()) {
    console.log(`${mark.firstName}'s BMI(${mark.calcBMI()}) is Higher than ${John.firstName}'s BMI(${John.calcBMI()})`);
} else {
    console.log(`${John.firstName}'s BMI(${John.calcBMI()}) is Higer than ${mark.firstName}'s BMI(${mark.calcBMI()})`);
}