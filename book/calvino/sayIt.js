function sayIt(word) {
  var verse = '';
  //If on a winter's night a programmer
  return chapterOr(word, function chapter1(word) {
    //outside the meaningful logic
    return chapterOr(word, function chapter2(word) {
      //leaning towards deep nesting
      return chapterOr(word, function chapter3(word) {
        //without fear of callback hell
        return chapterOr(word, function chapter4(word) {
          //looks back at the gathering indents
          return chapterOr(word, function chapter5(word) {
            //in a network of functions that enlace
            return chapterOr(word, function chapter6(word) {
              //in a network of functions that stack
              return chapterOr(word, function chapter7(word) {
                //on a carpet of illusions
                return chapterOr(word, function chapter8(word) {
                  //around an empty core...
                  return chapterOr(word, function chapter9(word) {
                    //What story down there awaits its end?
                    return chapterOr(word, chapter1);
                  });
                });
              });
            });
          });
        });
      });
    });
  });
  function chapterOr(word, chapter) {
    word && (verse += (verse && ' ') + word);
    return word ? chapter : verse;
  }
}
