import { useEffect, useState } from "react";

import { Grid } from "./components/Grid";

import "./styles.css";

export default function App() {
  const initalSate = {
    c1: null,
    c2: null,
    c3: null,
    c4: null,
    c5: null,
    c6: null,
    c7: null,
    c8: null,
    c9: null
  };
  const [state, setState] = useState(initalSate);
  const [nowPlaying, setNowPlaying] = useState("X");
  const [isWon, setIsWon] = useState(false);

  const reset = () => {
    ["#c1", "#c2", "#c3", "#c4", "#c5", "#c6", "#c7", "#c8", "#c9"].forEach(
      (item) => {
        document.querySelector(item).innerHTML = "";
      }
    );

    setState(initalSate);
    setNowPlaying("X");
    setIsWon(false);
  };

  const updateNowPlaying = () => {
    if (nowPlaying === "X") {
      setNowPlaying("O");
    } else {
      setNowPlaying("X");
    }
  };

  const checkThree = (ch1, ch2, ch3) => {
    if (state[ch1] && state[ch1] === state[ch2] && state[ch1] === state[ch3]) {
      return true;
    }

    return false;
  };

  const checkResult = () => {
    return (
      checkThree("c1", "c2", "c3") ||
      checkThree("c4", "c5", "c6") ||
      checkThree("c7", "c8", "c9") ||
      checkThree("c1", "c4", "c7") ||
      checkThree("c2", "c5", "c8") ||
      checkThree("c3", "c6", "c9") ||
      checkThree("c1", "c5", "c9") ||
      checkThree("c3", "c5", "c7")
    );
  };

  const handleClick = (e) => {
    e.preventDefault();
    if (!isWon) {
      const tempState = JSON.parse(JSON.stringify(state));
      tempState[e.target.id] = nowPlaying;
      e.target.innerHTML = nowPlaying;
      setState(tempState);
      updateNowPlaying();
    }
  };

  useEffect(() => {
    const didWin = checkResult();
    if (didWin) {
      setIsWon(true);
      updateNowPlaying();
    }
  }, [state]);

  return (
    <div className="App">
      <div className="header">
        {!isWon && <p>Now playing: {nowPlaying}</p>}
        {isWon && <p>Winner: {nowPlaying}</p>}
        <button onClick={reset}>Reset</button>
      </div>
      <Grid handleClick={handleClick} />
    </div>
  );
}
