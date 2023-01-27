// variables
var upLetters = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];

var lowLetters = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

var numbers = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];

var specials = ["!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "+", "-", ".", "`", "~", "|", "<", ">", "=", "-", "_"]

let allChars = upLetters.concat(lowLetters, numbers, specials);

// querySelectors
let generateBtn = document.querySelector("#generate");

// Logic
            //password options 
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
    // let allChars = upLetters.concat(downLetters, numbers, specials);

    // let userLow=lowLetters[Math.floor(Math.random() * lowLetters.length)];

    // let userUp=upLetters[Math.floor(Math.random() * upLetters.length)];

    // let userNum=numbers[Math.floor(Math.random() * numbers.length)];

    // let userSpecial=specials[Math.floor(Math.random() * specials.length)];



//    if(useLowers===true && useUppers===true &&useNumbers===true){
//     }  else if(useLowers===true && useUppers===true &&useSpecials===true)
//     }  else if(useLowers===true && useNumbers===true &&useSpecials===true)
//     }  else if(useUppers===true && useNumbers===true &&useSpecials===true)

let passwordStore="";
       for (let index = 0; index < userOptions.length; index++) {
      console.log(index) ;
        if(index===0){
          if(userOptions.hasLower===true){
            let userLow=lowLetters[Math.floor(Math.random() * lowLetters.length)];
         passwordStore=passwordStore + userLow;
          }
        }
       else if(index===1){
            if(userOptions.hasUpper===true){
              let userUp=upLetters[Math.floor(Math.random() * upLetters.length)];
           passwordStore=passwordStore + userUp;
            }
          }
        else if(index===2){
            if(userOptions.hasNumber===true){
              let useNumbers=numbers[Math.floor(Math.random() * numbers.length)];
           passwordStore=passwordStore + useNumbers;
            }
          }
        else if(index===3){
            if(userOptions.hasSpecial===true){
              let useSpecials=specials[Math.floor(Math.random() * specials.length)];
           passwordStore=passwordStore + useSpecials;
            }
          }
          else{let useAllChars=allChars[Math.floor(Math.random() * allChars.length)];
            passwordStore=passwordStore + useAllChars;
             }
          
          }

       
       console.log(passwordStore);
        
   }

    //lost from here

    // return password.join("")
// }
generatePassword();


                        //WRITE PASSWORD

function writePassword() {

    let password = generatePassword();
    let passwordText = document.querySelector("#password");
    passwordText.value = password;

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