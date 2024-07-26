
import { useGame } from "src/utils/game"
import GameTable from "./GameTable"
import TicTacToe from "./TicTacToe"

const Game = () => {

  return (
    <section className="bg-white w-5/6 h-5/6 rounded-xl  flex ">


        <TicTacToe/>
        <GameTable/>


    </section>
  )
}

export default Game