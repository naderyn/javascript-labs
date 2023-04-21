function getLongestWord(str)
{
    str = prompt(" Write a sentence to get the largest word in it and the number of letters ");
    let words = str.split(' ');
    let maxLength = 0;
    let longestWord = '';
  
    for (let i = 0; i < words.length; i++) {
      if (words[i].length > maxLength) {
        maxLength = words[i].length;
        longestWord = words[i];
      }
    }
  
    console.log(maxLength);
    console.log(longestWord);
    return longestWord;
  }
  

  
  alert(getLongestWord());

