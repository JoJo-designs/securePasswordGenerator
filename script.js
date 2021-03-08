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
var i = 1;

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

//repeating loop
//function createpassword() {
 //for (var i = 0; i< useAnswer; i++);{
  // console.log(i);
 //}  
//}

//functions to randomize characters and an array of the array names
function seclectRandomCharacter(arrayOfCharacters) {
  var item = arrayOfCharacters[Math.floor(Math.random() * arrayOfCharacters.length)];
  return item;
}

function seclectRandomArray(arrayOfArrays) {
  var item2 = arrayOfArrays[Math.floor(Math.random() * arrayOfArrays.length)];
  return item2;
}

// do while statment to see if it works.  If I could get it to run each statment and add to 
// 'i' I think this will work.
function doWhile () {
  do {
    if (useUpperCase){
     console.log(seclectRandomCharacter(perams.upperCase));
     i + 1;
    }
    if (useLowerCase){
      console.log(seclectRandomCharacter(perams.lowerCase));
      i + 1;
   }
    if (useNumeric){
     console.log(seclectRandomCharacter(perams.numeric));
     i + 1;
    }
    if (useSpecialCharacters){
      console.log(seclectRandomCharacter(perams.specialCharacters));
      i + 1;
    }
  }
  //when the while statment looks like ( while (i <= useAnswer)) it keep running forever
  // when the while statment looks like (while (i >= useAnswer)) it only ever runs once
  while (i >= useAnswer) {
    }; 
};

// Add event listener to generate button
generateBtn.addEventListener("onclick", writePassword);

//makes prompts and alerts/confirms
document.getElementById("generate").onclick = function () {
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
    console.log(seclectRandomCharacter(perams.upperCase));
  } else if (!useUpperCase){
    console.log("The user doesnt want upper case characters"); 
  }
  if (useLowerCase){
    console.log("The user wants lower case characters"); 
    console.log(seclectRandomCharacter(perams.lowerCase));
  } else if (!useLowerCase){
    console.log("The user doesnt want lower case characters"); 
  }
  if (useNumeric){
    console.log("The user wants numbers"); 
    console.log(seclectRandomCharacter(perams.numeric));
  } else if (!useNumeric){
    console.log("The user doesnt want numbers"); 
  }
  if (useSpecialCharacters){
    console.log("The user wants special characters"); 
    console.log(seclectRandomCharacter(perams.specialCharacters));
  } else if (!useSpecialCharacters){
    console.log("The user doesnt want special characters"); 
  } 
  if (useUpperCase, useLowerCase, useNumeric, useSpecialCharacters === false) {
    alert("Invailed Answer. Please pick atleast one character set");
    console.log("no characters selected")
    return;
  } 
     
  //console logs a random array from the array list I want to be able to make 
  //the program select a random array and then a character from the array and 
  //continue that until the number is equal to the useAnswer. I am not sure this 
  //is a good idea. It would be easier to just to set an order and have it always 
  //pick in that order.
  console.log(seclectRandomArray (perams.arrayList));
  
  // Loop the arrays and only selects the ones that comes up true. If it works.
  // but It will only partly work becuase it will run the loop and select a value
  // for each which could be up to 4 characters for each loop. 
 // createpassword(); {
   // if (useUpperCase){
   //  console.log(seclectRandomCharacter(perams.upperCase));
   //  i + 1;
   // }
    //if (useLowerCase){
    //  console.log(seclectRandomCharacter(perams.lowerCase));
    //  i + 1;
   // }
    //if (useNumeric){
    //  console.log(seclectRandomCharacter(perams.numeric));
    //  i + 1;
   // }
   // if (useSpecialCharacters){
    //  console.log(seclectRandomCharacter(perams.specialCharacters));
   //   i + 1;
   // }
  //}
  doWhile ();
};



//createpassword () {
  //if (useUppercase) {
   // console.log(seclectRandomCharacter(perams.upperCase))
 // }
//};

//test randomization
console.log(seclectRandomCharacter(perams.upperCase))
console.log(seclectRandomCharacter(perams.lowerCase))
console.log(seclectRandomCharacter(perams.specialCharacters))
console.log(seclectRandomCharacter(perams.numeric))
console.log(seclectRandomArray(perams.arrayList))