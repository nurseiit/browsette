import React, { Component } from 'react';
import Square from './Square';

import '../styles/Board.css';

export default class Board extends Component {
  constructor() {
    super();
    this.state = {
      squares: Array(9).fill(null),
      nextPlayer: 'X',
      end: false,
    };
  }

  handleClicks(index) {
    const { squares, end } = this.state;
    if (end === true) return;
    if (squares[index] === null) {
      const getNextPlayer = prev => (
        prev === 'X' ? 'O' : 'X'
      );
      this.setState(prevState => ({
        nextPlayer: getNextPlayer(prevState.nextPlayer),
        squares: prevState.squares.map((val, ind) => (
          ind === index ? prevState.nextPlayer : val
        )),
      }));
    }
  }

  checkWinner() {
    const { squares } = this.state;
    const lines = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];
    for (let i = 0; i < lines.length; i += 1) {
      const [a, b, c] = lines[i];
      if (squares[a] && squares[a] === squares[b] && squares[b] === squares[c]) {
        return squares[a];
      }
    }
    return null;
  }

  squareIsFull() {
    const { squares } = this.state;
    for (let i = 0; i < 9; i += 1) {
      if (squares[i] === null) return false;
    }
    return true;
  }

  renderSquare(i) {
    const { squares } = this.state;
    return (
      <Square
        handleClicks={() => this.handleClicks(i)}
        value={squares[i]}
      />
    );
  }

  render() {
    const { nextPlayer, end } = this.state;
    const winner = this.checkWinner();
    const full = this.squareIsFull();
    let status = `Next player: ${nextPlayer}`;
    if (winner) {
      status = `The winner is: ${winner}`;
      if (!end) {
        this.setState(prevState => ({
          end: !prevState.end,
        }));
      }
    } else if (full) {
      status = 'It\'s a draw';
    }
    return (
      <div>
        <div className="status">
          {status}
        </div>
        <div className="board-row">
          {this.renderSquare(0)}
          {this.renderSquare(1)}
          {this.renderSquare(2)}
        </div>
        <div className="board-row">
          {this.renderSquare(3)}
          {this.renderSquare(4)}
          {this.renderSquare(5)}
        </div>
        <div className="board-row">
          {this.renderSquare(6)}
          {this.renderSquare(7)}
          {this.renderSquare(8)}
        </div>
      </div>
    );
  }
}
