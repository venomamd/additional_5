module.exports = function check(str, bracketsConfig) {
  // your solution
  let stack = [];
  const config = bracketsConfig.join("").replace(/,/g, "");

  for(let i = 0, strLength = str.length; i < strLength; i++) {
    let char, indexOfTheChar, indexOfTheLast;
    char = str[i];
    indexOfTheChar = config.indexOf(char);
    indexOfTheLast = stack.length - 1;

    if(indexOfTheChar % 2 === 0) {
      if(stack[indexOfTheLast] === config[indexOfTheChar + 1]) { 
        stack.pop();
      }else{ 
        stack.push(char);
      }         
    }else if(indexOfTheChar % 2 !== 0) {
      let indexInConfig = config.indexOf(stack[indexOfTheLast]);
      if((indexInConfig + 1) === indexOfTheChar) {
        stack.pop();
      }else if(!stack.length) {
        return false;
      }
    }      
  }
    return !stack.length;
}
