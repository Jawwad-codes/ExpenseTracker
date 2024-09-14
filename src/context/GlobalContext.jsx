import { createContext, useReducer } from "react";
import { Reducer } from "./Reducer";
const initialState = {
  transactions: [],
};
export const Globalcontext = createContext(initialState);
export const GlobalProvider = ({ children }) => {
  const [state, dispatch] = useReducer(Reducer, initialState);
  function deleteTransaction(id) {
    dispatch({
      type: "DELETE_TRANSACTION",
      payload: id,
    });
  }
  function addTransaction(transactions) {
    dispatch({
      type: "ADD_TRANSACTION",
      payload: transactions,
    });
  }
  const contextValue = {
    transactions: state.transactions,
    deleteTransaction,
    addTransaction,
  };
  return (
    <Globalcontext.Provider value={contextValue}>
      {children}
    </Globalcontext.Provider>
  );
};
