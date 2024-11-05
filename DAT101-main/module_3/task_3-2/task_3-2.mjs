"use strict";
import { initPrintOut, printOut, newLine } from "../../common/script/utils.mjs";
initPrintOut(document.getElementById("txtOut"));

printOut("--- Part 1 ----------------------------------------------------------------------------------------------");

// two variables which are empty. Filled by the for loops

let count1to10 = '';
let count10to1 = '';

// i starts at 1, runs to i is 10 and i is increased by 1 each time the loop runs
//then after each run the value of i is added to the empty variable we declared above, including a space
for (let i = 1; i <= 10; i++) {
  count1to10 += i + ' ';
}
//same as above only decreasing in value
for (let i = 10; i >= 1; i--) {
  count10to1 += i + ' ';
}

//printing our variables in only two lines
printOut(count1to10);
printOut(count10to1);

printOut(newLine);




printOut("--- Part 2 ----------------------------------------------------------------------------------------------");

let correctguess = 45;
let guess = 0;

//out of curiosity for how many guesses it takes
let guesscount = 0;

while (guess !== correctguess) {
    guess = Math.floor(Math.random() * 60) + 1; //generates number
    guesscount++; //increments guesscount each iteration
}

printOut("Guessed the right number " + guess + " in " + guesscount + " guesses");

printOut(newLine);


printOut("--- Part 3 ----------------------------------------------------------------------------------------------");
let correctguess2 = 69420;
let guess2 = 0;
let guesscount2 = 0;
//start time
let starttime = Date.now();

while (guess2 !== correctguess2) {
    guess2 = Math.floor(Math.random() * 1000000) + 1; //generates number
    guesscount2++; //increments guesscount each iteration
}
//endtime
let endtime = Date.now();

let timetaken = endtime - starttime;

//datenow is the current time in milliseconds so if i record what the time is when i start and when it is finished
//and then find out the difference i find the time taken

printOut("Guessed the right number " + guess2 + " in " + guesscount2 + " guesses");
printOut("This took " + timetaken + (" Milliseconds"))


printOut(newLine);


printOut("--- Part 4 ----------------------------------------------------------------------------------------------");

//an array to hold our numbers
let primes = [];

//we start at 2 because 2 is the first prime
for (let i = 2; i < 200; i++) {
    let isaPrime = true;
    
    
    for (let divisor = 2; divisor < i; divisor++) {
        //so I use modulus or remainder
        //essentially the current number is divided by the divider, going up to 200
        //if there is no remainder then then it is not a prime
        //no primes will divide equally, and leave no remainder
        if (i % divisor === 0) {
            isaPrime = false;
            break;
        }
    }
    
    //adds to araray
    if (isaPrime) {
        primes.push(i);
    }
}

printOut("All prime numbers greater than 1 and less than 200: " + primes);
//Im sure there are more efficient ways of doing this but i couldn't figure it out beyond just checking every number


printOut(newLine)
printOut("--- Part 5 ----------------------------------------------------------------------------------------------");

for (let row = 1; row <= 7; row++) {  // 7 rows
    let cell = '';  // each cell in the row is set to be empty. Without this it displays the rows one after another.
    for (let coloum = 1; coloum <= 9; coloum++) {  // 9 coloums for each row
        cell += `K${coloum}R${row} `; // for each cell in the row we add the K and R numbers 
    }
    printOut(cell); 
}
//essentially, we start with a row. Which then works its way down, adding the row number and the coloumn number
//When we are 9 coloums to the right the loop switch to the next row


printOut(newLine);

printOut("--- Part 6 -----------------------------------------------------------------------------------------------");

for (let student = 1; student <= 5; student++) { //working our way through each student
    let studentgrade = Math.floor(Math.random() * 236) + 1; //generates grade
    let percentagegrade = (studentgrade / 236) * 100; //converts grade to a percentage of 100

    if (percentagegrade >= 89) {
        printOut("Student " + student + " Got an A");
    } else if (percentagegrade >= 77) {
        printOut("Student " + student + " Got a B");
    } else if (percentagegrade >= 65) {
        printOut("Student " + student + " Got a C");
    } else if (percentagegrade >= 53) {
        printOut("Student " + student + " Got a D");
    } else if (percentagegrade >= 41) {
        printOut("Student " + student + " Got an E");
    } else {
        printOut("Student " + student + " Failed the test");
    }

}


printOut(newLine);

printOut("--- Part 7 ----------------------------------------------------------------------------------------------");

printOut("I did not do this one");
