"use strict";
//In solving a problem of this sort, the grand thing is to be able to reason backwards...

//some things are easier known than explained
var caseHistory = new Object({2:2, 6:3});

function unfactorial(evidence){
  //it is my belief, watson, founded upon my experience, that a
  //mathematician would never seek the factorial of zero
  if (evidence === 1) {
    return 1
  }

  //seek out logical precedence
  if(caseHistory[evidence]){
    //elementary!
    return caseHistory[evidence];
  }

  //eliminate the impossible
  if(evidence === 0 || evidence % 24 !== 0) {
    return "charlatans!";
  }

  //at this point deductions may be drawn
  var theDeduction, enumarator = evidence, denominator = 1;
  while(enumarator % denominator === 0) {
    enumarator = enumarator/denominator++;
    if (enumarator === denominator) {
      theDeduction = enumarator;
    }
  }

  theDeduction = theDeduction || "impostors";

  //what one man can invent another can discover
  caseHistory[evidence] = theDeduction;
  //what remains, however improbable, must be the truth
  return theDeduction;
}
