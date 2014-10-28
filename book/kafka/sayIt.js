function sayIt(firstWord) {
  var words = [];
  return (function sayIt(word) {
    if (!word) {
      try {
        return sayIt();
      } catch (e) {
        // quitting at last an unsettling recursion,
        // the array was trasformed into a monstrous string
        words = "there's been a hideous bug";
        return words;
      }
    } else {
      words.push(word);
      return sayIt;
    }
  })(firstWord);
}