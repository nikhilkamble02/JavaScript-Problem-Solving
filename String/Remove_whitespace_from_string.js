
  
  const removeWhitespaces = (string) => {
    let result = '';
    for (let i = 0; i < string.length; i++) {
      if (string[i] !== ' ' && string[i] !== '\n' && string[i] !== '\t') {
        result += string[i];
      }
    }
    return result;
  }
  removeWhitespaces(" Hello  World ") 
//The function will return the string HelloWorld
