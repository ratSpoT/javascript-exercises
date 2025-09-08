const palindromes = function (word) {
  let front = 0;
  let back = word.length-1;
  while (front < back) {
    while (!isalpha(word[front])) {
      if (front >= back){
        return true;
      }
      front++;
    };

    while (!isalpha(word[back])) {
      if (front >= back){
        return true;
      }
      back--;
    };

    if (word[front].toLowerCase() !== word[back].toLowerCase()) {
      return false;
    }

    front++;
    back--;
  }

  return true;
}

function isalpha(char) {
  return (char >= "a" && char <= "z" || char >= "A" && char <= "Z" || char >= "0" && char <= "9");
}
// Do not edit below this line
module.exports = palindromes;
