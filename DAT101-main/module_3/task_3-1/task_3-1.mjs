"use strict";
import { initPrintOut, printOut, newLine } from "../../common/script/utils.mjs";
initPrintOut(document.getElementById("txtOut"));

printOut("--- Part 1, 2, 3 ----------------------------------------------------------------------------------------");

let wakeUpTime = 6; 
if (wakeUpTime == 7) {
  printOut("I can take the bus to school.");
} else if (wakeUpTime == 8 ) {
  printOut("I can take the train to school,")
} else{
  printOut("I have to take the car to school")
}
printOut(newLine);


printOut("--- Part 4, 5 --------------------------------------------------------------------------------------------");

let integer = 0; 

if (integer > 0) {
  printOut("Positive");
} else if (integer == 0) {
  printOut("Zero") 
}else {
  printOut("Negative");
}
printOut(newLine); 


printOut("--- Part 6 and 7----------------------------------------------------------------------------------------------");
//combining parts in one block as they use the same code
let imagesize = Math.floor(Math.random() * 8) + 1; //generates number
printOut("Uploaded image size is: " + imagesize + "MP");
let minsize = 4; 

if (imagesize >= 6) {
  printOut("Your image is too large");
}
 else if (imagesize >= minsize) {
  printOut("Thank you");
}  else {
  printOut("The image is too small");
}

printOut(newLine);

printOut("--- Part 8 and 9 ----------------------------------------------------------------------------------------------");
//combining parts

const monthList = ["January", "February", "Mars", "April", "Mai", 
  "Jun", "Juli", "August", "September", "October", "November", "December"];
const noOfMonth = monthList.length;
const monthName = monthList[Math.floor(Math.random() * noOfMonth)];

const days = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31]; //list of the days in each month
// index of the selected month
const monthIndex = monthList.indexOf(monthName);
// days in month chosen
const monthDays = days[monthIndex];

printOut("Your month is: " + monthName);
printOut("Days in your month: " + monthDays);

if (monthName.includes("r") || monthName.includes("R")) //r or R
  {
  printOut("You must take vitamin D");
} else {
  printOut("You do not need to take vitamin D");
}
printOut(newLine);


printOut("--- Part 10 ---------------------------------------------------------------------------------------------");
//using the constants from the previous part
printOut("It is " + monthName)
if (monthName.includes("March") || monthName.includes("May"))
{ 
  printOut("Gallery closed for refurbishing")
} else if (monthName.includes("April")) {
  printOut("Gallery moved to building next door for April")
} else {
  printOut("The gallery is open")
}

printOut(newLine);
