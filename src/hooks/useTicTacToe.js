import { useEffect, useState } from "react";
import { initalSate, possibleWinners } from '../constants';

export const useTicTacToe = () => {
  // state of the game
  const [state, setState] = useState(initalSate);
  // track who plays the next move
  const [nowPlaying, setNowPlaying] = useState("X");
  // track if the game isWon
  const [isWon, setIsWon] = useState(false);
  // track the number of moves
  const [count, setCount] = useState(0);
  // track if it's a draw
  const [isDraw, setIsDraw] = useState(false);
  // store the last position played
  const [lastPositoin, setLastPosition] = useState(null);
  // store winning cells
  const [winningCells, setWinningCells] = useState();

  // to reset the board when use clicks on reset
  const reset = () => {
    // reset states
    setState(initalSate);
    setNowPlaying("X");
    setIsWon(false);
    setIsDraw(false);
    setCount(0);
    setWinningCells([]);
  };

  // toggle players turn
  const updateNowPlaying = () => {
    if (nowPlaying === "X") {
      setNowPlaying("O");
    } else {
      setNowPlaying("X");
    }
  };

  // test if a row is completed & won
  const checkRow = (ch1, ch2, ch3) => {
    if (state[ch1] && state[ch1] === state[ch2] && state[ch1] === state[ch3]) {
      return true;
    }
    return false;
  };

  // function called after every move to check if the current player won
  const checkResult = () => {
    let winner = [];

    // loop through the possible winning combinations to check if the current player won
    // it's an array of arrays(winning combinations)
    possibleWinners.every((item) => {
      // return early if last position not in the current item
      if(!item.includes(lastPositoin)) { return true; }

      // check current row
      const isWinner = checkRow(...item);
      // if check return true, update winning cells and exit loop;
      if (isWinner) {
        winner = [...item];
        return false;
      }
      return true;
    });
    return winner;
  };

  // function to handle cell click
  const handleClick = (e) => {
    e.preventDefault();
    // only procced if
    // 1. Game is not already won
    // 2. Game is not already a draw
    // 3. target.id exists in our state (check if user has clicked on of the cells and not outside)
    // 4. selected cell is empty
    if (!isWon && !isDraw && state[e.target.id] !== undefined && state[e.target.id] === null) {
      // make a copy of the state
      const tempState = JSON.parse(JSON.stringify(state));
      // set cell position to symbol(x or o) in the state
      tempState[e.target.id] = nowPlaying;
      // update game state
      setState(tempState);
      // update who has the next turn
      updateNowPlaying();
      // update the number of moves completed
      setCount(count + 1);
      // update last cell position
      setLastPosition(e.target.id);
    }
  };

  // effect called everytime state is updated
  useEffect(() => {
    // check if game is won, if true returns an array of the winning cells else an empty array
    const didWin = checkResult();
    // check if won
    if (didWin.length > 0) {
      setIsWon(true);
      updateNowPlaying();
      setWinningCells(didWin);
    }
    // if not won check if it's a draw
    if (count >= 9 && didWin.length <= 0) {
      setIsDraw(true);
    }
  }, [state]);

  return { state, nowPlaying, isWon, isDraw, winningCells, reset, handleClick };
}
