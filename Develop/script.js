// variables

//created variables for each character set
let upLetters = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];

let lowLetters = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

let numbers = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];

let specials = [' ', '!', '"', '#', '$', '%', '&', '\'', '(', ')', '*', '+', ',', '-', '.', '/', ':', ';', '>', '=', '>', '?', '@', '[', '\\', ']', '^', '_', '`', '{', '|', '}', '~']


// querySelectors
let generateBtn = document.querySelector("#generate");

// Logic
            //PASSWORD OPTIONS 

                    //parseInt will check for data that isn't a number (NaN)      
function passwordOptions() {
    let passwordLength = parseInt(prompt("How many characters would you like your password to contain? 8-128"));
    if(isNaN(passwordLength)) {     //if password length is not a number, send alert to user
      alert("You have to choose a number.");
        return null  //return null stops the code from continuing   
    }

    if (passwordLength < 8 || passwordLength > 128) {   //if pass length is less than 8 or more than 128, send user an alert
        alert("Password length must be greater than 7 and less than 129");
        return null;
    }
    // if (passwordLength===false) {
    //     alert("You must select a number from 8-128");
    // }

    let useLowers = confirm('Click OK to confirm using lowercase letters.');  //allows user to select if they want lowercase
    console.log(useLowers);

    let useUppers = confirm('Click OK to confirm using uppercase letters.');  //same as above for upper
    console.log(useUppers);

    let useNumbers = confirm('Click OK to confirm using numbers.'); //same as above for numbers
    console.log(useNumbers);

    let useSpecials = confirm('Click OK to confirm using special characters.');   //same as above specials
    console.log(useSpecials);

    if(useNumbers === false && useLowers===false && useUppers===false && useSpecials===false) 
{ alert('Must select at least one character type!');  //user must select a type or get an alert
}
    //object that stores all relevant info for user password
     let userPassword = {
     length: passwordLength,
     hasLower: useLowers,
     hasNumber: useNumbers,
     hasUpper: useUppers,
     hasSpecial: useSpecials
  }      //return saves all the relevant info into the object
  return userPassword;
}     


                            //GENERATE PASSWORD

function generatePassword() {
    let userOptions = passwordOptions();   //storing password options function into user options variable
    let possibleChars= [];    //array of possible characters for the password to choose from
    let guarCharacters = [];  //array of guaranteed characters to make sure each variable is shown at least once... dependant on user input
    let remainingCharacters = []; //since the guaranteed characters are pushed (added onto array), code was developed to add the remaining characters (ie if we selected yes to all 4 "confirms" and we chose 12 as our number, this logic would produce the remaining 8 characters needed)
                          
    if(userOptions.hasNumber===true) {        //if user chooses to have numbers
      possibleChars=possibleChars.concat(numbers);    //.concat adds numbers variable to the possible character pool; same for 3 below
      guarCharacters.push(numbers[Math.floor(Math.random() * numbers.length)]);
    }
    if(userOptions.hasUpper===true) {
      possibleChars=possibleChars.concat(upLetters);
      guarCharacters.push(upLetters[Math.floor(Math.random() * upLetters.length)]);
    }
    if(userOptions.hasLower===true) {
      possibleChars=possibleChars.concat(lowLetters);
      guarCharacters.push(lowLetters[Math.floor(Math.random() * lowLetters.length)]);
    }
    if(userOptions.hasSpecial===true) {
      possibleChars=possibleChars.concat(specials);
      guarCharacters.push(specials[Math.floor(Math.random() * specials.length)]);
    }
    // console.log(guaranteedChars);
    // console.log(possibleChars);

    let guarLength=guarCharacters.length;   //stores guar char length in guarLength
                                    //user options minus password length
        for (let index = 0; index < (userOptions.length-guarLength); index++) {   //for loop runs until we have the users number selection(ie if user selects 12 the for loop will run 12 times)     user options-guarLength subtracts the amount of guaranteed characters from the array. since they were pushed and added to the total of the array, they need to be subtracted to get the desired number.
          remainingCharacters.push(possibleChars[Math.floor(Math.random() * possibleChars.length)]);
        }                         
        let guarPlusRemain = guarCharacters.concat(remainingCharacters);  //concatenates guaranteed characters and remaining characters and stores in guarPlusRemain variable
        let finalPass=guarPlusRemain.join(""); //.join joins the separate strings into one string, making the password
        
        
        // console.log(finalFinalPass);

        return finalPass;

  }



                        //WRITE PASSWORD

function writePassword() {

    let password = generatePassword();  //stores generate password function in password variable
    let passwordText = document.querySelector("#password");   //query selector goes into HTML doc and selects #password
    passwordText.value = password;
    

}

generateBtn.addEventListener("click", writePassword); //when you click the button, write password function is called









///jc experiment

// let allChars = upLetters.concat(downLetters, numbers, specials);

// console.log(allChars);
    
// function getRandomLower() {
// return String.fromCharCode(Math.floor(Math.random()*26))
// };

// getRandomLower();

// let useLowers = confirm('Click OK to confirm using lowercase letters.');
// console.log(useLowers);

// let useUppers = confirm('Click OK to confirm using uppercase letters.');
// console.log(useUppers);

// let useNumbers = confirm('Click OK to confirm using numbers.');
// console.log(useNumbers);

// let useSpecials = confirm('Click OK to confirm using special characters.');
// console.log(useSpecials);

// let userLow=
// let userUp=
// let userNum=
// let userSpecial=

// let userChoice= function() {
   
//     if(useLowers===true && useUppers===true && useNumbers===true && useSpecials===true)
//     console.log("something");
//