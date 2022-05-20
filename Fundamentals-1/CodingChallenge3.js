let DolScore1 = 96;
let DolScore2 = 108;
let DolScore3 = 89;
let DolAverage = DolScore1 + DolScore2 + DolScore3 / 3;
console.log(`Dolphin Average ${DolAverage}`);

let KoaScore1 = 88;
let KoaScore2 = 91;
let KoaScore3 = 110;
let KoaAverage = KoaScore1 + KoaScore2 + KoaScore3 / 3;
console.log("Koala Average " + KoaAverage);

if (DolAverage > KoaAverage) {
    console.log("Dolphin wins the trophy");
} else if (KoaAverage > DolAverage) {
    console.log("Koala Wins the trophy");
} else {
    console.log("Match Has been draw Due to equal Scores");
}

console.log("_______________________________________________________________");
console.log("Round 2");
DolScore1 = 97;
DolScore2 = 112;
DolScore3 = 101;
DolAverage = DolScore1 + DolScore2 + DolScore3 / 3;
console.log("Dolphin Average " + DolAverage);

KoaScore1 = 109;
KoaScore2 = 95;
KoaScore3 = 123;
KoaAverage = KoaScore1 + KoaScore2 + KoaScore3 / 3;
console.log("Koala Average " + KoaAverage);

if (KoaScore1 > 100 && KoaScore2 > 100 && KoaScore3 > 100 && KoaAverage > DolAverage) {
    console.log("Koala Has Won the Bonus Match");
} else if (DolScore1 > 100 && DolScore2 > 100 && DolScore3 > 100 && DolAverage > KoaAverage) {
    console.log("Dolphin has won the bonus Match");
} else if (KoaAverage > DolAverage) {
    console.log("Match Has been Drawn as Both teams Failed to score 100 in all rounds ." + " But Koala has won the match due to higer score");
} else if (DolAverage > KoaAverage) {
    console.log("Match Has been Drawn as Both teams Failed to score 100 in all rounds ." + " But Dolphin has won the match due to higer score");
} else {
    conslole.log("Match has been Drawn")
}