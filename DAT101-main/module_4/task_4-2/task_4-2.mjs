"use strict";
import { initPrintOut, printOut, newLine } from "../../common/script/utils.mjs";
initPrintOut(document.getElementById("txtOut"));

printOut("--- Part 1 ----------------------------------------------------------------------------------------------");


//array with numbers 1 to 20
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20];
let nLen = numbers.length;

// I could not get anything to show on the html page without adding <br>
for (let i = 0; i < nLen; i++) {
    printOut(numbers[i] + "<br>");
}


printOut("--- Part 2 ----------------------------------------------------------------------------------------------");


//simple enough to use join to print out the contents of the array
printOut(numbers.join(", ")); 


printOut(newLine);


printOut("--- Part 3 ----------------------------------------------------------------------------------------------");

const hei = "Hei på deg, hvordan har du det?"; //constant tex
const text = hei.split(" "); 

// printing number, index and word
for (let i = 0; i < text.length; i++) {
    printOut(`Word number ${i + 1}, Index ${i}: ${text[i]}`);
} //arrays start at zero so i+1 for word number, //index and the actual text

printOut(newLine);


printOut("--- Part 4 ----------------------------------------------------------------------------------------------");

const girlnames = [ "Anne", "Inger", "Kari", "Marit", "Ingrid", "Liv", "Eva", "Berit", "Astrid",
    "Bjørg", "Hilde", "Anna", "Solveig", "Marianne", "Randi", "Ida", "Nina", "Maria", "Elisabeth", "Kristin"]


    function removePersont(array, personKill) {
        // Check if the element exists in the array
        const index = array.indexOf(personKill);
        if (index !== -1) {
            array.splice(index, 1); // Remove with splice
            printOut(`${personKill} has been taken behind the barn and put down like a dog.`);
        } else {
            printOut(`${personKill} does not exist in the array`);
        }
    }
    
removePersont(girlnames, "Inger");  
removePersont(girlnames, "Jonas");  


printOut(newLine);


printOut("--- Part 5 ----------------------------------------------------------------------------------------------");

// Boy names 
const boys = ["Jakob", "Lucas", "Emil", "Oskar", "Oliver", "William", "Filip", "Noah", 
   "Elias", "Isak", "Henrik", "Aksel", "Kasper", "Mathias", "Jonas", "Tobias", 
   "Liam", "Håkon", "Theodor", "Magnus"];

// Merge the arrays using concat
const allNames = girlnames.concat(boys);
//could use printout but it overflows on the html page and looks awful, so does this but less so
allNames.forEach(name => printOut(`${name}<br>`));


printOut(newLine);


printOut("--- Part 6 ----------------------------------------------------------------------------------------------");

class TBook { //class including the private constats, the constructor and the function
    #Title;
    #Author;
    #ISBN;

    constructor(aTitle, aAuthor, aISBN) {
        this.#Title = aTitle;
        this.#Author = aAuthor;
        this.#ISBN = aISBN;
    }

    toString() {
        return `Tittel: ${this.#Title}, Forfatter: ${this.#Author}, ISBN: ${this.#ISBN}`;
    }
}

// books array using the tbook class
const books = [
    new TBook("title", "Joe Joe", "1234"),
    new TBook("Book2", "Book Bookman", "38974903847"),
    new TBook("beer", "man beer", "beer")
];

for (let i = 0; i < books.length; i++) {
    printOut(books[i] + "<br>");
}

printOut(newLine);


printOut("--- Part 7 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/
printOut("Replace this with you answer!");
printOut(newLine);


printOut("--- Part 8 ----------------------------------------------------------------------------------------------");

//35 random numbers between 1 and 20
const randomNumbers = Array.from({ length: 35 }, () => Math.floor(Math.random() * 20) + 1);

// Sort in ascending order using a callback function. 
// ... copies the array
//sort then compares pair by pair
//I'll be the first one to admit I don't really got how sort works but
//It does work here so
//takes a pair to compare, say a is 15 and b is 10
//15-10 is 5 is positive so 15 remains before 10
const ascending = [...randomNumbers].sort((a, b) => a - b);

// descending order, same deal as above
const descending = [...randomNumbers].sort((a, b) => b - a);

// print results
printOut("Ascending Order: " + ascending.join(", ") + "<br><br>");
printOut("Descending Order: " + descending.join(", ") + "<br><br>");

printOut(newLine);


printOut("--- Part 9 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/
printOut("Replace this with you answer!");
printOut(newLine);


/* Task 10*/
printOut("--- Part 10 ---------------------------------------------------------------------------------------------");
printOut(newLine);
