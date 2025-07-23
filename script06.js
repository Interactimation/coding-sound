/* 
HELLO OSCILLATOR
* Based on: https://www.youtube.com/watch?v=rgFWlq755V4
* Discover: Amplitude Vs. Frequency: https://www.britannica.com/video/frequency-amplitude-sound-waves-oscilloscope/-68519
* Challenge: In the last few lines of this code, we recreate the entire synth object each time a "choice" button is clicked. Find a better way.
*/

//variable to switch oscillators
let wavestyle = "sine";

//construct gain NOTE: we'ver removed all other filters, to hear the "dry" waveforms
const gain = new Tone.Gain(0.3);

//instantiate Synth, connect to gain
let synth = new Tone.Synth({
    oscillator: {
        type: wavestyle
    }
}).connect(gain)

//send gain to speakers
gain.toDestination();

//keyboard
const keyboard = new AudioKeys({
    rows: 2,
});

// when key pressed play tone
keyboard.down((key) => {
    console.log(key);
    synth.triggerAttackRelease(key.frequency, "8n")
})

//CHOICE BUTTONS
//listen for any click on the document and create an event
document.addEventListener('click', function (ev) {
//create a variable equal to the target of the event
    let ele = ev.target;
//look at the classes applied to the event target and if one of them is "wave"...
    if (ele.classList.contains("choice")) {
        //then the "wavestyle" variable reaches into the target of the click to get the "waveform" attribute...
        wavestyle = ele.getAttribute('waveform');
    }
    //and sets the value of that attribute as the new oscillator type
    synth = new Tone.Synth({
        oscillator: {
            type: wavestyle,
        }
    }).connect(gain)
});


  
                      