const nameEl = document.querySelector("#input-delName input");

// // Setting the attribute :
// // Element.setAttribute("name", "FullName")// set the attribete with value
// nameEl.setAttribute("value", "Gokul");

// // Getting the attribute :
// const isAliveDom = nameEl.getAttribute("isAlive");

// const placeDom = nameEl.getAttribute("place");

// const interestDom = nameEl.getAttribute("interest");

// console.log(`${isAliveDom}
// ${placeDom}
// ${interestDom}`);

// console.log(nameEl.attributes); // List all Attributes in Elements
// console.log(nameEl.attributes[6].value); // Attributes Index and its VAlue
// console.log(nameEl.attributes.place.value); // Attributes By Property Name
// console.log(nameEl.attributes["interest"].value); // Attributes By Bracket Notation

// // Methods :
// console.log(nameEl.hasAttribute("place")); // Check Attribute

// nameEl.removeAttribute("isAlive"); // Remove Attribute

// console.log(nameEl.style); // Return CSS Style Declaration

console.log(nameEl.dataset); //Attributes  Value in Dataset
console.log(nameEl.dataset.place); //get value of attributes in dataset
console.log(nameEl.dataset["place"]);

let BoolValue = nameEl.dataset.working == "true";
console.log(BoolValue);
console.log(typeof BoolValue);

// Task : Display All Attributes Dynamically.
for (let attr of nameEl.attributes) {
  console.log(`${attr.name} is ${attr.value}`);
}
