import { useDispatch } from "react-redux";
import { clickBoard } from "src/store/gameSlice";
import { useGame } from "src/utils/game";

const TicTacToe = () => {
  const { board, turn, winner, user_1, user_2 } = useGame();

  return (
    <div className="flex flex-col gap-y-10 p-10 border-r border-slate-800">
      <h3 className="text-5xl font-bold text-slate-800 ">
        {!board.includes(null) ? (
          <span className={"text-yellow-500"}>DRAW</span>
        ) : (
          <>
            {winner ? "WINNER" : "TURN"}:{" "}
            {winner ? (
              <span
                style={{
                  color: winner === user_1.sign ? user_1.color : user_2.color,
                }}
              >
                {winner.toUpperCase()}
              </span>
            ) : (
              <span
                style={{
                  color: turn === "1" ? user_1.color : user_2.color,
                }}
              >
                {turn === "1" ? user_1.sign?.toUpperCase() : user_2.sign?.toUpperCase()}
              </span>
            )}
          </>
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
  const { board, winner, user_1, user_2 } = useGame();
  const dispatch = useDispatch();
  const disabled = board[i] === user_1.sign || board[i] === user_2.sign || winner;

  if (disabled) {
    return (
      <span className=" border border-slate-800 h-full w-full flex items-center justify-center relative">
        <p
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-6xl font-semibold"
          style={{
            color: sign === user_1.sign ? user_1.color : user_2.color,
          }}
        >
          {sign}
        </p>
      </span>
    );
  }

  return (
    <span
      onClick={(_e) => dispatch(clickBoard(i))}
      className="cursor-pointer border relative border-slate-800 h-full w-full flex items-center justify-center "
    >
      <p className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"></p>
    </span>
  );
};

export default TicTacToe;
