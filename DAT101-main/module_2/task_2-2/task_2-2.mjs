"use strict";
import { initPrintOut, printOut, newLine } from "../../common/script/utils.mjs";
initPrintOut(document.getElementById("txtOut"));

printOut("--- Part 1 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/
/*no parantheses */
let Originalexpression1 = 2 + 3 * 2 - 4 * 6;
printOut("The expression 2 + 3 * 2 - 4 * 6 = " + Originalexpression1);
printOut(newLine);
/*with paranthesis*/
let modifiedexpression1 = 2 + (3 * (2 - 4) * 6);
printOut("The modified expression with paranthesis: 2 + (3 * (2 - 4) * 6) = " + modifiedexpression1);
printOut(newLine);


printOut("--- Part 2 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/

/*Conversions */
const InchToMillimeter = 25.4;
const Meterstocentimeters = 100;
const centimeterstomillimeters = 10;

/*static variables*/

let meters = 25;
let centimeters = 34;

/*meters to centimeters*/

let metersconversion = meters * Meterstocentimeters;
let meterandcentimeter = metersconversion + centimeters;

/*centimeter to millimeter*/

let millimeter = meterandcentimeter * centimeterstomillimeters;

/*convert to inches*/

let FinalanswerMandCM = millimeter / InchToMillimeter;




printOut("25 Meters and 34 centimeters converted to inches is: " + FinalanswerMandCM.toFixed(2));
printOut(newLine);

printOut("--- Part 3 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/

/*Setting values for minutes*/

const minutesday = 1440;
const mininhours = 60;
const secondsinminute = 60;

/*given values*/

let days = 3;
let hours = 12;
let minutes = 14;
let seconds = 45

/*now to convert everything to minutes*/

let convertedvalues = (days*minutesday) + (hours * mininhours) + minutes + (seconds/secondsinminute);



printOut("3 days, 12 hours, 14 minutes, and 45 seconds converted to minutes is: " + convertedvalues + " minutes");
printOut(newLine);

printOut("--- Part 4 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/

/*can use constants and variables from the previous part here*/

let part4minutes = 6322.52;

let part4days = part4minutes / minutesday;
let part4hours = part4minutes / mininhours;
let part4seconds = part4minutes * secondsinminute;  

printOut("6,322.52 minutes is: " + part4days.toFixed(2) + " days " + part4hours.toFixed(2) + " hours " + part4minutes.toFixed(2) +  " minutes " + part4seconds.toFixed(2) + " seconds "  );
printOut(newLine);

printOut("--- Part 5 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/

let dollarvalue = 54;
const nok = 76;
const dollar = 8.6;

/*very optimistic conversion*/

let usdtonokexchange = nok / dollar;
let noktousdexchange = dollar / nok;

/*conversions*/
/*usd to nok*/
let nokamount = Math.round(dollarvalue * usdtonokexchange);

/*nok to usd*/
let usdamount = Math.round(nokamount * noktousdexchange);


printOut("54 dollars converted to Norwegian Kroner is: " + nokamount + " kroner ");
printOut(newLine);

printOut("Converted back to USD is: " + usdamount + " dollars");
printOut(newLine);




printOut("--- Part 6 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/

let followingText = "There is much between heaven and earth that we do not understand.";

printOut("Including whitespaces, the given text has the following amount of characters: " + followingText.length);
printOut(newLine);

/*here i am using regex to replace all empty spaces (\s) with an empty string (""). g means that it will do this on the entire string and not just the first space*/
printOut("Excluding whitespaces, the given text has the following amount of characters: " + followingText.replace(/\s/g, "").length);
printOut(newLine);

/*printing charecter 19*/
let letterat = followingText.charAt(19);

printOut("The character at position number 19 is: " + letterat);
printOut(newLine);

/*printing characters 35 to 45*/
let to43 = followingText.substring(35, 43); 

printOut("The characters starting at position number 35 and 8 characters forward are: " + to43);
printOut(newLine);

let indexof = followingText.indexOf("earth")

printOut("The index at which earth starts in the text is " + indexof);
printOut(newLine);


printOut("--- Part 7 ----------------------------------------------------------------------------------------------");
/* Comparisons using comparison symbols*/

let comparison1 = 5 > 3;
printOut("Is 5 greater than 3? " + comparison1);
printOut(newLine);

let comparison2 = 7 >= 7;
printOut("Is 7 greater than or equal to 7? " + comparison2);
printOut(newLine);

let comparison3 = "a" > "b";
printOut("is a greater than b? " + comparison3);
printOut(newLine);

let comparison4 = "1" > "a";
printOut("Is 1 less than a? " + comparison4);
printOut(newLine);

let comparison5 = "2500" < "abcd";

printOut("Is 2500 less than abcd? " + comparison5);
printOut(newLine);

let comparison6 = "arne" !== "thomas";
printOut("arne is not equal to thomas " + comparison6);
printOut(newLine);

let comparison7 = 2 == 5;
printOut("(2 equals 5) is this statement true? " + comparison7);
printOut(newLine);

/*using ! to "switch" truth values, since without it I get that the answer is false,
 which is true, but not what the (trick) statement asks for*/
let comparison8 = "abcd" > "bcd"
printOut("(abcd is greater than bcd) is this statement false? " + !comparison8);
printOut(newLine);

printOut("--- Part 8 ----------------------------------------------------------------------------------------------");
/*just using pareseint and parsefloat*/

printOut("254 converted to a number is " + parseInt(254));
printOut(newLine);

printOut("57.23 converted to a number is " + parseFloat(57.23));
printOut(newLine);

printOut("25 kroner converted to a number is " + parseInt("25 kroner"));
printOut(newLine);

printOut("--- Part 9 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/
let r = Math.floor(Math.random() * 360) + 1;
printOut("Variable r has been randomly assigned the number: " + r);
printOut(newLine);

/* Task 10*/
printOut("--- Part 10 ---------------------------------------------------------------------------------------------");
/* Put your code below here!*/

let totaldays = 131;
/*rounding down to integers*/
let weeks = Math.floor(totaldays/7);
/*doing the oppsite. Retrieving the remainder thats left when dividing 131/7*/
let remainingdays = totaldays % 7 ;
printOut("131 days is " + weeks + " weeks and " + remainingdays + " days ");
printOut(newLine);