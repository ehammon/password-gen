// Declare variables
var isNums = "12345667890";
var upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var lowerCase = "abcdefghijklmnopqrstuvwxyz";
var special = "!#$%&'()*+,-./:;<=>?@[\]^_`{|}~";
var selections = "";


//Set password length
var length = prompt("To set length of password, please choose a number between 8-128.");
console.log(length);

  if (Number.isNaN(length)){
  alert("Password length must be a number")
  }

  if (length < 8 || length > 128) {
    alert ("Please choose a number within the range")
  }


//Get references to password contents

//


// Get references to the #generate button to initiate sequence
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
