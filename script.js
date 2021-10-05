// Assignment code here




// DOM Values
var password = document.getElementById("password");
var length = document.getElementById("length");
var uppercase = document.getElementById("uppercase");
var lowercase = document.getElementById("lowercase");
var numbers = document.getElementById("numbers");
var symbols = document.getElementById("symbols");
var generate = document.getElementById("generate");




// Event Listeners
generate.addEventListener("click", () => {

  var characterAmount = length.value;
  console.log(characterAmount);

  if (uppercase.checked === true) {
    console.log("checked");
  }

  if (uppercase.checked === false) {
    console.log("unchecked");
  }

  if (lowercase.checked === true) {
    console.log("checked");
  }

  if (lowercase.checked === false) {
    console.log("unchecked");
  }

  if (numbers.checked === true) {
    console.log("checked");
  }

  if (numbers.checked === false) {
    console.log("unchecked");
  }

  if (symbols.checked === true) {
    console.log("checked");
  }

  if (symbols.checked === false) {
    console.log("unchecked");
  }

})




// Functions
function generatePassword() {

}










// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
