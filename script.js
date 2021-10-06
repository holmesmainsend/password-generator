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

  const characterAmount = +length.value;
  console.log(characterAmount);

  const hasUpper = uppercase.checked;
  // Do this for each variable
  password.innerText = generatePassword(
    characterAmount,
    hasUpper,
    // Do this for each variable
  )
});



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
