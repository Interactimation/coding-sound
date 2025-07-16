/* 
STEP SEQUENCER
* Based on: https://www.youtube.com/watch?v=Dxxkma4F-oA
* Discover: 
1: Oscillators are sound wave generators and these waves can have different shapes. Read up about them: https://www.perfectcircuit.com/signal/difference-between-waveforms and maybe try the one we're not using, below
2. IMPORTANT Gain refers the magnitude of a signal, note that we're using Tone.Gain and setting it to 0.2 (it goes from 0 to 1) 
WHEN USING OSCILLATORS SET GAIN LOW - otherwise you may damage your speakers or hurt your ears
* Challenge: take out the filters or change them, choose different notes, use different synths
*/

//SETUP SOME EFFECTS

//One: FeedbackDelay, two constructors: the simple version is commented out, notice that I've changed some values since last time I used this
const fbDelay = new Tone.FeedbackDelay({
    delayTime: 0.2,
    feedback: 0.1,
    wet: 0.3,
});

//Two: AutoWah, only parts of the options object are shown here, notice that I've changed some values since last time I used this
const autWah = new Tone.AutoWah({
    gain: 0.5,
    octaves: 4,
    sensitivity: 0.5,
    wet: 1,
})

//instantiate Synths
const synths = [
    new Tone.Synth(),
    new Tone.Synth(),
    new Tone.Synth()
];

//give each synth a different oscillator
synths[0].oscillator.type = 'triangle';
synths[1].oscillator.type = 'sine';
synths[2].oscillator.type = 'sawtooth';

//gain is incredibly important here, without this rather low setting, the sounds created by different oscillators could be ear-splitting and even damage speakers
const gain = new Tone.Gain(0.2);

//connect each synth to the Feedback Delay, connect that to the Auto Wah, connect that to Gain and send that to the speakers —AGAIN, SET GAIN LOW!
synths.forEach(synth => synth.connect(fbDelay));
fbDelay.connect(autWah);
autWah.connect(gain);
gain.toDestination();

//look at the body of the page (HTML) get all the divs that are children of divs (in our HTML we have three divs which are inside (children of) an outer div)) and apply a different not to each
const $rows = document.body.querySelectorAll('div > div'),
notes = ['G4', 'E4', 'C3'];

//create an index we can increase 
let index = 0;

//play through the rows and then do it again, etc —I'll admit some of this is new to me!
Tone.Transport.scheduleRepeat(repeat, '8n');

function repeat(time){
    let step = index % 8;
for (let i = 0; i < $rows.length; i++){
    let synth = synths[i],
    note = notes[i],
    $row = $rows[i],
    $input = $row.querySelector(`input:nth-child(${step + 1})`);
    if($input.checked) synth.triggerAttackRelease(note, '8n', time);
}
index++;
}

//get the play button, when it's clicked, if the Tone.context.state is NOT "running" then start it, if it is, then stop it —oh and change the text in the button based on what will happen when it's next clicked!

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


  
                      