import { useSelector } from "react-redux";
import { RootState } from "src/store";

export const useGame = () => useSelector((state: RootState) => state.game);
