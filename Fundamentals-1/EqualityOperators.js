let numNeighbours = Number(prompt("Enter Numbers of neighbours your country have"));
if (numNeighbours === 1) {
    console.log("Only 1 border");

} else if (numNeighbours > 1) {
    console.log("Your country have " + numNeighbours + " Borders");
} else {
    console.log("No Borders");
}