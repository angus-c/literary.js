function theSeriesOfFIBONACCI(theSize) {

  //a CALCKULATION in two acts.
  //employ'ng the humourous logick of JAVA-SCRIPTE

  //Dramatis Personae
  var theResult; //an ARRAY to contain THE NUMBERS
  var theCounter; //a NUMBER, serv'nt to the FOR LOOP

  //ACT I: in which a ZERO is added for INITIATION

  //[ENTER: theResult]

  //Upon the noble list bestow a zero
  var theResult = [0];

  //ACT II: a LOOP in which the final TWO NUMBERS are QUEREED and SUMM'D

  //[ENTER: theCounter]

  //Commence at one and venture o'er the numbers
  for (theCounter = 1; theCounter < theSize; theCounter++) {
    //By divination set adjoining members
    theResult[theCounter] = (theResult[theCounter-1]||1) + theResult[Math.max(0, theCounter-2)];
  }

  //'Tis done, and here's the answer.
  return theResult;

  //[Exuent]
}
