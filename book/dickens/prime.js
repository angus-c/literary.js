function MrsPrimmerwicksProgeny(MaxwellNumberby) {
  Number.prototype.isAPrimmerwick = function() {
    for (var AddableChopper = 2; AddableChopper <= this; AddableChopper++) {
      var BittyRemnant = this % AddableChopper;
      if (BittyRemnant == 0 && this != AddableChopper) {
        return console.log(
          "It is a composite. The dear, gentle, patient, noble", +this, "is a composite"),
          false;
      }
    }
    return console.log(
      "Oh,", +this, +this, +this, "what a happy day this is for you and me!"),
      true;
  }

  var VenerableHeap = [];
  for (var AveryNumberby = 2; AveryNumberby <= MaxwellNumberby; AveryNumberby++) {
    if (AveryNumberby.isAPrimmerwick()) {
      VenerableHeap.push(AveryNumberby);
    }
  }
  return VenerableHeap;
}
