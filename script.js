// Assignment Code
var generateBtn = document.querySelector("#generate");
var perams = {
min:  8,
max: 124,
upperCase: ["A", "B", "C", "D", "E", "F", "G", "H", "J", "K", "L", "M", "N", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"],
lowerCase: ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"],
numeric: [1, 2, 3, 4, 5, 6, 7, 8, 9, 0],
specialCharacters: ["!", "#", "@", "$", "%", "^", "&", "(", ")", "*", "=", "+", "_", "-", "/", "<", ">", "?", "[", "]", "{", "}", "~"],
arrayList: [ "upperCase", "lowerCase", "numeric", "specialCharacters"],
}

var useAnswer;
var useUpperCase;
var useLowerCase;
var useNumeric;
var useSpecialCharacters;
var password = "";
var allArrays = [];
var passwordLenght = useAnswer;

// testing arrays
console.log(perams.min);
console.log(perams.max);
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

//functions to randomize characters and an array of the array names
function seclectRandomCharacter(arrayOfCharacters) {
  var item = arrayOfCharacters[Math.floor(Math.random() * arrayOfCharacters.length)];
  return item;
}

//makes prompts and alerts/confirms
function generatePassword() {
  useAnswer = prompt("What is your passwords lenght?");
  useAnswer = parseInt(useAnswer)
  console.log(useAnswer);
// check if the entered value is a number between 8 and 124.
  if (isNaN(useAnswer) || useAnswer < perams.min || useAnswer > perams.max) { 
    alert("Invaild Answer. Please seclect a number between 8 and 124");
    return;
  } else  {
// ask if the user wants uppercase
  useUpperCase = confirm("Would you like to have upper case letters?"); 
  console.log(useUpperCase);
  // ask if the user wants lowercase
  useLowerCase = confirm("Would you like to have lower case letters?"); 
  console.log(useLowerCase);
  // ask if the user wants numbers
  useNumeric = confirm("Would you like to use numbers?"); 
  console.log(useLowerCase);
  // ask the user if they wants special characters
  useSpecialCharacters = confirm("Would you like to use special characters?"); 
  console.log(useSpecialCharacters);
  }


  // if statments to confirm what the users 
  if (useUpperCase){
    console.log("The user wants upper case characters"); 
    password = password + seclectRandomCharacter(perams.upperCase);
    allArrays = allArrays.concat(perams.upperCase);
    } else if (!useUpperCase){
    console.log("The user doesnt want upper case characters"); 
  }

  if (useLowerCase){
    console.log("The user wants lower case characters"); 
    //console.log(seclectRandomCharacter(perams.lowerCase));
    password = password + seclectRandomCharacter(perams.lowerCase);
    allArrays = allArrays.concat(perams.lowerCase);
  } else if (!useLowerCase){
    console.log("The user doesnt want lower case characters"); 
  }

  if (useNumeric){
    console.log("The user wants numbers"); 
    //console.log(seclectRandomCharacter(perams.numeric));
    password = password + seclectRandomCharacter(perams.numeric);
    allArrays = allArrays.concat(perams.numeric);
  } else if (!useNumeric){
    console.log("The user doesnt want numbers"); 
  }

  if (useSpecialCharacters){
    console.log("The user wants special characters"); 
    //console.log(seclectRandomCharacter(perams.specialCharacters));
    password = password + seclectRandomCharacter(perams.specialCharacters);
    allArrays = allArrays.concat(perams.specialCharacters);
    console.log(password);
    console.log(allArrays);
  } else if (!useSpecialCharacters){
    console.log("The user doesnt want special characters"); 
  } 

  if (! (useUpperCase || useNumeric || useSpecialCharacters || useLowerCase)) {
    alert("Invailed Answer. Please pick atleast one character set");
    console.log("no characters selected")
    return;
  } 

  currentPasswordLength = password.length;

  for(var i=currentPasswordLength; i < useAnswer ;i++){
    password = password + seclectRandomCharacter(allArrays);
  }

  return password;
};

//test randomization
console.log(seclectRandomCharacter(perams.upperCase))
console.log(seclectRandomCharacter(perams.lowerCase))
console.log(seclectRandomCharacter(perams.specialCharacters))
console.log(seclectRandomCharacter(perams.numeric))

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);