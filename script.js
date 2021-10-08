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
  const hasUpper = uppercase.checked;
  const hasLower = lowercase.checked;
  const hasNumbers = numbers.checked;
  const hasSymbols = symbols.checked;


  password.innerText = generatePassword(
    characterAmount,
    hasUpper,
    hasLower,
    hasNumbers,
    hasSymbols,
  )
});




// Functions
function RandomUpper () {
  return String.fromCharCode(Math.floor(Math.random() * 26) + 65);
}

function RandomLower () {
  return String.fromCharCode(Math.floor(Math.random() * 26) + 97);
}

function RandomNumbers () {
  return String.fromCharCode(Math.floor(Math.random() * 10) + 48);
}

function RandomSymbols() {
  return String.fromCharCode(Math.floor(Math.random() * 15) + 33);
}

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
