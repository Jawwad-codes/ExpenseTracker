import React, { useContext } from "react";
import { Globalcontext } from "../context/GlobalContext";

export const Balance = () => {
  const { transactions } = useContext(Globalcontext);
  const amount = transactions.map((transactions) => transactions.amount);
  const total = amount.reduce((acc, curr) => (acc += curr), 0).toFixed(2);
  return (
    <>
      <h4>Your Balance</h4>
      <h1>${total}</h1>
    </>
  );
};
