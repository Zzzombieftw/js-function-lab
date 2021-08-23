
/* 
Exercise 1 (completed below):
  -Define a function, as a function declaration, `maxOfTwoNumbers` that takes two numbers as arguments and returns the largest of them. If they are the same, return that number. Use the if-else construct or a ternary expression -  the Math.max method is not allowed.
*/

function maxOfTwoNumbers(x, y) {
  if (x >= y || x===y) {
    return x;
  } else {
    return y;
  }
}

// or more "elegantly" using the fantastic ternary expression:
// function maxOfTwoNumbers(x, y) {
//   return  x >= y ? x : y;
// }

console.log("Exercise 1 Result:\n", maxOfTwoNumbers(3, 9));

/* 
Exercise 2:
  - Define a function as a function expression, `maxOfThree`, that takes three numbers as arguments and returns the largest of them. Again, the Math.max method is not allowed.
*/

function maxOfThree(num1 , num2, num3) {
  if (num1 > num2 && num1 > num3){
    return num1
  } else if (num2 > num1 && num2 > num3){
    return num2
  } else if (num3 > num1 && num3 > num2){
    return num3
  }
}

console.log("Exercise 2 Result:\n", maxOfThree(20, 5, 16))

/* 
Exercise 3: 
  - Define a function, as a function declaration, `isCharAVowel` that takes a character as an argument and returns true if it is a vowel, false otherwise.
*/
let vowel =["a","e","i","o","u"]
function isCharAVowel(letter) {
  
  if (letter === "a" || letter == "e" || letter == "i" || letter === "o" || letter == "u" ||letter === "A" ||letter === "E" ||letter === "I" ||letter === "O" ||letter === "U"){
return true
  } else return false
}

console.log(
`Exercise 3 Result:
 E: ${isCharAVowel("E")}
 m: ${isCharAVowel("m")}
 o: ${isCharAVowel("o")}
 t: ${isCharAVowel("t")}
 i: ${isCharAVowel("i")}
 v: ${isCharAVowel("v")}
 e: ${isCharAVowel("e")}
 T: ${isCharAVowel("T")}
 u: ${isCharAVowel("u")}
 n: ${isCharAVowel("n")}
 a: ${isCharAVowel("a")}`
)

/* 
Exercise 4: 
  - Define a function, as a function expression, `sumArray` that takes an array of numbers and returns the sum of those numbers. For example, `sumArray([2, 4, 5]);` would return `11`.
*/

let total = 0;

const sumArray = function(array){
  array.forEach(function (num){
    total = num += total
  });
    return(total)
}

  


console.log("Exercise 4 Result:\n", sumArray([2, 5, 15, 20]))

/* 
Exercise 5:
  - Define a function, as a function declaration, `multiplyArray` that takes an array of numbers and returns the product of those numbers. For example, `multiplyArray([2, 4, 5]);` would return `40`.
*/
// let t = 1
// function multiplyArray (arr){
//   for (let i = 0; i < arr.length; i++) {
//     total = total * arr[i]
    
//   }
// }
let t = 1
function multiplyArray(array) {
  array.forEach(function (num){
    t = num*= t
  });
  return(t)
}


console.log("Exercise 5 Result:\n", multiplyArray([2, 6, 12]))

/*
Exercise 6:
  - Define a function, as a function expression, `numArgs` that returns the number of arguments passed to the function when called.
  */
  let numArgs = function(args){
    return arguments.length
  }
console.log(
`Exercise 6 Result: 
 ${numArgs("Hello.", "I", "would", "like", "one", "taco", "plz.")}
 ${numArgs("Sir, you may not only order one taco here.")}
 ${numArgs("Fine.", "What else do you have?", "I would like my taco.")}
 ${numArgs("Nothing.", ":)")}
 ${numArgs("Noooooo!", "Foiled again!", "One day I will eat a taco!")}`
)

/*
Exercise 7:
  - Define a function, as a function declaration, `reverseString` that takes a string, reverses the characters, and returns it. For example, `reverseString('rockstar');` would return the string "ratskcor".
*/

function reverseString(string) {
  return string.split("").reverse().join("")
}


console.log("Exercise 7 Result:\n", reverseString("!stratpoP taeh ton oD"))

/* 
Exercise 8:
  - Define a function, as a function expression, `longestStringInArray` that takes an array of strings as an argument and returns the longest string's length.
*/
let longestStringInArray = function (array) {
  let longestString = ""
  let longestStringLength = 0
  array.forEach(function (string) {
    if (string.length > longestStringLength) {
      longestString = string
      longestStringLength = string.length
    }
  })
  return longestStringLength
}


console.log(
  "Exercise 8 Result:\n",
  longestStringInArray(["Please", "do", "not", "pet", "the", "taco", "cat"])
) 

/* 
Exercise 9: 
  - Define a function, as a function declaration, `stringsLongerThan` that takes an array of strings and a number as arguments; and returns an array of the strings that are longer than the number passed in. For example, `stringsLongerThan(['say', 'hello', 'in', 'the', 'morning'], 3);` would return `["hello", "morning"]`.
*/
let longerStrings = []
  function stringsLongerThan (array, num) {
    array.forEach(function (string) {
      if (string.length > num){
        longerStrings.push(string)
      }
      
    })
    return longerStrings
  }


console.log(
  "Exercise 9 Result:\n",
  stringsLongerThan(["say", "goodnight", "whenever", "you", "like"], 3)  
)
