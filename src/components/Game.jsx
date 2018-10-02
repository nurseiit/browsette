import React from 'react';
import Board from './Board';
import '../styles/Game.css';

const Game = () => (
  <div className="game">
    <div className="game-board">
      <Board />
    </div>
    <div className="game-info">
      <div>{/* Status Here */}</div>
      <div>{/* ToDo */}</div>
    </div>
  </div>
);
export default Game;
