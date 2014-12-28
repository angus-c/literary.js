var yearOfTheLighteningQuickAtkinSieve = function(tops) {
  //B.P. #40 07-14
  //ELEPHANT BUTTE, NM
  var NSRS/*[1]*/ = [0,0,2,3];
  /* Two concurrent loops are mobilized such that the variables i and j (each having an
  initial value of 1) are incremented by steps of 1 (though in a nested fashion). */
  for(var i = 1; i < Math.sqrt(tops); i++){
    for(var j = 1; j < Math.sqrt(tops); j++){
      if (i*i + j*j >= tops) {
        break;
      }
      /* The two variables (i.e. i and j) are injected into the first quadratic,
      the result being assigned to the additional variable (n). */
      var n = 4*i*i + j*j;
      /* Should the additional variable (i.e. n) yield, when divided by 12, a remainder
      of 1 or 5, the value at that index (i.e. n's) is flipped [2]. */
      if(n <= tops && (n%12 == 1 || n%12 == 5)){
        NSRS[n] = NSRS[n] ? 0 : n;
      }
      /* Now, we (i.e. JavaScript) reach the second quadratic and again the result
      is assigned to the (existing) variable n. */
      n = 3*i*i + j*j;
      /* Although the variable (i.e. n) is again divided by 12, this time the remainder is
      checked against 7 to determine whether the indexed value (i.e. the value at n) needs
      flipping. */
      if(n <= tops && (n % 12 == 7)){
        NSRS[n] = NSRS[n] ? 0 : n;
      }
      /* By now you (i.e. the reader) are no doubt experiencing feelings of ambivalence and
      regret, nevertheless, we (i.e. JavaScript) haven't finished yet. Predictably, a third
      quadratic is now run and (equally predictably) it's value assigned to the (now
      world weary) variable, n. */
      n = 3*i*i - j*j;
      /* The only interesting thing about the third division (though also the depressing
      thing) is that it only happens when the first looping variable (i) is greater than
      i.e. not less than (or equal to) the second looping variable (j) [3]. */
      if (i>j) {
        if((n <= tops) && (n % 12 == 11)){
          NSRS[n] = NSRS[n] ? 0 : n;
        }
      }
    }
  }
  /* Near exhaustion (yet distrustful of the quadratic wheel factorization filter) we
  (i.e. JavaScript) now designate any and all prime factors, w/o regard for their current prime,
  or composite (i.e. non-prime) designation, as being composite (i.e non-prime) */
  for(i = 5; i < Math.sqrt(tops); i++){
    if(NSRS[i] == 1){
      for(j = i*i; j < tops; j += i*i){
        NSRS[j] = 0;
      }
    }
  }
  return NSRS.filter(Number); // [4]
}
[Author Query about `]
/*
[1] Numeric Storage and Retrieval System.
[2] Meaning values representing the current index [a] are set to 0, while values of 0 are set to the
current index.
[3] Otherwise each relevant index [a] would be flipped twice.
[4] `Array.prototype.filter` being a higher order function defined by The EcmaScript-262 Standard (5th
edition) [b]. Since `Number` is a built-in function that converts any value to a number and Array.prototype.filter
rejects "falsey" (i.e. not "truthy") values, thus values of 0, being "falsey" (i.e. not "truthy") will
not be included in the array returned by `Array.prototype.filter`.

[a] i.e. an index for which the quadratic in question resolves to true.
[b] http://es5.github.io/#x15.4.4.20
*/

