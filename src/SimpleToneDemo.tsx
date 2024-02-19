import React from 'react';
import * as Tone from 'tone';

const SimpleToneDemo = () => {
  const playNote = () => {
    // create a synth
    const synth = new Tone.Synth().toDestination();
    // play a note from that synth
    synth.triggerAttackRelease("C4", "8n");
  };

  return (
    <div>
      <h1>Simple React Tone.js Demo</h1>
      <button onClick={playNote}>Click me to play note!</button>
    </div>
  );
};

export default SimpleToneDemo;
