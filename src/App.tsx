import { useState } from "react";
import "./styles.css";
import { capoLogic, removeCapoLogic } from "./translate-capo-logic";

// TO-DO List:
// Make functional for just first instance
//    Error-handling (invalid chord, invalid capo position)
//    Error-handling (actually guide user to fix.)
// Make functional for next 2 instances
// Show/hide forms based on user's intended actions
// Support alternate tunings

function TranslateCapoDiv() {
  const [chordShape, setChordShape] = useState("");
  const [capoPosition, setCapoPosition] = useState();
  const [capoResults, setCapoResults] = useState("");

  const checkChordShape = (event: { target: { value: any } }) => {
    const newChordShape = event.target.value;
    console.log("updated chord shape to ", newChordShape);
    setChordShape(newChordShape);
  };

  const checkCapoPosition = (event: { target: { value: any } }) => {
    const newCapoPosition = Number(event.target.value);
    setCapoPosition(newCapoPosition);
  };

  function updateCapoResults() {
    const newResult = capoLogic(chordShape, capoPosition);
    setCapoResults(newResult);
  }

  return (
    <>
      <label htmlFor="chordShape">Chord shape:</label>
      <input id="chordShape" value={chordShape} onChange={checkChordShape} />
      <label htmlFor="capoPosition">Capo position:</label>
      <input
        id="capoPosition"
        value={capoPosition}
        onChange={checkCapoPosition}
      />
      <button onClick={updateCapoResults}>Submit</button>
      <div>
        <p>{capoResults}</p>
      </div>
    </>
  );
}

function RemoveCapoDiv() {
  const [chordShape, setChordShape] = useState("");
  const [capoPosition, setCapoPosition] = useState();
  const [capoResults, setCapoResults] = useState("");

  const checkChordShape = (event: { target: { value: any } }) => {
    const newChordShape = event.target.value;
    console.log("updated chord shape to ", newChordShape);
    setChordShape(newChordShape);
  };

  const checkCapoPosition = (event: { target: { value: any } }) => {
    const newCapoPosition = Number(event.target.value);
    setCapoPosition(newCapoPosition);
  };

  function updateCapoResults() {
    const newResult = removeCapoLogic(chordShape, capoPosition);
    setCapoResults(newResult);
  }

  return (
    <>
      <label htmlFor="chordShape">Chord shape:</label>
      <input id="chordShape" value={chordShape} onChange={checkChordShape} />
      <label htmlFor="capoPosition">Original capo position:</label>
      <input
        id="capoPosition"
        value={capoPosition}
        onChange={checkCapoPosition}
      />
      <button onClick={updateCapoResults}>Submit</button>
      <div>
        <p>{capoResults}</p>
      </div>
    </>
  );
}

export default function App() {
  return (
    <div className="App">
      <h1>Hello!</h1>
      <ul>
        <li>
          <p>I want to check what a capo'd chord shape really is</p>
          <TranslateCapoDiv />
        </li>
        <li>
          <p>I want to remove a capo</p>
          <RemoveCapoDiv />
        </li>
      </ul>
      <p>
        <b>Note:</b>This all assumes a standard guitar tuning of EADGBE.
      </p>
    </div>
  );
}
