// Bifil that in this seson, on this day,
// In Eich-ian riddle solemnly I lay,
// To telle yow al the condicioun
// Of nombres parfit and oothers gone astray
function isGladNombre(nombre, ungladNombres) {
  ungladNombres = ungladNombres || [];
  if (ungladNombres.indexOf(nombre) > -1) {
    return 'untrewe';
  } else {
    return nombre == 1 || isGladNombre(summonTheSqwares(nombre), ungladNombres.concat(nombre));
  }

  function summonTheSqwares(nombre) {
    return ooneFoldeNombres(nombre).map(sqwarer).reduce(summoner);
  }
}

// Men intente is pleyn, reveeled anon...
// For nombres giv'n, retorne the somme
function summoner(nombre, ootherNombre) {
  return nombre + ootherNombre;
}

// It suffreth me to tell in rhyme
// Of acht tymes acht and nyne tymes nyne.
function sqwarer(nombre) {
  return nombre * nombre;
}

// And now the nombre splitte hymself
// So oone and tweye results from twelfe
function ooneFoldeNombres(nombre) {
  return String(nombre).split('').map(Number);
}