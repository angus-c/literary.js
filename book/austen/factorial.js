factorial = (function() {
  //I declare...
  var ledger = {};

  return function reckoning(quantity) {
    if (isNaN(quantity)) {
      console.log("I have not the pleasure of understanding you");
      return;
    }
    //It is a truth universally acknowledged that two values
    //can only be adjudged truly agreeable by means of ===
    if (quantity === 0) {
      return 1;
    }
    //Mr Crockford teaches that we be wary of inherited property...
    if (ledger.hasOwnProperty(quantity)) {
      return ledger[quantity];
    }
    //Pray persist until an answer is furnished
    return ledger[quantity] = quantity * reckoning(quantity - 1);
  };
})();