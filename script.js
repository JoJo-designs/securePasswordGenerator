// Assignment Code
var generateBtn = document.querySelector("#generate");
var perams = {
  shorter: 8,
  longer: 124,
  upperCase: ["A", "B", "C","D", "E", "F","G", "H", "J","K", "L", "M", "N", "P", "Q", "R", "S","T", "U", "V","W", "X", "Y", "Z"],
  lowerCase: ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"],
  numeric: [1,2,3,4,5,6,7,8,9,0],
  specialCharacters: ["!", "#", "@", "$", "%", "^", "&", "(", ")", "*", "=", "+", "_", "-", "/", "<", ">", "?", "[", "]", "{", "}", "~"],
}

var length = {};
var response = {};

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
length = prompt ("what is your passwords lenght?");
return [response = {}];
} 

if (response > perams.shorter) {
   console.log("password too short please use 8-124 characters.");
}