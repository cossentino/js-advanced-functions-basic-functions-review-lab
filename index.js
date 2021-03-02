// Your code here



function saturdayFun(activity="roller-skate") {
  return `This Saturday, I want to ${activity}!`
}



const mondayWork = function(str="go to the office") {
  return `This Monday, I will ${str}.`
}

// Instantly-invoked function expression (IIFE)
// We can define an anonymous function expression and then immediately pass it arguments

function wrapAdjective(char="*") { 
  return function(str='special') {
    return `You are ${char}${str}${char}!`
  }
}


const Calculator = {
  'add': function(a,b) {
    return a + b
  },
  'subtract': function(a,b) {
    return a - b
  },
  'multiply': function(a,b) {
    return a * b
  },
  'divide': function(a,b) {
    return a / b
  },
}



function actionApplyer(int, funcArray) {
	let message = "13, multiplied by 2, added to 1000 and then modulo 7 is 4. Apply each function in the Array of functions on the given base (13) OR on the result of the use of the previous function to get this result"
  for (let i = 0; i < funcArray.length; i++) {
    int = funcArray[i](int)
  }
  return int
}