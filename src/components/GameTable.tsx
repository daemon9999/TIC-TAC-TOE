import { useGame } from "src/utils/game";
import UserCard from "./UserCard";

const GameTable = () => {
  const { user_1, user_2 } = useGame();
  const users = [user_1, user_2];
  return (
    <div className="p-10 space-y-10 w-full h-full flex flex-col ">
      <h2 className="text-5xl font-bold text-slate-800 ">TIC TAC TOE</h2>
      <div className="grid grid-cols-2 gap-7 w-full ">
        {users.map(({ color, name, id, sign }: User) => (
          <UserCard color={color} name={name} key={id} id={id} sign={sign} />
        ))}
      </div>

      <button
        type="button"
        className="bg-slate-800 text-white rounded-md px-5 py-4 text-2xl mt-auto "
      >
        Clear Board
      </button>
    </div>
  );
};

export default GameTable;
