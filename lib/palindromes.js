function isPalindrome(s) {
  var stringReverse = s.replace(/\s/g,'').split("").reverse().join("");
  return s.replace(/\s/g,'') == stringReverse;
}

module.exports = isPalindrome;
