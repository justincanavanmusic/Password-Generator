// variables
let upLetters = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];

let lowLetters = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

let numbers = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];

let specials = ["!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "+", "-", ".", "`", "~", "|", "<", ">", "=", "-", "_"]

// let allChars = upLetters.concat(lowLetters, numbers, specials);

// querySelectors
let generateBtn = document.querySelector("#generate");

// Logic
            //PASSWORD OPTIONS 
function passwordOptions() {
    let passwordLength = parseInt(prompt("How many characters would you like your password to contain? 8-128"));

    if (passwordLength < 8 || passwordLength > 128) {
        alert("Password length must be greater than 7 and less than 129");
        return null;
    }
    // if (passwordLength===false) {
    //     alert("You must select a number from 8-128");
    // }

    let useLowers = confirm('Click OK to confirm using lowercase letters.');
    console.log(useLowers);

    let useUppers = confirm('Click OK to confirm using uppercase letters.');
    console.log(useUppers);

    let useNumbers = confirm('Click OK to confirm using numbers.');
    console.log(useNumbers);

    let useSpecials = confirm('Click OK to confirm using special characters.');
    console.log(useSpecials);

    if(useNumbers === false && useLowers===false && useUppers===false && useSpecials===false) 
{ alert('Must select at least one character type!');
}

     let userPassword = {
     length: passwordLength,
     hasLower: useLowers,
     hasNumber: useNumbers,
     hasUpper: useUppers,
     hasSpecial: useSpecials
  }
  return userPassword;
}
//test run below
// passwordOptions();



                            //GENERATE PASSWORD

function generatePassword() {
    let userOptions = passwordOptions();
    let possibleChars= [];
    let guarCharacters = [];  //guaranteed
    let remainingCharacters = [];
                          
    if(userOptions.hasNumber===true) {
      possibleChars=possibleChars.concat(numbers);
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

    let guarLength=guarCharacters.length;
                                    //user options minus password length
        for (let index = 0; index < (userOptions.length-guarLength); index++) { 
          remainingCharacters.push(possibleChars[Math.floor(Math.random() * possibleChars.length)]);
        }
        let almostPass = guarCharacters.concat(remainingCharacters);
        let finalFinalPass=almostPass.join("");
        
        // console.log(finalFinalPass);

        return finalFinalPass;

  }


// generatePassword();


                        //WRITE PASSWORD

function writePassword() {

    let password = generatePassword();
    let passwordText = document.querySelector("#password");
    passwordText.innerHTML = password;
    //why didn't .value work?

}

generateBtn.addEventListener("click", writePassword);









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