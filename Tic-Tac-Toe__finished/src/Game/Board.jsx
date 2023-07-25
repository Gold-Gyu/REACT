import { Square } from './Square';

const winnerCondition = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6],
];

const checkWinner = (squares) => {
  for (const [x, y, z] of winnerCondition) {
    const xValue = squares[x];
    const yValue = squares[y];
    if (xValue && xValue === yValue && yValue === squares[z]) {
      return {
        winPlayer: xValue,
        winIndexs: [x, y, z],
      };
    }
  }

  return null;
};

export function Board({ squares, nextPlayer, play }) {
  const winner = checkWinner(squares);
  const isDraw = !winner && squares.every((square) => square);

  const squareClick = (squareIndex) => () => {
    if (winner) return;
    const nextSquares = squares.slice();
    nextSquares[squareIndex] = nextPlayer;
    play(nextSquares);
  };

  let statusMessage;

  if (winner) {
    const { winPlayer } = winner;
    statusMessage = `승자! : ${winPlayer}`;
  } else if (isDraw) {
    statusMessage = '오.. 비겼어요. 😳';
  } else {
    statusMessage = `플레이어 : ${nextPlayer}`;
  }

  return (
    <div className="Board">
      <h2 className="Status">{statusMessage}</h2>
      <div className="Squares">
        {squares.map((square, index) => {
          let winStyle = null;

          if (winner) {
            const { winIndexs: [x, y, z] } = winner;
            if (index === x || index === y || index === z) {
              winStyle = { background: '#f9f9ca' }
            }
          }

          return (
            <Square key={index} style={winStyle} onSquareClick={squareClick(index)}>
              {square}
            </Square>
          );
        })}
      </div>
    </div>
  );
}
