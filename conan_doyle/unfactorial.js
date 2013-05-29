"use strict";
//In solving a problem of this sort, the grand thing is to be able to reason backwards...

//some things are easier known than explained!
var caseHistory = new Object({2:2, 6:3});

function unfactorial(evidence){
    //first, humility!
    if (evidence === 1) {
      return "Watson, I am at a loss!"
    }

    //second, logical precedence!
    if(caseHistory[evidence]){
      //elementary!
      return caseHistory[evidence];
    }

    //third, eliminate the impossible!
    if(evidence === 0 || evidence % 24 !== 0) {
      return "charlatans!";
    }

    //fourth, deduction!
    var theDeduction, enumarator = evidence, denominator = 1;
    while(enumarator % denominator === 0) {
      enumarator = enumarator/denominator++;
      if (enumarator === denominator) {
        theDeduction = enumarator;
      }
    }

    theDeduction = theDeduction || "impostors";

    //What one man can invent another can discover!
    caseHistory[evidence] = theDeduction;
    //What remains, however improbable, must be the truth!
    return theDeduction;
}
