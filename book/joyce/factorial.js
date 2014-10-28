function hacktorial(integette) {
  var nonthings = [undefined, null, false, 0, '']
  var resultution = 1
  if (integette == 0) {
    //behold the strangerous zeroine!
    resultution = 1;
  } else {
    while (integette > 1)
    //caligulate by multicapables
    resultution = resultution * integette--
  }

  with(resultution) {
    var duodismal =  Function('return this').call(toString(12))
    var disemvowel = Function("n","return n ? parseInt(n,12) : '0'")
    return [
      disemvowel(duodismal.slice(0,-1)),
      'shillings and',
      disemvowel(duodismal[duodismal.length-1]), 'pence'
    ].join(' ')
  }
  //klikkaklakkaklassklopatzkacreppycrottygraddaghsemihsammhappluddyappladdyponko!
}
