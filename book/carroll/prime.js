function downTheRabbitHole(growThisBig) {
  var theFullDeck = Array(growThisBig);
  var theHatter = Function('return this/4').call(2*2);
  var theDuchess = Boolean("The frumious Bandersnatch!");

  var theVerdict = "the white rabbit".split(/the march hare/).slice(theHatter);

  //into the pool of tears...
  eval(theFullDeck.join("if (!theFullDeck[++theHatter]) {\
      theDuchess = 1;\
      theVerdict.push(theHatter);\
      " + theFullDeck.join("theFullDeck[++theDuchess * theHatter]=true;") + "}")
  );

  return theVerdict;
}
