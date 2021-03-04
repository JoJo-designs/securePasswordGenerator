// Assignment Code
var generateBtn = document.querySelector("#generate");
var perams = {
  min: 8,
  max: 124,
  upperCase: ["A", "B", "C","D", "E", "F","G", "H", "J","K", "L", "M", "N", "P", "Q", "R", "S","T", "U", "V","W", "X", "Y", "Z"],
  lowerCase: ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"],
  numeric: [1,2,3,4,5,6,7,8,9,0],
  specialCharacters: ["!", "#", "@", "$", "%", "^", "&", "(", ")", "*", "=", "+", "_", "-", "/", "<", ">", "?", "[", "]", "{", "}", "~"],
}

var useAnswer;
var useUpperCase;
var useLowerCase;
var useNumeric;
var useSpecialCharacters;

 // testing arrays
console.log(perams.shorter);
console.log(perams.longer);
console.log(perams.upperCase);
console.log(perams.lowerCase);
console.log(perams.numeric);
console.log(perams.specialCharacters);

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("onclick", writePassword);

document.getElementById("generate").onclick = function(){
useAnswer = prompt ("what is your passwords lenght?", "8 to 124 characters");
console.log(useAnswer);
if (useAnswer < perams.min) {
    alert("password is too short please use a number between 8 and 124.");
    return;
 } else if (useAnswer > perams.max){
    alert("password is too long please use a number between 8 and 124.");
    return;
  } else if (useAnswer === "8 to 124 characters"){
    alert("please select a number");
    return;
      } else (useAnswer >= 8 && useAnswer <= 124)
        useUpperCase = confirm("Would you like to have upper case letters?");
        console.log(useUpperCase);
        useLowerCase = confirm("Would you like to have lower case letters?");
        console.log(useLowerCase);
        useNumeric = confirm("Would you like to use numbers?");
        console.log(useLowerCase);
        useSpecialCharacters = confirm("Would you like to use special characters?");
        console.log(useSpecialCharacters);
return [useAnswer, useNumeric, useSpecialCharacters, useUpperCase, useLowerCase];
}


function writepasswords() {
   if (useUpperCase = true); {
   console.log(writePasswords)
   }
}


console.log(Math.ceil(Math.random()));
