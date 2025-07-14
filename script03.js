/* 
EFFECTS
* Based on: https://www.youtube.com/watch?v=UCNRRag2GgE
* Documentation: https://tonejs.github.io/docs/15.1.22/classes/FeedbackDelay.html
* Challenge: Add effects to a copy of your Music Box until it no longer sounds like the original, but you like the new sound better
* Discover: Explore at least one more effect
*/

//instantiate Synth
const synth = new Tone.Synth(); 

//SETUP SOME EFFECTS

//One: FeedbackDelay, two constructors: the simple version is commented out
//const fbDelay = new Tone.FeedbackDelay('8n', 0.4);
const fbDelay = new Tone.FeedbackDelay({
        delayTime: 0.2,
        feedback: 0.5,
        maxDelay: 1,
        wet: 0.4,
});

//Two: AutoWah, only parts of the options object are shown here
const autWah = new Tone.AutoWah({

    gain: 1,
    octaves: 8,
    sensitivity: 0.5,
    wet: 1,
})

//connect the synth to the delay, the delay to the wah and send the wah to the speakers
synth.connect(fbDelay);
fbDelay.connect(autWah);
autWah.toDestination();



//get the play button, when it's clicked, if the Tone.context.state is NOT "running" then start it and play a tone
const playBTN = document.getElementById("play-btn").addEventListener("click", () => {
  if (Tone.context.state !== "running") {
   Tone.start(); 
  }
  
  synth.triggerAttackRelease("C3", "8n");
})
                      