// Assignment code here
var characterOpt = [];
var genPassword = "";
var lengthInt = 0;

function useLower() {
  var lower = window.prompt ("Would you like to use lowercase letters? Please enter 'Yes' or 'No'");
  lower = lower.toLowerCase();

  if (lower === "yes") {
    var lowerLetters = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
    var random = Math.floor(Math.random() * lowerLetters.length);
    var randomLow = lowerLetters[random];
    genPassword = genPassword + randomLow;
    characterOpt = characterOpt.concat(lowerLetters);
    useUpper();
  }
  else if (lower === "no"){
    useUpper();
  }
  else {
    window.alert("Please enter a valid response")
    useLower();
  }
};

function useUpper() {
  var upper = window.prompt("Would you like to use uppercase letters? Please enter 'Yes or no'");
  upper = upper.toLowerCase();
  
  if (upper === "yes") {
    var upperLetters = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
    var random = Math.floor(Math.random() * upperLetters.length);
    var randomUpper = upperLetters[random];
    genPassword = genPassword + randomUpper;
    characterOpt = characterOpt.concat(upperLetters);
    useNumber();
  }
  else if (upper === "no"){
    useNumber();
  }
  else {
    window.alert("Please enter a valid response")
    useUpper();
  }
};

function useNumber() {
  var number = window.prompt("Would you like to use numbers? Please enter 'Yes or no'");
  number = number.toLowerCase();
  
  if (number === "yes") {
    var numbers = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
    var random = Math.floor(Math.random() * numbers.length);
    var randomNumber = numbers[random];
    genPassword = genPassword + randomNumber;
    characterOpt = characterOpt.concat(numbers);
    useSpecial();
  }
  else if (number === "no"){
    useSpecial();
  }
  else {
    window.alert("Please enter a valid response")
    useNumber();
  }
};

function useSpecial() {
  var special = window.prompt("Would you like to use special characters? Please enter 'Yes or no'");
  special = special.toLowerCase();
  
  if (special === "yes") {
    var specialCharacters = ['!', '@', '#', '$', '%', '&', '*', '+', '-', '_'];
    var random = Math.floor(Math.random() * specialCharacters.length);
    var randomSpecial = specialCharacters[random];
    genPassword = genPassword + randomSpecial;
    characterOpt = characterOpt.concat(specialCharacters);
    passwordLength();
  }
  else if (special === "no"){
    passwordLength();
  }
  else {
    window.alert("Please enter a valid response")
    useSpecial();
  }
};

function passwordLength() {
  var length = window.prompt("How long would you like your password to be? Please select a length between 8 and 128 characters")
  lengthInt = parseInt(length);
  if (lengthInt >= 8 && lengthInt <= 128) {
    generatePassword(lengthInt);
  }
  else {
    window.alert("Please enter a valid response")
    passwordLength();
  }
};

function generatePassword() {
  while (genPassword.length < lengthInt) {
    var random = Math.floor(Math.random() * characterOpt.length);
    var randomCharacter = characterOpt[random]
    genPassword = genPassword + randomCharacter
  }
};

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