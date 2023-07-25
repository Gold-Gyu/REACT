export function History({ squares, timeTravel }) {
  return (
    <div className="History">
      <ol>
        {squares.map((square, playIndex) => (
          <li key={playIndex}>
            {playIndex > 0 && squares.length - 1 === playIndex ? (
              `게임 #${playIndex} 이동`
            ) : (
              <button type="button" onClick={() => timeTravel(playIndex)}>
                {playIndex === 0 ? '게임 시작' : `게임 #${playIndex} 이동`}
              </button>
            )}
          </li>
        ))}
      </ol>
    </div>
  );
}
