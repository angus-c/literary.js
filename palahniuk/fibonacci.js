// our job is to apply the formula
function theFormula(size) {
  // the first rule of the formula is to not accept a size smaller than 2
  if (size < 2) return;

  // people are always asking me, do I know the next result
  function self(size) {
    var result;
    if (size > 2) {
      result = this.call(this, size - 1);
      // this is our result and it is prepended one item at a time
      result.unshift(result[0] + result[1]);
      return result;
    } else {
      // we have hit rock bottom
      return [ 1, 0 ];
    } 
  }
  return self.call(self, size).reverse();
}
