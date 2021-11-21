// Declare variables
var isNums = "12345667890";
var upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var lowerCase = "abcdefghijklmnopqrstuvwxyz";
var special = "!#$%&'()*+,-./:;<=>?@][^_`{|}~";


//Get references to the #generate button to initiate sequence
var generateBtn = document.querySelector("#generate");

// Generate the password
var generatePassword = function() {

//Prompt about password length

var getLength = function() {
  //debugger;
  let length = window.prompt("Please choose a password length between 8 and 128 characters.")

  //this isn't working...
  if(Number.isNaN(length)){
    alert("You must input a number.")
    return ask();
  }

  if (length < 8){
  window.prompt("Please choose a password length more than 8 characters.")
  return null;
  }

  if (length > 128) {
    window.prompt("Please choose a password length less than 128 characters.")
    return null;
  }
  console.log(length);
  return length;
};

//Capture their responses
let createChars = function() {
  let selections = "";

var lowerSelect = window.confirm("Would you like lower case characters?");
console.log(lowerSelect);

var upperSelect = window.confirm("Would you like upper case characters?");
console.log(upperSelect);

var numSelect = window.confirm("Would you like number characters?");
console.log(numSelect);

var specialSelect = window.confirm("Would you like special characters?");
console.log(specialSelect);

if (lowerSelect === false && upperSelect === false && numSelect === false && specialSelect === false) {
  alert("You must choose at least one option.")
  return createChars();
}

//create string of chosen characters
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
return selections;
};



  //Get references to password contents
  let length = getLength();
  let selections = createChars();
  let newPassword = "";
  

  //for loop to run through the selections
  for (let i = 0; i < length; i++){
  newPassword += selections.charAt(Math.floor(Math.random() * selections.length));
  }
  console.log(newPassword);
  return newPassword;
}


//Write password to the #password input
//function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

// Add event listener to generate button
//generateBtn.addEventListener("click", writePassword);
