const palindromes = function (word) {
  let front = 0;
  let back = word.length;
  while (front < back) {
    if (!(word[front] >= "a" && word[front] <= "z" || word[front] >= "A" && word[front] <= "Z")) {
      front++;
};

// Do not edit below this line
module.exports = palindromes;
