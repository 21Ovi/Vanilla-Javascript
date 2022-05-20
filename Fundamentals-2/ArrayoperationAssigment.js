const neighbours = ['Syria', 'Georgia', 'Bulgaria', 'greece'];
console.log(neighbours)
neighbours.push('uthopia');
console.log(neighbours);
neighbours.pop();
console.log(neighbours);

if (!neighbours.includes('Germany')) {
    console.log("Probably not a Central Europian country");
}
console.log('Position of greece is :', neighbours.indexOf('greece'));
// neighbours[3] = 'Greece';
neighbours[neighbours.indexOf('greece')] = 'Republic of Greece';
console.log(neighbours);