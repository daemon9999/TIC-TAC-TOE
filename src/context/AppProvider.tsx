import React, {
  useMemo,
  createContext,
  useContext,
  useState,
  useCallback,
} from "react";

const winnerOptions = [
  //ROWS
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  //COLS
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  //DIAGONALS
  [0, 4, 8],
  [2, 4, 6],
];

interface SiteContextData {
  isEntry: boolean;
  startGame: () => void;
  modals: ModalData[];
  appendModal: (modalData: ModalData) => void;
  closeModal: () => void;

  turn: string;
  changeTurn: () => void;
  handleClick: (_e: any, n: number) => void;
  board: Array<string | null>;
  winner: string | null
}

interface AppProviderProps {
  children: React.ReactNode;
}
const SiteContext = createContext<SiteContextData>({
  isEntry: false,
  startGame: () => {},
  modals: [],
  appendModal: () => {},
  closeModal: () => {},

  turn: "",
  changeTurn: () => {},
  handleClick: () => {},
  board: [],
  winner: null
});
export const useSite = () => useContext(SiteContext);
const AppProvider = ({ children }: AppProviderProps) => {
  const [isEntry, setIsEntry] = useState<boolean>(true);
  const [modals, setModals] = useState<ModalData[]>([]);
  const [turn, setTurn] = useState<string>("x");
  const [board, setBoard] = useState(Array(9).fill(null));
  const [winner, setWinner] = useState<string | null>(null)
  const startGame = useCallback(() => {
    setIsEntry(false);
  }, []);

  const appendModal = useCallback((modalData: ModalData) => {
    setModals((prevModals) => [...prevModals, modalData]);
  }, []);

  const closeModal = useCallback(() => {
    setModals((prevModals) => prevModals.slice(0, prevModals.length - 1));
  }, []);

  const changeTurn = useCallback(() => {
    setTurn((prevT) => (prevT === "x" ? "o" : "x"));
  }, []);

  const handleClick = useCallback(
    (_e: any, i: number) => {

      

      const newBoard = [...board];
      newBoard[i] = turn === "x" ? "x" : "o";
      setBoard(newBoard);
      if (!checkWinner) {
        changeTurn();
      }
      
    },
    [board, setBoard, changeTurn, turn]
  );

  const checkWinner = useMemo(() => {
    
    winnerOptions.map(winnerOption => {
      const [i1, i2, i3] = winnerOption
      if (board[i1] && board[i1] === board[i2] && board[i1] === board[i3]){
        setWinner(board[i1])
        return true
      }
    })

    return false
  }, [board]);
  const data = {
    startGame,
    isEntry,
    modals,
    appendModal,
    closeModal,
    turn,
    changeTurn,
    handleClick,
    board,
    winner
  };
  return <SiteContext.Provider value={data}>{children}</SiteContext.Provider>;
};

export default AppProvider;
