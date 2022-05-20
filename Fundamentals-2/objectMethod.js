'use strict'

const Ovesh = {
    firstName: 'Ovesh',
    lastName: 'Ansari',
    BirthYear: 1999,
    job: 'Student',
    hasDriversLicense: true,
    friends: ['Kevin', 'Mihir', 'Sahil'],
    calcAge: function () {
        this.age = 2021 - this.BirthYear;
        return this.age;
    },

    getSummary: function () {
        return `${this.firstName} is a ${this.calcAge()}-year old ${Ovesh.job}, and he has ${this.hasDriversLicense ? 'a' : 'no'} driver's license.`;
    }
};

console.log(Ovesh.getSummary());