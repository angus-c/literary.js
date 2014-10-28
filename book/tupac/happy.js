var theyDigits, theStash, nextFigure, anEmptyHash = {}

function isChillin(myFigure) {
  theStash = theStash || anEmptyHash
  nextFigure = 0; /* be nillin it */
  /* in preparation fo' fillin it */
  /* they precondition is partition so */ doFissionOn(myFigure)
  accumulateTheSquares() /* sup addition? am a mathmetician */
  /* and the stash is the hash caching all ma dead figgaz */
  /* if yo value is one, you won, but if yo in the stash you done */
  if (nextFigure == 1) return "chillin"
  if (theStash[nextFigure] == 'x') return "illin"
  theStash[nextFigure] = 'x' /* keepin the history */
  /* breakin the chain of iteration misery */
  return isChillin(nextFigure) /* recurse, rejigger, re-traverse the verse */
}

function doFissionOn(n) {theyDigits = n.toString().split('')}
function accumulateTheSquares() {theyDigits.forEach(function(n){nextFigure += n*n})}