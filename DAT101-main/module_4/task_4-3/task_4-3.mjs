"use strict";

const CarTypes = [
  { value: 1, caption: "Aston Martin" },
  { value: 2, caption: "Bentley" },
  { value: 3, caption: "Alfa Romeo" },
  { value: 4, caption: "Ferrari" },
  { value: 5, caption: "Subaru" },
  { value: 6, caption: "Porsche" },
  { value: 7, caption: "Tesla" },
  { value: 8, caption: "Toyota" },
  { value: 9, caption: "Renault" },
  { value: 10, caption: "Peugeot" },
  { value: 11, caption: "Suzuki" },
  { value: 12, caption: "Mitsubishi" },
  { value: 13, caption: "Nissan" },
];

const GirlsNames = ["Anne", "Inger", "Kari", "Marit", "Ingrid", "Liv", "Eva", "Berit", "Astrid", "Bjørg", "Hilde", "Anna", "Solveig", "Marianne", "Randi", "Ida", "Nina", "Maria", "Elisabeth", "Kristin"];

const MovieGenre = [
  "Action",
  "Adventure",
  "Animation",
  "Biography",
  "Comedy",
  "Crime",
  "Documentary",
  "Drama",
  "Family",
  "Fantasy",
  "Film Noir",
  "History",
  "Horror",
  "Music",
  "Musical",
  "Mystery",
  "Romance",
  "Sci-Fi",
  "Short",
  "Sport",
  "Superhero",
  "Thriller",
  "War",
  "Western",
];

//--- Part 1 ----------------------------------------------------------------------------------------------

function calculateRectangle() {
  // Access inputs
  const width = parseFloat(document.getElementById("txtRectWidth").value);
  const height = parseFloat(document.getElementById("txtRectHeight").value);

  // Access output paragraph
  const output = document.getElementById("txtTask1Output");

  // Calculate perimeter and area
  const perimeter = 2 * (width + height);
  const area = width * height;

  // Display results
  output.textContent = `Circumference = ${perimeter}, Area = ${area}`;
}

// Attach the event listener
document
  .getElementById("cmbTask1Calculate")
  .addEventListener("click", calculateRectangle);

//--- Part 2 ----------------------------------------------------------------------------------------------


const task2Words = [];

function handleWordKeyPress(event) {
  const inputField = document.getElementById("txtTask2Word");
  const output = document.getElementById("txtTask2Output");

  if (event.key === "Enter") {
    const word = inputField.value.trim(); 

    if (word) {
      task2Words.push(word);
      // Update the output 
      output.textContent = `Number of words = ${task2Words.length}, Words = ${task2Words.join(", ")}`;
      // Clear the input field
      inputField.value = "";
    }
  }
}

// Attach the event listener to the input field
document
  .getElementById("txtTask2Word")
  .addEventListener("keypress", handleWordKeyPress);

//--- Part 3 ----------------------------------------------------------------------------------------------

function checkSelectedCheckboxes() {
  const checkboxes = document.querySelectorAll('input[name="chkTask3"]:checked'); // Get all checked checkboxes
  const output = document.getElementById("txtTask3Output");

  if (checkboxes.length > 0) {
    const selectedValues = Array.from(checkboxes).map((checkbox) => checkbox.value); // Get values of selected checkboxes
    output.textContent = `Selected: ${selectedValues.join(", ")}`;
  } else {
    output.textContent = "Nothing selected";
  }
}

document
  .getElementById("cmbTask3CheckAnswer")
  .addEventListener("click", checkSelectedCheckboxes);


//--- Part 4 ----------------------------------------------------------------------------------------------

function populateCarRadios() {
  const carDiv = document.getElementById("divTask4Cars");
  const output = document.getElementById("txtTask4Output");

  // Loop through the CarTypes array and create radio buttons
  CarTypes.forEach((car) => {
    const label = document.createElement("label");
    const radio = document.createElement("input");

    radio.type = "radio";
    radio.name = "car"; 
    radio.value = car.caption;

    // Add event listener to each radio button
    radio.addEventListener("click", () => {
      output.textContent = `Selected car: ${car.caption}`;
    });
    label.appendChild(radio);
    label.appendChild(document.createTextNode(car.caption));
    carDiv.appendChild(label);
    carDiv.appendChild(document.createElement("br")); 
  });
}

populateCarRadios();


//--- Part 5 ----------------------------------------------------------------------------------------------
/* Put your code below here!*/

//--- Part 6 ----------------------------------------------------------------------------------------------
/* Put your code below here!*/

//--- Part 7 ----------------------------------------------------------------------------------------------
/* Put your code below here!*/
