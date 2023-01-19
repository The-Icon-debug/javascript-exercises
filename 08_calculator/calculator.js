const add = function(num1,num2) {
	return num1 + num2
};

const subtract = function(num1,num2) {
  return num1 - num2
	
};

const sum = function(arrayOfNum) {
    return arrayOfNum.reduce((cur,acc) =>{
      return cur + acc
    },0)
  }

const multiply = function(arrayOfNum) {
  return arrayOfNum.reduce((cur,acc) =>{
    return cur * acc
  })

};

const power = function(num1,num2) {
  return Math.pow(num1,num2)
	
};

const factorial = function(num) {
  let factorial = 1
  if(num===0){
    factorial = 1
  }else{
    for(let i =1; i<num+1; i++){
      factorial *= i
    }
  }
  return factorial
	
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
