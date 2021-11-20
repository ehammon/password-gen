// Declare variables
var isNums = "12345667890";
var upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var lowerCase = "abcdefghijklmnopqrstuvwxyz";
var special = "!#$%&'()*+,-./:;<=>?@[\]^_`{|}~";
var selections = "";


// Get references to the #generate button to initiate sequence
var generateBtn = document.querySelector("#generate");

//Set password length
var length = prompt("To set length of password, please choose a number between 8-128.");
console.log(length);

  if (Number.isNaN(length)){
  alert("Password length must be a number")
  }

  if (length < 8 || length > 128) {
    alert ("Please choose a number within the range")
  }

//Ask about password contents 
var lowerSelect = prompt("Would you like lower case characters?");
console.log(lowerSelect);

var upperSelect = prompt("Would you like upper case characters?");
console.log(upperSelect);

var numSelect = prompt("Would you like number characters?");
console.log(numSelect);

var specialSelect = prompt("Would you like special characters?");
console.log(specialSelect);

if (lowerSelect) {
  selections += lowerCase;
}

if (upperSelect) {
  selections += upperCase;
}

if (numSelect) {
  selections += isNums;
}

if (specialSelect) {
  selections += special;
  console.log(selections);
}

//Get references to password contents

//Capture their responses and create string of possible characters










// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
