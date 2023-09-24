const removeVowels = (str) => {
  const vowels = ['a', 'e', 'i', 'o', 'u'];

  const chars = str.split('');

  const filteredChars = chars.filter(char => !vowels.includes(char.toLowerCase()));

  const result = filteredChars.join('');

  return result;
}
console.log(removeVowels("Hello my name is Nikhil"));
