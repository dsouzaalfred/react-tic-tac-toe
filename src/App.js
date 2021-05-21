import { useEffect, useState } from 'react';

import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { Grid } from './components/Grid';

import { useTicTacToe } from './hooks/useTicTacToe';

import './styles.css';

export default function App() {
  const {nowPlaying, isWon, isDraw, reset, handleClick} = useTicTacToe();
  return (
    <div className="App">
      <div className="wrapper">
        <Header isWon={isWon} isDraw={isDraw} nowPlaying={nowPlaying} reset={reset} />
        <Grid handleClick={handleClick} />
        <Footer />
      </div>
    </div>
  );
}
