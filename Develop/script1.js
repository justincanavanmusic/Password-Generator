// Assignment Code

//user clicks a button
    //event listener, "click", call function writePassword
    //inside function we prompt for pw length
    //prompts ALWAYS RETURNS STRINGS
      //var passwordLength = prompt("How many characters would you like your pw to contain")
        //we need to validate prompt so it meets criteria; must be number >8 <129


//then user confirms for pw criteria
    //var hasNumCriteria =confirm 



//object to store user input
  //var userPassword = {
    //  length: passwordLength,
    //  hasNumeric: hasNumeric,
    //  hasLower: hasLower,
    //  hasUpper: hasUpper,
    //  hasSpecial: hasSpecial

  //}
  //return userPassword;

  // if(userPassword.hasNumeric===true){

  // }


  //create another function to generate the password
  //var userOptions=getOptions();
  //array to store each criteria
  //var possibleChars= []
  //var result= []
  // if (userOptions.hasNumeric===true){
    //possibleChars=possibleChars.concat(numericCharacters);

  // }








  //user is prompted pw length

//user confirms for pw criteria

//pw is displayed to the screen













let generateBtn = document.querySelector("#generate");

  
// Write password to the #password input
function writePassword() {
  
  let password = generatePassword();
  
  // if(passwordLength<8) {
  //   alert("Password length must be at least 8 characters")
  // }
  
  let passwordText = document.querySelector("#password");


  //changes value to password function?
  passwordText.value = password;
  
}

// Add event listener to generate button        //means when you "click" the function "writePassword" is ran
generateBtn.addEventListener("click", writePassword);

// function writePassword(){


let charPrompt=parseInt (prompt('How many characters would you like your password to contain?'));

console.log(charPrompt);

//converted to number, we can now do conditional statements

// if (charPrompt===5) {
// console.log("is a number");
// }

// if (charPrompt<8) {
//   alert("password length is invalid");

//   return null;
// }

// if (charPrompt>129) {
//     alert("password length is too long");
  
//     return null;

// }


//if statement, set up alert     

// let specialConfirm=confirm('Click OK to confirm using special characters.'); 
// console.log(specialConfirm);

// let lowConfirm=confirm('Click OK to confirm using lowercase letters.'); 
// console.log(lowConfirm);

// let upConfirm=confirm('Click OK to confirm using uppercase letters.'); 
// console.log(upConfirm);

// let numConfirm=confirm('Click OK to confirm using numbers.'); 
// console.log(numConfirm);




  //conditional prompts
  // tooLongPrompt= prompt('Password length must be less than 129 characters.');              
  // tooShortPrompt= prompt('Password length must be at least 8 characters.');                 
  // mustSelectPrompt= prompt('Must select at least one character type')


//if statement, if these are true than use and if not then don't


                                      //up letters list
var upLetters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];


//.length is a METHOD
//how many letters there are
let upLettersLength=upLetters.length;  //26


var upLetters = upLetters[Math.floor(Math.random()*upLetters.length)];
console.log(upLetters);




        //down letters list   //26  
// var downLetters = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

// let downLettersLength=downLetters.length; 

// var downLetters = downLetters[Math.floor(Math.random()*downLetters.length)];
// console.log(downLetters);


      // numbers list   //10
var numbers = ["0","1","2","3","4","5","6","7","8","9"];     
      //length of numbers list
let numbersLength=numbers.length; 
      //equation to select a random number
var numbers = numbers[Math.floor(Math.random()*numbers.length)];

       
      //specials list   //21
var specials = ["!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "+", "-", ".", "`", "~", "|", "<", ">", "=", "-", "_"]
      
let specialsLength=specials.length;  
                           
var specials = specials[Math.floor(Math.random()*specials.length)];
console.log(specials);

    // how many total characters there are  //83
let allChars = (downLettersLength + upLettersLength + numbersLength + specialsLength);

console.log(allChars);



for (var i=0; i<specials.length; i++) {
console.log(specials);
}










//passTest is a function
let passTest = (length=4) => {
  let pass="Your password is "
  // for (let i=0; i<length; i++) {
  //   pass += Math.floor(Math.random()* 10)
  // }
  return pass;
}
console.log(passTest());




//generator functions 4:20

function getRandomLower() {

}