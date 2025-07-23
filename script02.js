/* 
MUSIC BOX
* Based on: https://www.youtube.com/watch?v=0uXDdTyYBYQ
Challenge: Can you make this basic code play a complex tune?
* Hint: I've set up a var called "octave" and used it in place of a number. I've also logged the value of the variable "index" to the console
* Discover: 
** 1. How complex a tune can you write? Imagine you're creating a kind of "music box"
** 2. is there a way to stop the Tone.Transport when the song is done (instead of after a certain time)?
*/

//instantiate the Synth, send it to speakers 
const synth = new Tone.Synth().toDestination();

//created as a hint for you
var octave = 4;

//create an array of pitch values
const notes = [
 'C'+octave, 'E'+octave, 'G'+octave, 
  'C5', 'E5', 'G5'
];

//this will increase by 1 every time a note is played
var index = 0; 

// like "request animation frame" but in musical terms
 Tone.Transport.scheduleRepeat(time => {
repeat(time);
}, "8n");

//this is the default bpm, but it's here in case you want to change it
Tone.Transport.bpm.value = 120;

//when the "notes" array has been run through, repeat it
function repeat(time) {
  let note = notes[index % notes.length];
  synth.triggerAttackRelease(note, '8n', time);
  index++;
  console.log(index);
}

//the familiar "play" button starts Tone and...
const playBTN = document.getElementById("play-btn").addEventListener("click", () => {
  if (Tone.context.state !== "running") {
    Tone.start();
  }
//...the Tone Transport, which can be thought of as Get Next Frame, for sound
  Tone.Transport.start();
  //the setTimeout function is there to keep us from going crazy listening to the tune over and over
  setTimeout(() => {
    Tone.Transport.stop();
  }, 5000)
  
})