// DOM Values
var password = document.getElementById("password");
var length = document.getElementById("length");
var uppercase = document.getElementById("uppercase");
var lowercase = document.getElementById("lowercase");
var numbersBox = document.getElementById("numbers");
var symbolsBox = document.getElementById("symbols");
var generate = document.getElementById("generate");

const randomLooper = {
  upper: RandomUpper,
  lower: RandomLower,
  numbers: RandomNumbers,
  symbols: RandomSymbols,
};

// Event Listeners
// generate.addEventListener("click", () => {

//   const characterAmount = +length.value;
//   const hasUpper = uppercase.checked;
//   const hasLower = lowercase.checked;
//   const hasNumbers = numbers.checked;
//   const hasSymbols = symbols.checked;

//   password.innerText = generatePassword(
//     characterAmount,
//     hasUpper,
//     hasLower,
//     hasNumbers,
//     hasSymbols,
//   );
// });

// Functions
function RandomUpper() {
  return String.fromCharCode(Math.floor(Math.random() * 26) + 65);
}

function RandomLower() {
  return String.fromCharCode(Math.floor(Math.random() * 26) + 97);
}

function RandomNumbers() {
  return String.fromCharCode(Math.floor(Math.random() * 10) + 48);
}

function RandomSymbols() {
  return String.fromCharCode(Math.floor(Math.random() * 15) + 33);
}

function checkCharLength(characterAmount) {
  if (characterAmount < 8 || characterAmount > 128) {
    return false;
  } else {
    return true;
  }
}

function generatePassword({ upper, lower, numbers, symbols }) {
  const characterAmount = +length.value;
  const hasUpper = uppercase.checked;

  const hasLower = lowercase.checked;
  const hasNumbers = numbersBox.checked;
  const hasSymbols = symbolsBox.checked;
  let passwordFormation = "";
  const settingsCount = hasUpper + hasLower + hasNumbers + hasSymbols;

  const settingsArray = [{ upper }, { lower }, { numbers }, { symbols }].filter(
    (item) => Object.values(item)[0]
  );

  if (checkCharLength(characterAmount)) {
  } else {
    return "Password length must be between 8-128 characters";
  }

  if (settingsCount === 0) {
    return "";
  }

  for (i = 0; i < characterAmount; i++) {
    settingsArray.forEach((type) => {
      const forLooper = Object.keys(type)[0];
      passwordFormation += randomLooper[forLooper]();
    });
  }

  const finalPassword = passwordFormation.slice(0, characterAmount);

  return finalPassword;
}

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword(randomLooper);
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
