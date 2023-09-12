import { AiOutlineInfo } from "react-icons/ai";

import { useDispatch } from "react-redux";
import { startGame } from "src/store/gameSlice";

const Entry = () => {

    const dispatch = useDispatch()
  return (
    <section className="h-96 w-1/2 bg-white  rounded-xl p-12 flex flex-col">
      <div className="flex flex-col gap-y-4 items-center ">
        <h1 className="text-6xl tracking-wider font-bold text-slate-600 ">
          TIC TAC TOE
        </h1>
        <h3 className="font-medium text-slate-700 text-xl">By Murad Masimli</h3>
      </div>

      <div className="mt-auto flex items-center gap-x-6 justify-end">
        <button onClick={() => dispatch(startGame())} className="border border-slate-800  rounded-md w-60 py-2 text-lg hover:bg-slate-800 hover:text-white transition duration-300  ">
          Start Game
        </button>

        <span
          className="border border-slate-800 
        rounded-md h-11 w-11 grid place-items-center bg-slate-800 text-white 
        hover:bg-white hover:text-slate-800 transition cursor-pointer"
        >
          <AiOutlineInfo size={26} />
        </span>
      </div>
    </section>
  );
};

export default Entry;
