function pageCount(n,p) {

let numberOfTurns = 0;
let backwardTurns = 0;
let forwardTurns = 0;


// edge case is n =8 , p =7
let additionalPage = (n % 2 === 0 && p !== n) ? 1 : 0;

backwardTurns = Math.floor((n - p + additionalPage)/2);
forwardTurns = Math.floor(p/2);


console.log(Math.min(backwardTurns, forwardTurns));

}

let n = 8;
let p = 7;

pageCount(n,p)

// - 1, 2 - 3,   4 - 5,   6 - 7, 8
// - 1, 2 - 3, 4 - 5, 6 - 7, 8 - 9, 10 - 11  --- n = 11 , p = 4||5
