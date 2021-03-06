// Assignment Code
var generateBtn = document.querySelector("#generate");

var min = 8;
var max = 124;
var upperCase = ["A", "B", "C", "D", "E", "F", "G", "H", "J", "K", "L", "M", "N", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
var lowerCase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var numeric = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];
var specialCharacters = ["!", "#", "@", "$", "%", "^", "&", "(", ")", "*", "=", "+", "_", "-", "/", "<", ">", "?", "[", "]", "{", "}", "~"];


var useAnswer;
var useUpperCase;
var useLowerCase;
var useNumeric;
var useSpecialCharacters;
var values;

// testing arrays
console.log(min);
console.log(max);
console.log(upperCase);
console.log(lowerCase);
console.log(numeric);
console.log(specialCharacters);



// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("onclick", writePassword);

document.getElementById("generate").onclick = function () {
  useAnswer = prompt("What is your passwords lenght?");
  useAnswer = parseInt(useAnswer)
  console.log(useAnswer);
  if (isNaN(useAnswer) || useAnswer < min || useAnswer > max) { // check if the entered value is a number between 8 and 124.
    alert("Invaild Answer. Please seclect a number between 8 and 124");
    return;
  }
  useUpperCase = confirm("Would you like to have upper case letters?"); // ask if the user wants uppercase
  console.log(useUpperCase);
  useLowerCase = confirm("Would you like to have lower case letters?"); // ask if the user wants lowercase
  console.log(useLowerCase);
  useNumeric = confirm("Would you like to use numbers?"); // ask if the user wants numbers
  console.log(useLowerCase);
  useSpecialCharacters = confirm("Would you like to use special characters?"); // ask the user if they wants special characters
  console.log(useSpecialCharacters);
  return
}

function seclectRandomCharacter(arrayOfCharacters) {
  var item = arrayOfCharacters[Math.floor(Math.random() * arrayOfCharacters.lenght)];
  return item;
}

console.log(seclectRandomCharacter(upperCase))
console.log(seclectRandomCharacter(lowerCase))
console.log(seclectRandomCharacter(specialCharacters))
console.log(seclectRandomCharacter(numeric))
