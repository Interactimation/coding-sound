/* 
HELLO WORLD
* Based on: https://www.youtube.com/watch?v=7ZhbKclhDf4
* See also: https://www.thecodecreative.com/blog/tonejs-hello-world
* Challenge: Can you make different computer keyboard keys play different notes?
* See: https://developer.mozilla.org/en-US/docs/Web/API/KeyboardEvent/key
* And: https://youtu.be/wWUUHjhrmlU?t=70
* Discover: Can the user play more than one tone at a time, a "chord", using Synth or something else?
*/

//instantiate Synth, send it to the speakers
const synth = new Tone.Synth().toDestination(); 

//get the play button, when it's clicked run: if the Tone.context.state is NOT "running" then start it and play a tone
const playBTN = document.getElementById("play-btn").addEventListener("click", () => {
  if (Tone.context.state !== "running") {
   Tone.start(); 
  }
  
  synth.triggerAttackRelease("C3", "4n");
})
                      