/* 
HELLO OSCILLATOR
* Based on: https://www.youtube.com/watch?v=rgFWlq755V4
* Discover: Amplitude Vs. Frequency: https://www.britannica.com/video/frequency-amplitude-sound-waves-oscilloscope/-68519
* Challenge: 
* Question: 
* Go Further: 
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

const playBTN = document.getElementById("play-btn");
let isPlaying = false;
playBTN.addEventListener("click", async () => {
    await Tone.start(); // ensures context is unlocked on any click

    if (!isPlaying) {
        Tone.Transport.start();
        playBTN.textContent = "Pause";
        isPlaying = true;
    } else {
        Tone.Transport.pause();
        playBTN.textContent = "Play";
        isPlaying = false;
    }
});



