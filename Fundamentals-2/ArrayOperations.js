const friends = ['Warner', 'Kane', 'Virat'];
console.log(friends);

//Add Elements
friends.push('Bairstow');   //Last
friends.unshift('Rashid');  //First

//to see Number elements in a stored variable
const newLenght = friends.push('Bhuvi');

console.log(friends);
console.log(newLenght);

//Remove Elements
friends.pop();  //Last
friends.shift();    //First
console.log(friends);

//Adding them again to remove

friends.push('Bairstow');
friends.unshift('Rashid');
console.log(friends);
//too see removed elementes

const popped = friends.pop();
const shifted = friends.shift();
console.log(popped, shifted);
console.log(friends);

//adding again
friends.push('Manish');
friends.push('Rashid');
friends.push('Bhuvi');
console.log(friends);

//to check to position of specific element
console.log(friends.indexOf('Manish'));
console.log(friends.indexOf('Bhuvi'));
console.log(friends.indexOf('Ovi'));

//to check weather element is present in array or not

console.log(friends.includes('Virat'));
console.log(friends.includes('Ovi'));

if (friends.includes('Maxwell')) {
    console.log("You have friend Named Maxwell");
} else {
    friends.push('Maxwell');
    if (friends.includes('Maxwell')) {
        console.log('You have friend Named maxwell', friends);
    }
}