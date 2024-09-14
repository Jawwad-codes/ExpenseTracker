import React, { useContext } from "react";
import { Globalcontext } from "../context/GlobalContext";
import { Transaction } from "./Transaction";

export const TransactionList = () => {
  const { transactions } = useContext(Globalcontext);
  return (
    <>
      <h3>History</h3>
      <ul className="list">
        {transactions.map((transactions) => (
          <Transaction key={transactions.id} transactions={transactions} />
        ))}
      </ul>
    </>
  );
};
