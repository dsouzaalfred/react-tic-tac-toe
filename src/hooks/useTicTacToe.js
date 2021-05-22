import {useEffect, useState} from 'react';
import {initialSate, possibleWinners} from '../constants';

export const useTicTacToe = () => {
  // state of the game
  const [state, setState] = useState(initialSate);
  // track who plays the next move
  const [nowPlaying, setNowPlaying] = useState('X');
  // track if the game isWon
  const [isWon, setIsWon] = useState(false);
  // track the number of moves
  const [count, setCount] = useState(0);
  // track if it's a draw
  const [isDraw, setIsDraw] = useState(false);
  // store the last position played
  const [lastPosition, setLastPosition] = useState(null);

  // to reset the board when use clicks on reset
  const reset = () => {
    // reset states
    setState(initialSate);
    setNowPlaying('X');
    setIsWon(false);
    setIsDraw(false);
    setCount(0);
  };

  // toggle players turn
  const updateNowPlaying = () => {
    if (nowPlaying === 'X') {
      setNowPlaying('O');
    } else {
      setNowPlaying('X');
    }
  };

  // test if a row is completed & won
  const checkRow = (ch1, ch2, ch3) => {
    if (
      state[ch1].value &&
      state[ch1].value === state[ch2].value &&
      state[ch1].value === state[ch3].value
    ) {
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
      if (!item.includes(lastPosition)) {
        return true;
      }

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
  const handleCellClick = (cellId) => {
    // only proceed if
    // 1. Game is not already won
    // 2. Game is not already a draw
    // 3. target.id exists in our state (check if user has clicked on of the cells and not outside)
    // 4. selected cell is empty
    if (
      !isWon &&
      !isDraw &&
      state[cellId].value !== undefined &&
      state[cellId].value === null
    ) {
      // make a copy of the state
      const tempState = JSON.parse(JSON.stringify(state));
      // set cell position to symbol(x or o) in the state
      tempState[cellId].value = nowPlaying;
      // update game state
      setState(tempState);
      // update who has the next turn
      updateNowPlaying();
      // update the number of moves completed
      setCount(count + 1);
      // update last cell position
      setLastPosition(cellId);
    }
  };

  // effect called every time state is updated
  useEffect(() => {
    if (!isWon) {
      // check if game is won, if true returns an array of the winning cells else an empty array
      const didWin = checkResult();
      // check if won
      if (didWin.length > 0) {
        setIsWon(true);
        updateNowPlaying();
        // make a copy of the state
        const tempState = JSON.parse(JSON.stringify(state));
        didWin.forEach((item) => (tempState[item].inWinningCombo = true));
        // update game state
        setState(tempState);
      }
      // if not won check if it's a draw
      if (count >= 9 && didWin.length <= 0) {
        setIsDraw(true);
      }
    }
  }, [state]);

  return {state, nowPlaying, isWon, isDraw, reset, handleCellClick};
};
