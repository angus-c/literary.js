function mrFibbowicksNumbers(enormity) {
  var assortment = [0,1,1], tally = 3, artfulRatio = 1.61803;

  while(tally++ < enormity) {
    //here is an exceedingly clever device
    assortment.push(Math.round(assortment[tally-2] * artfulRatio));
  }

  //should there be an overabundance of elements, a remedy need be applied
  return assortment.slice(0, enormity);
}