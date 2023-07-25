import './Game.css';
import { useState } from 'react';
import { Board } from './Board';
import { History } from './History';

const INITIAL_SQUARE = Array(9).fill(null);
const BOARD_PLAYER = {
  circle: '⚫️',
  square: '🟨'
}

export default function Game() {
  const [squares, setSquares] = useState([INITIAL_SQUARE]);
  const [currentPlayIndex, setCurrentPlayIndex] = useState(0);

  const currentSquares = squares[currentPlayIndex];
  const circleCount = currentSquares.filter(square => square === BOARD_PLAYER.circle).length;
  const squareCount = currentSquares.filter(square => square === BOARD_PLAYER.square).length;
  const nextPlayer = circleCount === squareCount ? BOARD_PLAYER.circle : BOARD_PLAYER.square;

  const play = (nextSquares) => {
    setSquares([...squares.slice(0, currentPlayIndex + 1), nextSquares]);
    setCurrentPlayIndex(currentPlayIndex + 1);
  };

  const timeTravel = (playIndex) => {
    setCurrentPlayIndex(playIndex);
  };

  return (
    <div className="Game">
      <Board squares={currentSquares} nextPlayer={nextPlayer} play={play} />
      <History squares={squares} timeTravel={timeTravel} />
    </div>
  );
}
