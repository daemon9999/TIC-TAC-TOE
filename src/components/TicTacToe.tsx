
import { useEffect } from "react";
import { useSite } from "../context/AppProvider";

const TicTacToe = () => {
  const numbersArray = Array.from({ length: 9 }, (_, index) => index + 1);
  return (
    <div className="bg-slate-300/20 grid grid-cols-3 w-96 h-96 self-center">
      {numbersArray.map((number, key: React.Key) => (
        <Cell key={key} n={number} />
      ))}
    </div>
  );
};

interface CellProps {
  n: number;
}
const Cell = ({ n }: CellProps) => {
  const {  oUser, xUser,  handleClick } = useSite();

  const disabled = xUser.includes(n) || oUser.includes(n);

    


  useEffect(() => {
 

  }, [])

  if (disabled) {
    return (
      <span className=" border border-slate-800 h-full w-full flex items-center justify-center relative">
         <p className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-6xl font-semibold">{xUser.includes(n) ? "X" : oUser.includes(n) ? "O" : null}</p>
        
      </span>
    );
  }

  return (
    <span
      onClick={(e) => handleClick(e, n)}
      className="cursor-pointer border relative border-slate-800 h-full w-full flex items-center justify-center "
    >
        <p className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"></p>
    </span>
  );
};

export default TicTacToe;
