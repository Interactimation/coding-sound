/* 
STEP SEQUENCER
* Based on: https://www.youtube.com/watch?v=Dxxkma4F-oA
* Discover: Oscillators are sound wave generators and these waves can have different shapes. Read up about them: https://www.perfectcircuit.com/signal/difference-between-waveforms
and maybe try the one we're not using, below
*/

//setup some effects

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

// give each synth a different oscillator
synths[0].oscillator.type = 'triangle';
synths[1].oscillator.type = 'sine';
synths[2].oscillator.type = 'sawtooth';

const gain = new Tone.Gain(0.2);


synths.forEach(synth => synth.connect(fbDelay));
fbDelay.connect(autWah);
autWah.connect(gain);
gain.toDestination();

const $rows = document.body.querySelectorAll('div > div'),
notes = ['G4', 'E4', 'C3'];
let index = 0;

Tone.Transport.scheduleRepeat(repeat, '8n');
//Tone.Transport.start();

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

//get the play button, when it's clicked, if the Tone.context.state is NOT "running" then start it, if it is, then stop it, oh and change the text in the button based on what will happen when it's next clicked!

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


  
                      