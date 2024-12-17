"use strict";

console.log ("xxx");
var x=10;

//for (let index = 0; index < x; index++) {
 //   console.log (index);  
//} 
let arr = [1, 10, 15, 22];
arr = arr.map(number => number * 2);
console.log(arr);

const email = {
    name: "אביב",
    age: 15,
    city: "תל אביב"
};
for (let key of Object.keys(email)) {
    const value = email[key];
    console.log(`${key} => ${value}`);
}

 let randomNamber = Math.floor (Math.random()*10);
console.log (randomNamber);

let min = 0;
let max = 10;
let randomNumber2 = Math.floor (Math.random() *max-min+1)+min;
console.log (randomNumber2);

let randomNumber3 =[];
for (let index = 0; index < 3; index++) {
    randomNumber3[index] = Math.floor (Math.random()*10); 
    console.log (randomNumber3[index]);
}
let largestNumber = Math.max(...randomNumber3); 
console.log("המספר הגדול ביותר הוא:", largestNumber);

let password = "xxccX78!";
let isStrong = isStrongPassword(password);
function isStrongPassword(passwordCH) {
    // בודקים אם הסיסמה מכילה לפחות 8 תווים
   if (passwordCH.length < 8) {
     return false;
   }
    let hasUppercase = false;
    let hasLowercase = false;
    let hasNumber = false;
    let hasSpecialChar = false;

    for (let index = 0; index < passwordCH.length; index++) {
        let char = passwordCH.charAt(index)
        if (char >= 'A' && char <='Z') {
            hasUppercase = true;
        }   
        else if (char >= 'a' && char <='z') {
            hasLowercase = true;

        } else  if ( !isNaN(char)){
            hasNumber = true;
        }
        else 
        hasSpecialChar = true;
    }
    return hasUppercase && hasLowercase && hasNumber && hasSpecialChar;

}
if (isStrong) {
    console.log("הסיסמה חזקה!");
  } else {
    console.log("הסיסמה חלשה מדי!");
  }
