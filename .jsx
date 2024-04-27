import React, { useState } from 'react';
import './App.css';

const DrumPad = ({ id, src, keyTrigger, handleClick }) => {
  return (
    <button className="drum-pad" id={id} onClick={() => handleClick(id)}>
      {keyTrigger}
      <audio className="clip" id={keyTrigger} src={src}></audio>
    </button>
  );
};

const DrumMachine = () => {
  const [display, setDisplay] = useState('');

  const handleClick = (id) => {
    const sound = document.getElementById(id);
    sound.currentTime = 0;
    sound.play();
    setDisplay(id);
  };

  const handleKeyPress = (event) => {
    const id = event.key.toUpperCase();
    const sound = document.getElementById(id);
    if (sound) {
      sound.currentTime = 0;
      sound.play();
      setDisplay(id);
    }
  };

  return (
    <div id="drum-machine" tabIndex="0" onKeyDown={handleKeyPress}>
      <div id="display">{display}</div>
      <div className="drum-pads">
        <DrumPad id="Heater-1" src="https://s3.amazonaws.com/freecodecamp/drums/Heater-1.mp3" keyTrigger="Q" handleClick={handleClick} />
        <DrumPad id="Heater-2" src="https://s3.amazonaws.com/freecodecamp/drums/Heater-2.mp3" keyTrigger="W" handleClick={handleClick} />
        <DrumPad id="Heater-3" src="https://s3.amazonaws.com/freecodecamp/drums/Heater-3.mp3" keyTrigger="E" handleClick={handleClick} />
        <DrumPad id="Heater-4" src="https://s3.amazonaws.com/freecodecamp/drums/Heater-4_1.mp3" keyTrigger="A" handleClick={handleClick} />
        <DrumPad id="Clap" src="https://s3.amazonaws.com/freecodecamp/drums/Heater-6.mp3" keyTrigger="S" handleClick={handleClick} />
        <DrumPad id="Open-HH" src="https://s3.amazonaws.com/freecodecamp/drums/Dsc_Oh.mp3" keyTrigger="D" handleClick={handleClick} />
        <DrumPad id="Kick-n-Hat" src="https://s3.amazonaws.com/freecodecamp/drums/Kick_n_Hat.mp3" keyTrigger="Z" handleClick={handleClick} />
        <DrumPad id="Kick" src="https://s3.amazonaws.com/freecodecamp/drums/RP4_KICK_1.mp3" keyTrigger="X" handleClick={handleClick} />
        <DrumPad id="Closed-HH" src="https://s3.amazonaws.com/freecodecamp/drums/Cev_H2.mp3" keyTrigger="C" handleClick={handleClick} />
      </div>
    </div>
  );
};

export default DrumMachine;
