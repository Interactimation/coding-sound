const fmSynth = new Tone.FMSynth({
  harmonicity: 3,
  modulationIndex: 10,
  detune: 0,
  oscillator: { type: "sine" },
  modulation: { type: "square" },
  envelope: {
    attack: 0.01,
    decay: 0.01,
    sustain: 1,
    release: 0.5
  },
  modulationEnvelope: {
    attack: 0.5,
    decay: 0,
    sustain: 1,
    release: 0.5
  }
});