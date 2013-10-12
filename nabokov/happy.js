/*
In Pergatorya, our oblivious integer necessitated emotional validation by
means of a dubious algorithm of doubtful provenance. What followed was
a self-penned scryptogram exhibiting the unhappy confluence of mechanical
pedantry and digital peasantry. (Code is a bore to describe; yet a few basic
details are, reluctantly, given)
*/

function isItHappy(ourNumber) {
  var terra, antiterra;
  while(true) {
    var terra = theNextNumber(terra || ourNumber);
    var antiterra = theNextNumber(theNextNumber(antiterra || ourNumber));
    if (terra == 1 || antiterra == 1) {
      //Happiness: a temerarious tonsil tripping down the mouth
      //to thrust, at three, against the pallet.
      //Hap. Ee. Ness.
      return true;
    }
    if (terra == antiterra) {
      //(history repeats) terra, antiterra, terror!
      return false;
    }
  }
}

function theNextNumber(thisNumber) {
  //being concolorus with the outcome...
  var ourResult = 0;
  //trying not to imagine the disasters inherent herein...
  thisNumber.toString().split('').map(function(aDigit) {
    return aDigit * aDigit;
  }).forEach(function(aSquaredDigit) {
    ourResult += aSquaredDigit;
  });
  return ourResult;
}