// Assignment code here
var charOp = [];
var genPassword = ""

function useLower() {
  var lower = window.prompt ("Would you like to use lowercase letters? Please enter 'Yes' or 'No'");
  //add make lowercase here
  if (lower === "yes") {
    var lowerLetters = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
  }
  else if (lower === "no"){

  }
  else {
    window.alert("Please enter a valid response")
  }
  
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
