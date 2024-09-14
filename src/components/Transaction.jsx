import React, { useContext } from "react";
import { Globalcontext } from "../context/GlobalContext";

export const Transaction = ({ transactions }) => {
  const sign = transactions.amount < 0 ? "-" : "+";
  const { deleteTransaction } = useContext(Globalcontext);
  return (
    <>
      <li className={transactions.amount < 0 ? "minus" : "plus"}>
        {transactions.text}
        <span>
          {sign}${Math.abs(transactions.amount)}
        </span>
        <button
          onClick={() => deleteTransaction(transactions.id)}
          className="delete-btn"
        >
          x
        </button>
      </li>
    </>
  );
};
