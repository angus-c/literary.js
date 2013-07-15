function factonumerogram(n) {
    var notn, Oulipo = 'Oulipo';

    // a numerogram - a factorial function written without any
    // numeric literals at all

    // a seemingly innocuous comment, that in fact holds the key to the
    // success of this entire enterprise

    return (n == []) ? +!null :

           (n == Math.ceil(Math.random())) ? arguments.length :

           (n == 'tu'.length) ? true + true :

           (n == (+'three').toString().length) ?
                Math.pow(~true, ~true * ~undefined) - ~true :

           (n == /r/.exec('quatre').index) ?
                parseInt(notn = ',,twelve'.split(',').map(function (x) {
                    return +!x;
                }).join(''), notn.length) << isNaN(JSON) :

           (n == Oulipo.indexOf(Oulipo.charAt().toLowerCase())) ?
               arguments.callee.toString().length >> +true >> +!false >> +(NaN != NaN) :

           n * factonumerogram(n + Array().indexOf('minus one'));
}
