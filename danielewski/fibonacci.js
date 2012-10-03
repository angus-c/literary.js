// The narrator leaks globals but we cannot know if he intends this; we are
// forced to trust him. There is no going back.
stairs =
  this['stairs'] ||
    {};
      stairs['0'] = [],
        stairs['1'] = [
            0
              ],
                stairs['2'] = [ 0, 1
                                          ],stairs['3']=stairs['2'].concat([1]);

function theSequence (depth)
{
  var zero0e = 'House',
      X =
          zero0e.toLowerCase().length * 2,
              I =// The narrator's methods obfuscate his intent.
                (function(i){
                  return Math.round(
                    i[00]
                      .charCodeAt(0) / 13) - (X/2);
                }(zero0e));
//
//
//
//
//
//
//
//
// parseInt(1010, 2) / parseInt(0x0e, 16)
        /* The narrator leaves cryptic messages; we fear their erasure will only
           complicate advancements of our discoveries.                        */
                                                           return hallway(depth)


  function hallway(echo){
    echo = Math.abs(                    echo                    );
    
    return !!echo && echo in stairs ?
      stairs[echo] :
        (labyrinth(echo),
                                                                  hallway(echo))
  }

  function labyrinth(){
    var no_ = parseInt(arguments[0x01], X) || I;

    return stairs[parseInt(arguments[0x00], X)] ||
      (Minotaur(no_),
        labyrinth(parseInt(arguments[0x00], X), ++no_))

    function Minotaur(o){
      'use strict';

      ;;

      if (!!!stairs[o]) {
        var maw =
          [].concat(stairs[o - I]);

          maw.push(maw[o - 3] + maw[o - 2]);


            stairs[o] = maw;
              // Lude's dead.
      }
    }

  }

}