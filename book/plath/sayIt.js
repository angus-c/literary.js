words = ''; wordless=' ';
// I am calm. I am calm.
function say_it(word) {
 //It is the calm before something awful.
 return word ? smothered_mouthfuls(word) : end();
}

function smothered_mouthfuls(word) {
 // Dutifully swallowing words
 word = words ? wordless + word : word;
 words = words + word;
 return say_it;
}

function end() {
 // Grudgingly, my ungainly tongue
 // Pokes and stirs, to render
 // Empty substanceless nothings
 return void this, words;
}