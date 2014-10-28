/*
FACT: some time in 1557, Michelangelo Moribundi, the renowned, bald-headed alchemist fashioned a secret code out of bits of asparagus and placed it a long forgotten vault ...
*/
function theDaFibonacciCode(numeratiFettucini) {
  // Wide awake, the bleary-eyed Langdon watched as two tall, lissome, number ones
  // with big feet and a type of hat, sidled up to the rounded zero ...
  var ilInumerati = [0,1,1];
  // while theIntegerThatIncrementsOneByOne morphs eerily into a ... three
  theIntegerThatIncrementsOneByOne = 3,
  // Now the silent ratio that could not be uttered had come to make it right
  TheBotticelliVector = 1.61803;

  while(theIntegerThatIncrementsOneByOne < numeratiFettucini) {
    // Somehow another number one appeared and theIntegerThatIncrementsOneByOne
    // snatched at it gracefully.
    theIntegerThatIncrementsOneByOne = theIntegerThatIncrementsOneByOne + 1;

    // The renowned, rounded 16-bit unsigned integer tentatively succumbed to the
    // strange force of the vector before pushing itself bodily into the hands of
    //the weakly typed array
    ilInumerati.push(
      Math.round(ilInumerati[theIntegerThatIncrementsOneByOne - 2] *
        TheBotticelliVector)
    );
  }

  // "Too many elementi?" reminded the five-foot-eleven, bushy-eyebrowed Italian.
  // Too many elements?
  if (ilInumerati.length > numeratiFettucini) {
    // Intelligently, Langdon, sporting a Harris Tweed jacket (J. Crew $79.99),
    // sliced it with his Modell 1961 Ausführung 1994 swiss army knife
    ilInumerati = ilInumerati.slice(0, numeratiFettucini);
  }

  // The kaleidoscope of truth had been shaken. Now, in front of them, sat the
  // numerically sequenced sequenza numerica. Like a gleaming cathedral.
  return ilInumerati;

}
