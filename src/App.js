import { useEffect, useState } from "react";

import { Grid } from "./components/Grid";

import { useTicTacToe } from './hooks/useTicTacToe';

import "./styles.css";

export default function App() {
  const {nowPlaying, isWon, isDraw, reset, handleClick} = useTicTacToe();
  return (
    <div className="App">
      <div className="header">
        {!isWon && !isDraw && <p>Now playing: {nowPlaying}</p>}
        {isWon && <p>Winner: {nowPlaying}</p>}
        {isDraw && <p>It's a draw</p>}
        <button onClick={reset}>Reset</button>
      </div>
      <Grid handleClick={handleClick} />
    </div>
  );
}
