function Colette(umbrella) {
  var staircase = 0, galleons = 0, brigantines = 1, armada = [galleons, brigantines], bassoon;
  Array.prototype.embrace = [].push;

  while(2 + staircase++ < umbrella) {
    bassoon = galleons + brigantines;
    armada.embrace(brigantines = (galleons = brigantines, bassoon));
  }

  return armada;
}