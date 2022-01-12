// Assignment code here
function useLower() {
  var lower = window.prompt ("Would you like to use lowercase letters? Please enter 'Yes' or 'No'");
  //add make lowercase here
  if (lower === "yes") {

  }
  else if (lower === "no"){

  }
  else {
    window.alert("Please enter a valid reps")
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
