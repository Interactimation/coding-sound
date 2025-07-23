<<<<<<< HEAD
=======
/* test
SOUND SYNTHESIS
* Based on: https://www.youtube.com/watch?v=hgg3ZBLRH58
* Challenge: Using the P5.js Editor (https://editor.p5js.org/) follow the above tutorial to create a visual representation of these waveforms  
* Discover: Certain positions on ths slider, those closest to but not right on 220 Hz or towards but not right at either end produce some weird "beats" —what's happening there? 
* Research: https://en.wikipedia.org/wiki/Beat_(acoustics) with special attention to the section on Binaural Beats: https://en.wikipedia.org/wiki/Beat_(acoustics)#Binaural_beats
* Go Further: Develop a binaural beat experience where you chose the beating frequencies
*/


//construct a gain filter
const gain = new Tone.Gain(0.3);

//oscillator 1: fixed at 220 Hz
let osc1 = new Tone.Oscillator;
osc1.type = "sine"; 
osc1.frequency.value = 220;
osc1.connect(gain);
gain.toDestination();

//oscillator 2: adjustable between 110 and 440 Hz (two full octaves)
let osc2 = new Tone.Oscillator;
osc2.type = "sine"; // try "triangle"
osc2.frequency.value = 220;
osc2.connect(gain);
gain.toDestination();

//top button starts and stops oscillator 1
const playBTN1 = document.getElementById("play-btn1");
let isPlaying1 = false;
playBTN1.addEventListener("click", async () => {
    await Tone.start(); // ensures context is unlocked on any click

    if (!isPlaying1) {
        osc1.start();
        playBTN1.textContent = "Pause";
        isPlaying1 = true;
    } else {
        osc1.stop();
        playBTN1.textContent = "Play";
        isPlaying1 = false;
    }
});

//middle button starts and stops oscillator 1
const playBTN2 = document.getElementById("play-btn2");
let isPlaying2 = false;
playBTN2.addEventListener("click", async () => {
    await Tone.start(); // ensures context is unlocked on any click

    if (!isPlaying2) {
        osc2.start();
        playBTN2.textContent = "Pause";
        isPlaying2 = true;
    } else {
        osc2.stop();
        playBTN2.textContent = "Play";
        isPlaying2 = false;
    }
});

//slider changes the pitch of oscillator 2
const pitchSlider = document.getElementById("pitchSlider");
const slidval = document.getElementById("slidval");

pitchSlider.addEventListener("input", () => {
    //parse the slider value, which is output as a "string" as a float point decimal instead
    const freq = parseFloat(pitchSlider.value);
    osc2.frequency.value = freq;
    slidval.textContent = freq;
});




>>>>>>> b64d5f882d05e15d038133f63851adb269598899
