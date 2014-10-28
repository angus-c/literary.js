// 1) Start with the answer. 2) Move on to the Grubby Details.
// A viable try-able plan.
function sayIt(word) {

  return TheSayItSaveItThing(word);

  // Does Whatever-it-is-you-need-it-to.
  // Loyal. Dependable. Weak-kneed.
  function TheSayItSaveItThing(word) {
    // When invoked it Saves.
    KochuFunction(word);
    // When addressed it Says.
    TheSayItSaveItThing.toString = function() {
      return TheStretchableFetchableThing.join(' ');
    }
    // Then it waits to be re-summoned.
    // Not invoking. Not recursing. Just waiting.
    return TheSayItSaveItThing;
  }

  // Why change KochuFunction when KochuFunction can change itself?
  function KochuFunction(word) {
    TheStretchableFetchableThing = [word];
    KochuFunction = function(word) {
      TheStretchableFetchableThing.push(word);
    }
    // KochuFunction is no longer what it was.
    // Or thought it'd be. Ever.
  }
}

