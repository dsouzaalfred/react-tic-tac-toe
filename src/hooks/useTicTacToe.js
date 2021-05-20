import { useEffect, useState } from "react";

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
const possibleWinners = [
  ["c1", "c2", "c3"],
  ["c4", "c5", "c6"],
  ["c7", "c8", "c9"],
  ["c1", "c4", "c7"],
  ["c2", "c5", "c8"],
  ["c3", "c6", "c9"],
  ["c1", "c5", "c9"],
  ["c3", "c5", "c7"]
];

export const useTicTacToe = () => {
  const [state, setState] = useState(initalSate);
  const [nowPlaying, setNowPlaying] = useState("X");
  const [isWon, setIsWon] = useState(false);
  const [count, setCount] = useState(0);
  const [isDraw, setIsDraw] = useState(false);

  const reset = () => {
    Object.keys(initalSate).forEach((item) => {
      document.querySelector(`#${item}`).innerHTML = "";
      document.querySelector(`#${item}`).classList.remove("winner");
    });

    setState(initalSate);
    setNowPlaying("X");
    setIsWon(false);
    setIsDraw(false);
    setCount(0);
  };

  const updateNowPlaying = () => {
    if (nowPlaying === "X") {
      setNowPlaying("O");
    } else {
      setNowPlaying("X");
    }
  };

  const checkRow = (ch1, ch2, ch3) => {
    if (state[ch1] && state[ch1] === state[ch2] && state[ch1] === state[ch3]) {
      return true;
    }
    return false;
  };

  const checkResult = () => {
    let winner = [];
    possibleWinners.every((item) => {
      const isWinner = checkRow(...item);
      if (isWinner) {
        winner = [...item];
        return false;
      }
      return true;
    });
    return winner;
  };

  const handleClick = (e) => {
    e.preventDefault();
    if (!isWon && !isDraw && state[e.target.id] !== undefined) {
      const tempState = JSON.parse(JSON.stringify(state));
      tempState[e.target.id] = nowPlaying;
      e.target.innerHTML = nowPlaying;
      setState(tempState);
      updateNowPlaying();
      setCount(count + 1);
    }
  };

  useEffect(() => {
    const didWin = checkResult();
    if (didWin.length > 0) {
      setIsWon(true);
      updateNowPlaying();
      didWin.forEach((item) => {
        document.querySelector(`#${item}`).classList.add("winner");
      });
    }
    if (count >= 9 && didWin.length <= 0) {
      setIsDraw(true);
    }
  }, [state]);

  return {nowPlaying, isWon, isDraw, reset, handleClick};
}
