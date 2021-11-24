// Declare variables
var isNums = "12345667890";
var upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var lowerCase = "abcdefghijklmnopqrstuvwxyz";
var special = "!#$%&'()*+,-./:;<=>?@][^_`{|}~";


//Get references to the #generate button to initiate sequence
var generateBtn = document.querySelector("#generate");



//Prompt about password length

var getLength = function() {
  
  let length = parseInt(window.prompt("Please choose a password length between 8 and 128 characters."))
  console.log(typeof length);
  //this isn't working...
  if(Number.isNaN(length)){
    alert("You must input a number.")
    return getLength();
  }

  if (length < 8){
  alert("Please choose a password length more than 8 characters.")
  return getLength();
  }

  if (length > 128) {
    alert("Please choose a password length less than 128 characters.")
    return getLength();
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

// Generate the password
var generatePassword = function(length, selections) {

  //Get references to password contents
  //let length = getLength();
  //let selections = createChars();
  let newPassword = "";
  

  //for loop to run through the selections
  for (let i = 0; i < length; i++){
  newPassword += selections.charAt(Math.floor(Math.random() * selections.length));
  }
  console.log(newPassword);
  return newPassword;
}


//Write password to the #password input
function writePassword() {
  let length = getLength();
  let selections = createChars();
  var password = generatePassword(length, selections);
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
};
// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

