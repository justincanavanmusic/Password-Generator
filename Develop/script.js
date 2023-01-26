// Assignment Code


let generateBtn = document.querySelector("#generate");

  
// Write password to the #password input
function writePassword() {
  
  let password = generatePassword();
  
  let passwordText = document.querySelector("#password");


  //changes value to password function?
  passwordText.value = password;
  
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

function writePassword(){
  prompt('Do you want uppercase letters?');
  prompt('Do you want lowercase letters?');
  prompt('Do you want numbers?');
  prompt('Do you want special characters?');
}
//if statement, if these are true than use and if not then don't


        //up letters list
var upLetters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];

var upLetters = upLetters[Math.floor(Math.random()*upLetters.length)];
console.log(upLetters);

var downLetters = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

var downLetters = downLetters[Math.floor(Math.random()*downLetters.length)];
console.log(downLetters);

      // numbers list
var numbers = ["0","1","2","3","4","5","6","7","8","9"];

var numbers = numbers[Math.floor(Math.random()*numbers.length)];
console.log(numbers);

var specials = ["!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "+", "-", ".", "`", "~", "|", "<", ">", "=", "-", "_"]

var specials = specials[Math.floor(Math.random()*specials.length)];
console.log(specials);