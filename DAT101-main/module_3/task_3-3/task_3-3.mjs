"use strict";
import { initPrintOut, printOut, newLine } from "../../common/script/utils.mjs";
initPrintOut(document.getElementById("txtOut"));

printOut("--- Part 1 ----------------------------------------------------------------------------------------------");

function todaynorway() {
    // get todays date
    const today = new Date();
    // format the date
    const norwegiandate = today.toLocaleDateString("no-NB");
    // print the formatted date
    printOut(norwegiandate);
}
todaynorway();

printOut(newLine);

printOut("--- Part 2 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/
printOut("N/A");
printOut(newLine);

printOut("--- Part 3 ----------------------------------------------------------------------------------------------");

function circle(radius)
{

    let diameter = radius + radius;
    let circumferance = Math.PI * diameter;
    let area = Math.PI * radius * radius;

    printOut("your radius was: " + radius);
    printOut("the diamter of your circle is: " + diameter);
    printOut("The circumferance of this cirlce is: " + circumferance);
    printOut("the area of this circle is: " + area);
}
circle(5); //the radius is set here

printOut(newLine);

printOut("--- Part 4 ----------------------------------------------------------------------------------------------");

function rectangledimensions(rectangle) {
    let circumference = 2 * (rectangle.width + rectangle.height);
    let area = rectangle.width * rectangle.height;

    printOut("width is: " + rectangle.width);
    printOut("height is: " + rectangle.height);
    // Print the results
    printOut("the circumference of the rectangle is: " + circumference);
    printOut("the area of the rectangle is: " + area);

}
rectangledimensions({ width: 5, height: 5 });
printOut(newLine);




printOut("--- Part 5 ----------------------------------------------------------------------------------------------");

function conversion(temperature, type) {
    let celsius, fahrenheit, kelvin;

    if (type === "C") { //celcius conversions
        celsius = temperature;
        let KfromC = Math.round(celsius + 273.15);
        let FfromC = Math.round(celsius * 9/5 + 32);
        kelvin = KfromC;
        fahrenheit = FfromC;
    } 
    else if (type === "K") { //kelvin conversions
     
        kelvin = temperature;
        let FfromK = Math.round(1.8 * (kelvin - 273.15) + 32);
        let CfromK = Math.round(kelvin - 273.15);
        celsius = CfromK;
        fahrenheit = FfromK;
    } 
    else if (type === "F") { //fahrenheit conversios
        fahrenheit = temperature;
        let KfromF = Math.round((fahrenheit - 32) * 5/9 + 273.15);
        let CfromF = Math.round((fahrenheit - 32) * 5/9);
        kelvin = KfromF;
        celsius = CfromF;
    } else {
        return;
    }

    printOut("Original temperature: " + temperature + " " + type);
    printOut("Celsius: " + celsius + "°C");
    printOut("Kelvin: " + kelvin + "K");
    printOut("Fahrenheit: " + fahrenheit + "°F");
}

conversion(15, "C"); 
printOut(newLine);
conversion(100, "F");  
printOut(newLine);
conversion(20, "K"); 



printOut(newLine);

printOut("--- Part 6 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/
printOut("Replace this with you answer!");
printOut(newLine);

printOut("--- Part 7 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/
printOut("Replace this with you answer!");
printOut(newLine);

printOut("--- Part 8 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/
printOut("Replace this with you answer!");
printOut(newLine);

printOut("--- Part 9 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/
printOut("Replace this with you answer!");
printOut(newLine);

/* Task 10*/
printOut("--- Part 10 ---------------------------------------------------------------------------------------------");

function factorial(n) {
    // if n is 0 or 1, the factorial is 1
    if (n <= 1) {
        return 1;
    } 
    //use this function to find parameters of other numbers
    return n * factorial(n - 1);
}


let number = 5;
printOut("factorial of " + number + " is: " + factorial(number));




printOut(newLine);
