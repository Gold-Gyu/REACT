export function Square({ style, onSquareClick, children }) {
  return (
    <button
      type="button"
      className="Square"
      onClick={onSquareClick}
      disabled={children}
      style={style}
    >
      {children}
    </button>
  );
}
