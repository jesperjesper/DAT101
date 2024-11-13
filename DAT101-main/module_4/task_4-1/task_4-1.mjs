"use strict";
import { initPrintOut, printOut, newLine } from "../../common/script/utils.mjs";
initPrintOut(document.getElementById("txtOut"));

printOut("--- Part 1 ----------------------------------------------------------------------------------------------");
const AccountType = {
    Normal: "Brukskonto",
    Saving: "Sparekonto",
    Credit: "Kredittkonto",
    Pension: "Pensjonskonto"
  };
  
  printOut(Object.values(AccountType).join(", "));

printOut(newLine);



printOut("--- Part 2, Part 3, Part 4----------------------------------------------------------------------------------------------");

class TAccount {
    #type; 
    #balance = 0; 
    #withdrawCount = 0; 
  
    constructor(aType) {
      this.#type = aType;
    }
  
    getBalance() {
      return this.#balance;
    }
  
    deposit(amount) {
        this.#balance += amount;
        this.#withdrawCount = 0; 
        printOut(`Deposit of ${amount}, new balance is ${this.#balance}`);
    }
  
    withdraw(amount) {
      switch (this.#type) {
        case "Pension":
          printOut("You can't Withdraw from a Pensionskonto!");
          return;
        case "Saving":
          if (this.#withdrawCount >= 3) {
            printOut("You can't Withdraw from a Sparekonto more than three times!");
            return;
          }
          break;
      }

      this.#balance -= amount;
      this.#withdrawCount++;
      printOut(`Withdrawal of ${amount}, new balance is ${this.#balance}`);
    }
  
    toString() {
      return this.#type;
    }
  
    setType(aType) {
      printOut(`Account is changed from ${this.#type} to ${aType}`);
      this.#type = aType;
      this.#withdrawCount = 0; // reset
    }
  }
  
  const myAccount = new TAccount("Brukskonto");

  // slik som i oppgaveteksten
  myAccount.setType("Sparekonto");       
  myAccount.deposit(25);            


  myAccount.withdraw(30);            
  myAccount.withdraw(30);           
  myAccount.withdraw(30);            
  myAccount.withdraw(30);           
  myAccount.setType("Pensionskonto");     
  myAccount.withdraw(10);            
  myAccount.setType("Sparekonto");       
  myAccount.withdraw(10);            

printOut(newLine);


printOut("--- Part 5 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/
printOut("I did not complete the rest of this assignment in time. Will probably return to this later");
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
