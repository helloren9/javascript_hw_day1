// Question #1

let dog_string = "Hello Max, my name is Dog, and I have purple eyes!";
let dog_names = ["Max","HAS","PuRple","dog"];

function findWords(string, names) {
    let found = false;
    for (let i = 0; i < names.length; i++) {
        if (string.toLowerCase().includes(names[i].toLowerCase())) {
            console.log("Matched " + names[i]);
            found = true
        }
    }
    if (!found) {
        console.log("No Matches");
    }
}

findWords(dog_string, dog_names);

// Question #2

function replaceEvens(arr) {
    for (let i = 0; i < arr.length; i++) {
        if (i % 2 == 0) {
            arr.splice(i, 1, "even index");
        }
    }
    return arr
}

let arr = ["Max","Baseball","Reboot","Goku","Trucks","Rodger"];

console.log(replaceEvens(arr));

// Codewars Question #1
/*
Jack really likes his number five: the trick here is that you have to multiply each number by 5 raised to the number of digits of each numbers, so, for example:

  3 -->    15  (  3 * 5¹)
 10 -->   250  ( 10 * 5²)
200 --> 25000  (200 * 5³)
  0 -->     0  (  0 * 5¹)
 -3 -->   -15  ( -3 * 5¹)
 */

function multiplyByPowerOfFive(num) {
    let digits = Math.abs(num).toString().length;
    let result = num * Math.pow(5, digits)
    return result
}

console.log(multiplyByPowerOfFive(200))
console.log(multiplyByPowerOfFive(3))
console.log(multiplyByPowerOfFive(50))

// Codewars Question #2

/*
If we list all the natural numbers below 10 that are multiples of 3 or 5, we get 3, 5, 6 and 9. The sum of these multiples is 23.

Finish the solution so that it returns the sum of all the multiples of 3 or 5 below the number passed in.

Additionally, if the number is negative, return 0.

Note: If the number is a multiple of both 3 and 5, only count it once.
*/

function sumMultiples(number) {
    if (number < 0) {
        return 0
    }

    let sum = 0
    for (let i = 1; i < number; i++) {
        if (i % 3 === 0 || i % 5 === 0) {
            sum += i
        }
    }
    return sum
}

console.log(sumMultiples(10))
console.log(sumMultiples(20))

// Codewars Question #3

/*
You might know some pretty large perfect squares. But what about the NEXT one?

Complete the findNextSquare method that finds the next integral perfect square after the one passed as a parameter. 
Recall that an integral perfect square is an integer n such that sqrt(n) is also an integer.

If the argument is itself not a perfect square then return either -1 or an empty value like None or null, depending on your language. 
You may assume the argument is non-negative.
*/

function findNextSquare(sq) {
    let sqrt = Math.sqrt(sq);
    if (Number.isInteger(sqrt)) {
        let nextNum = sqrt + 1;
        return nextNum * nextNum;
    } else {
        return -1;
    }
}

console.log(findNextSquare(4));
console.log(findNextSquare(49));
console.log(findNextSquare(40));

// Codewars Question #4

/*
Our football team has finished the championship.

Our team's match results are recorded in a collection of strings. Each match is represented by a string in the format "x:y", where x is our team's score and y is our opponents score.

For example: ["3:1", "2:2", "0:1", ...]

Points are awarded for each match as follows:

if x > y: 3 points (win)
if x < y: 0 points (loss)
if x = y: 1 point (tie)
We need to write a function that takes this collection and returns the number of points our team (x) got in the championship by the rules given above.

Notes:

our team always plays 10 matches in the championship
0 <= x <= 4
0 <= y <= 4
*/

function points(games) {
    let totalPoints = 0;
    for (let i = 0; i < games.length; i ++) {
        let [x, y] = games[i].split(":").map(Number);
        
        if (x > y) {
            totalPoints += 3;
        } else if (x === y) {
            totalPoints += 1;
        }
    }
    return totalPoints;
}

console.log(points(["1:1","2:2","3:3","4:4","2:2","3:3","4:4","3:3","4:4","4:4"]))
