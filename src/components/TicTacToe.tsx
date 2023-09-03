import { useSite } from "../context/AppProvider";

const TicTacToe = () => {
  const { board, turn, winner } = useSite();

  return (
    <div className="flex flex-col gap-y-10 p-10 border-r border-slate-800">
      <h3 className="text-5xl font-bold text-slate-800 ">
        {winner ? 'WINNER' : 'TURN'}: {" "}
        {winner ? (
          <span className={`${winner === "x" ? "text-green-500" : "text-red-500"}`}>
          {winner.toUpperCase()}
        </span>
        ): (
          <span className={`${turn === "x" ? "text-green-500" : "text-red-500"}`}>
          {turn.toUpperCase()}
        </span>
        )}
      </h3>
      <div className="bg-slate-300/20 grid grid-cols-3 w-96 h-96 self-center">
        {board.map((sign, key: React.Key) => (
          <Cell key={key} i={+key} sign={sign} />
        ))}
      </div>
    </div>
  );
};

interface CellProps {
  i: number;
  sign: string | null;
}
const Cell = ({ i, sign }: CellProps) => {
  const { handleClick, board, winner } = useSite();

  const disabled = board[i] === "x" || board[i] === "o" || winner;

  if (disabled) {
    return (
      <span className=" border border-slate-800 h-full w-full flex items-center justify-center relative">
        <p className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-6xl font-semibold" style={{
          color: sign === 'x' ? 'green' : 'red'
        }}>
          {sign}
        </p>
      </span>
    );
  }

  return (
    <span
      onClick={(e) => handleClick(e, i)}
      className="cursor-pointer border relative border-slate-800 h-full w-full flex items-center justify-center "
    >
      <p className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"></p>
    </span>
  );
};

export default TicTacToe;
