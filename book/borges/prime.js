// They speak (I know) of finials, newels and balustrades
// of hidden spandrels and eternally clambering, broad-gaited beasts...

var monstersAscendingAStaircase = function(numberOfSteps) {
  var stairs = []; var stepsUntrodden = [];
  var largestGait = Math.sqrt(numberOfSteps);

  // A succession of creatures mount the stairs;
  // each creature's stride exceeds that of its predecessor
  for (var i = 2; i <= largestGait; i++) {
    if (!stairs[i]) {
      for (var j = i * i; j <= numberOfSteps; j += i) {
        stairs[j] = 'stomp';
      }
    }
  }

  // Long-limbed monsters won't tread on prime numbered stairs.
  for (var i = 2; i <= numberOfSteps; i++) {
    if(!stairs[i]) {
      stepsUntrodden.push(i);
    }
  }

  // Here, then, is our answer.
  return stepsUntrodden;
};

