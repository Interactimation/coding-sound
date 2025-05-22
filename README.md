# Coding Sound
[Live Site](https://interactimation.github.io/coding-sound/)

This is the github Repro for the course _DIG383: Coding Sound_ offered Fall 2025 at Albright College by Mark Baldridge

## Lesson 01: Hello Tone

### Tone.js

[Tone.js](https://tonejs.github.io/) is a javascript library, a Web Audio framework for creating interactive music in the browser, leveraging the Web Audio API

* Include the source files in your html using a [url taken from this page](https://cdnjs.com/libraries/tone) —I'm using the "min" version at the bottom
* [Find the documentation here](https://tonejs.github.io/docs/15.1.22/index.html)

The Web Audio API handles audio operations inside an audio context, in which basic audio operations are performed with audio nodes, linked together to form an audio routing graph  

Several sources —with different types of channel layout— are supported in a single context. A modular design providing flexibility to create complex audio functions with dynamic effects  

To begin with we can think of patching nodes together:  

**Oscillator** (sound wave generator) → **Gain** (volume) → **Destination** (speakers) 

On the high-level, Tone offers common DAW (digital audio workstation) features like a global transport for synchronizing and scheduling events as well as prebuilt synths and effects  

Additionally, Tone provides high-performance building blocks to create your own synthesizers, effects, and complex control signals

### Autoplay Policy 

The [Autoplay Policy](https://developer.chrome.com/blog/autoplay) is an implementation commpn among browsers that users should accept audio or video play by some action (called a "gesture)") of their own, rather than allowing developers to choose an autplay option 

For this reason, before we try to produce any sound, whether generated or played back from a file, we'll get the user to click a button (or interact in some other way with the page)  
[Lesson 01: code](https://github.com/Interactimation/coding-sound/blob/main/lesson01.html)






