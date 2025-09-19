class WavRecorder extends AudioWorkletProcessor {
    constructor() {
        super();
        this.recording = false;
        this.port.onmessage = e => {
            if (e.data.type === 'start') { this.recording = true; this.sr = e.data.sampleRate; }
            if (e.data.type === 'stop') { this.recording = false; this.port.postMessage({ type: 'stopped', sampleRate: this.sr }); }
        };
    }
    process(inputs) {
        if (this.recording) {
            const ch0 = (inputs[0] && inputs[0][0]) ? inputs[0][0] : new Float32Array(128);
            this.port.postMessage({ type: 'chunk', buffer: ch0.slice(0) });
        }
        return true;
    }
}
registerProcessor('wav-recorder', WavRecorder);