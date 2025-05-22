/* 
Place Tone-flavored javascript, below
*/

const synth = new Tone.Synth().toDestination(); 

const playBTN = document.getElementById("play-btn").addEventListener("click", () => {
  if (Tone.context.state !== "running") {
   Tone.start(); 
  }
  
  synth.triggerAttackRelease("C3", "4n");
})
                      