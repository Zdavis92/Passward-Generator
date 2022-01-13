// Assignment code here
var charactorOpt = [];
var genPassword = ""

function useLower() {
  var lower = window.prompt ("Would you like to use lowercase letters? Please enter 'Yes' or 'No'");
  lower = lower.toLowerCase();

  if (lower === "yes") {
    var lowerLetters = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
    var random = Math.floor(Math.random() * lowerLetters.length);
    var randomLow = lowerLetters[random];
    genPassword = genPassword + randomLow;
    charactorOpt = charactorOpt.concat(lowerLetters);
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
    charactorOpt = charactorOpt.concat(upperLetters);
  }
  else if (upper === "no"){
    useNumber();
  }
  else {
    window.alert("Please enter a valid response")
    useUpper();
  }
};
useLower();
console.log(genPassword);
console.log(charactorOpt);
// // Get references to the #generate element
// var generateBtn = document.querySelector("#generate");

// // Write password to the #password input
// function writePassword() {
//   var password = generatePassword();
//   var passwordText = document.querySelector("#password");

//   passwordText.value = password;

// }

// // Add event listener to generate button
// generateBtn.addEventListener("click", writePassword);