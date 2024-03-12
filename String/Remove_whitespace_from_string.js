  const removeWhitespaces = (string) => {
   let finalString = '';
    for (let i = 0; i < string.length; i++) {
      if (string[i] !== ' ' && string[i] !== '\n' && string[i] !== '\t') {
        result += string[i];
      }
    }
   return finalString;
  }
  removeWhitespaces(" Hello  World ") 
//The function will return the string HelloWorld
