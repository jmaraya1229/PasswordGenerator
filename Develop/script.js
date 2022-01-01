// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

function generateString(passwordLength, characters) {
  var randomPassword = "";
  for (var i = 0; i <= passwordLength; i++) {
    var randomNumber = Math.floor(Math.random() * characters.length);
    randomPassword += characters.substring(randomNumber, randomNumber+1);
  }
  return randomPassword;
}

function generatePassword() {
  var quest1 = 8;
  var newPassword = "";
  var characters = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRUSTUVMXYZ1234567890!@#$%^&*";
  var lower = "abcdefghijklmnopqrstuvwxyz";
  var upper = "ABCDEFGHIJKLMNOPQRUSTUVMXYZ";
  var numbers = "0123456789";
  var symbols = "!@#$%^&*";
  var quest3 = "y";
  var quest4 = "y";
  var quest5 = "y";

  quest1 = window.prompt("How many characters long do you want your password?");
  if (quest1 >= 8 && quest1<= 128) {
    var quest2 = window.prompt("OK! " + quest1 + " character(s)! Would you like to include lowercase characters? (y/n)");
  } else {
    window.alert("Invalid reponse! Please pick a number between 8 to 128.")
    return "Uh oh spahgettio, try again!";
  }

  if (quest2 == "y") {
    quest3 = window.prompt("Got it! With lowercase letters! Would you like to include uppercase characters? (y/n)");
  } else if (quest2 == "n") {
    quest3 = window.prompt("Got it! No lowercase letters! Would you like to include uppercase characters? (y/n)");
  }

  if (quest3 == "y") {
    quest4 = window.prompt("Got it! With uppercase letters! Would you like to include numbers? (y/n)");
  } else if (quest3 == "n") {
    quest4 = window.prompt("Got it! No uppercase letters! Would you like to include numbers? (y/n)");
  } 

  if (quest4 == "y") {
    quest5 = window.prompt("Got it! With numbers! Would you like to include special characters? (y/n)")
  } else if (quest4 == "n") {
    quest5 = window.prompt("Got it! No numbers! Would you like to include special characters? (y/n)")
  }

  var combination = quest2 + quest3 + quest4 + quest5; 
  switch(combination) {
    case "yyyy":
      return generateString(quest1, characters);

    case "yyyn":
      return generateString(quest1, lower + upper + numbers);

    case "yynn":
      return generateString(quest1, lower + upper);

    case "ynnn":
      return generateString(quest1, lower);

    case "nnnn":
      window.alert("Invalid Response! Please select at least 1 criteria (lowercase, uppercase, numbers, and/or symbols) after selecting character limit.");
      return "Uh oh spahgettio, try again!";

    case "nnny":
      return generateString(quest1, symbols);

    case "nnyy":
      return generateString(quest1, numbers + symbols);

    case "nyyy":
      return generateString(quest1, upper + numbers + symbols);

    case "ynyn":
      return generateString(quest1, lower + numbers);

    case "ynyy":
      return generateString(quest1, lower + numbers + symbols);

    case "yyny":
      return generateString(quest1, lower + upper + symbols);

    case "ynny":
      return generateString(quest1, lower + symbols);

    case "nyny":
      return generateString(quest1, upper + symbols);

    case "nyyn":
      return generateString(quest1, upper + numbers);

    case "nynn":
      return generateString(quest1, upper);

    case "nnyn":
      return generateString(quest1, numbers);
    }
  }
    

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword); 

