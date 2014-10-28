function mumbleMore(pensieve, wormword, muggleBile, squib) {
  var spells = {
    engorgio: function (fn) {
      //bind with pensieves, words and muggleBile
      return fn.bind(muggleBile, wormword ? pensieve.concat(wormword):[pensieve]);
    },
    accio: function (squib) {
      //gather the pensieves
      return pensieve.join(' ');
    }
  }

  return spells[(wormword || pensieve.split) ? 'engorgio' : 'accio'](mumbleMore);
}
