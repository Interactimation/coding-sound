/* 
KEYBOARD KEYBOARD
* Based on: https://www.youtube.com/watch?v=vZ-3uPGclF8
* Discover: 
** 1. AudioKeys README: https://github.com/kylestetz/AudioKeys/blob/master/README.md
** 2. More about AudioKeys: https://sonoport.github.io/prototyping-synths-with-AudioKeys.html
** 3. Discover Frequencies: https://www.idrumtune.com/ultimate-guide-to-musical-frequencies/  
* Challenge: 
** 1: Let the note play until the user releases the key (extend sustain) 
** 2: Let the tone evolve over time
* Question: Why is there no "play" button to get the sounds to play? Could we remove it from the step sequencer in Lesson 04? How?
* Go Further: Follow this tutorial: https://www.youtube.com/watch?v=IT64QQo3jrM —it uses SASS, an extension of CSS: https://sass-lang.com/
*/

//SETUP SOME EFFECTS

//One: FeedbackDelay, two constructors: the simple version is commented out, notice that I've changed some values since last time I used this
const fbDelay = new Tone.FeedbackDelay({
    delayTime: 0.1,
    feedback: 0.1,
    wet: 0.1,
});

//Two: AutoWah, only parts of the options object are shown here, notice that I've changed some values since last time I used this
const autWah = new Tone.AutoWah({
    gain: 0.5,
    octaves: 4,
    sensitivity: 0.5,
    wet: 1,
})

//instantiate Synth
const synth = new Tone.Synth().connect(fbDelay)

//gain is incredibly important here, without this rather low setting, the sounds created by different oscillators could be ear-splitting and even damage speakers
const gain = new Tone.Gain(0.3);

//connect each synth to the Feedback Delay, connect that to the Auto Wah, connect that to Gain and send that to the speakers —AGAIN, SET GAIN LOW!

fbDelay.connect(autWah);
autWah.connect(gain);
gain.toDestination();

const keyboard = new AudioKeys({
    rows: 2,
});

keyboard.down((key) => {
    console.log(key);
    synth.triggerAttackRelease(key.frequency, "8n")
})



  
                      