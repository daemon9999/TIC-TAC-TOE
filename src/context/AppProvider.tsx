import React, { createContext, useContext, useState, useCallback } from "react";

interface SiteContextData {
  isEntry: boolean;
  startGame: () => void;
  modals: ModalData[];
  appendModal: (modalData: ModalData) => void;
  closeModal: () => void;
  xUser: number[];
  oUser: number[];
  addXO: (user: string, n: number) => void;
  clearXO: () => void;
  turn: string;
  changeTurn: () => void;
  handleClick: (_e:any, n: number) => void;
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
  xUser: [],
  oUser: [],
  addXO: () => {},
  clearXO: () => {},
  turn: "",
  changeTurn: () => {},
  handleClick: () => {},
});
export const useSite = () => useContext(SiteContext);
const AppProvider = ({ children }: AppProviderProps) => {
  const [isEntry, setIsEntry] = useState<boolean>(true);
  const [modals, setModals] = useState<ModalData[]>([]);
  const [xUser, setXUser] = useState<number[]>([]);
  const [oUser, setOUser] = useState<number[]>([]);
  const [turn, setTurn] = useState<string>("x");
  const startGame = useCallback(() => {
    setIsEntry(false);
  }, []);

  const appendModal = useCallback((modalData: ModalData) => {
    setModals((prevModals) => [...prevModals, modalData]);
  }, []);

  const closeModal = useCallback(() => {
    setModals((prevModals) => prevModals.slice(0, prevModals.length - 1));
  }, []);

  const addXO = useCallback((user: string, n: number) => {
    user === "x"
      ? setXUser((prevX) => [...prevX, n])
      : setOUser((prevO) => [...prevO, n]);
  }, []);

  const clearXO = useCallback(() => {
    setXUser([]);
    setOUser([]);
  }, []);

  const changeTurn = useCallback(() => {
    setTurn((prevT) => (prevT === "x" ? "o" : "x"));
  }, []);

  const handleClick = useCallback(( _e: any, n: number) => {
    
    if (oUser.includes(n) || xUser.includes(n)) return;

    addXO(turn, n);
    changeTurn();
  }, [oUser, xUser, addXO, changeTurn]);
  const data = {
    startGame,
    isEntry,
    modals,
    appendModal,
    closeModal,
    xUser,
    oUser,
    addXO,
    clearXO,
    turn,
    changeTurn,
    handleClick,
  };
  return <SiteContext.Provider value={data}>{children}</SiteContext.Provider>;
};

export default AppProvider;
