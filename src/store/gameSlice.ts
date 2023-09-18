import { createSlice } from "@reduxjs/toolkit";

type InitialStateProps = {
  isEntry: boolean;
  board: Array<string | null>;
  winner: string | null;
  turn: string;
  user_1: User;
  user_2: User;
};

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
const initialState: InitialStateProps = {
  isEntry: true,
  board: Array(9).fill(null),
  turn: "1",
  winner: null,
  user_1: { id: 1, name: "", sign: "", color: "" },
  user_2: { id: 2, name: "", sign: "", color: "" },
};

const gameSlice = createSlice({
  name: "game",
  initialState,
  reducers: {
    startGame: (state) => {
      state.isEntry = false;
    },

    changeTurn: (state) => {
      state.turn = state.turn === "1" ? "2" : "1";
    },

    clickBoard: (state, action) => {
      const newBoard = [...state.board];

      newBoard[action.payload] = state.turn === "1" ? "x" : "o";
      state.board = newBoard;
      checkWinner(state);
    },
  },
});

const checkWinner = (state: InitialStateProps) => {
  winnerOptions.map((winnerOption) => {
    const [i1, i2, i3] = winnerOption;
    if (
      state.board[i1] &&
      state.board[i1] === state.board[i2] &&
      state.board[i1] === state.board[i3]
    ) {
      state.winner = state.board[i1];
      return;
    }
  });

  state.turn = state.turn === "1" ? "2" : "1";
};

export default gameSlice.reducer;
export const { startGame, changeTurn, clickBoard } = gameSlice.actions;
