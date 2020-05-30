// Password characters options
var uppercase = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z',];
var lowercase = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];
var numbers = ['0','1','2','3','4','5','6','7','8','9'];
var symbols = ['!','#','$','%','&','(',')','*','+','-','.','/',':',';','<','=','>','?','@','^']

//when user select options then we will concat the options 
var options = [];

function generatePassword() {
  //ask the user password length required
  var length = prompt("Please choose a length of at least 8 characters and no more than 128 characters")
    if (length < 8  || length > 128) {
        alert("Your password needs to be at least 8 characters and no more than 128");
        return
    } 
    else {
        alert ("You have selected " + length + " characters");
    }
 
  //ask the user if they want uppercase
  var selectUppercase = confirm ("Would you like any uppercases in your password?")
  if(selectUppercase) {
  alert("you need to get some of these characters " + uppercase)
  options = options.concat(uppercase)
  }
  else {
  alert("you don't need any uppercase in your password!")
  }
  //ask the user if they want lowercase
  var selectLowercase = confirm("Would you like any lowercases in your password?")
  if(selectLowercase) {
  alert("you need to get some of these characters " + lowercase)
  options = options.concat(lowercase)
  }
  else {
  alert("you don't need any lowercase in your password!")
  }
  //ask the user if they want numbers
  var selectNumbers = confirm("Would you like any numbers in your password?")
  if(selectNumbers) {
  alert("you need to get some of these characters " + numbers)
  options = options.concat(numbers)
  }
  else {
  alert("you don't need any numbers in your password!")
  }
  //ask the user if they want symbols
  var selectSymbols = confirm("Would you like any symbols in your password?")
  if(selectSymbols) {
  alert("you need to get some of these characters " + symbols)
  options = options.concat(symbols)
  }
  else {
  alert("you don't need any symbols in your password!")
  }
//we need to push randomCharacter into a new array
var charactersArray = [];
for (i = 0; i <length; i++) {
    //call randomise function to reurn a random character
    var randomCharacter = randomise(options)
    // push the returned rancomCharacter into an array
    charactersArray.push(randomCharacter)
}
// join('') will join password without ''
var finalPassword = charactersArray.join('')
//return the string
return finalPassword 
}

function randomise(optionsArray) {
  // Given the options Array, get a random values from that array and return
  var numberInArray = Math.floor(Math.random() * optionsArray.length);
  var randomValue = optionsArray[numberInArray];
  return randomValue
}

//Generate button
var generateBtn = document.querySelector("#generate");

// Add event listener to generate button
const generateButton = document.querySelector(".btn")
//Call the writepassword function
generateButton.addEventListener("click", writePassword)

function writePassword() {
    //Call generate password
    var password = generatePassword();
    //target HTML
    var passwordText = document.querySelector("#password");
    //generate password
    passwordText.value = password;
}