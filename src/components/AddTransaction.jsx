import React, { useContext, useState } from "react";
import { Globalcontext } from "../context/GlobalContext";

export const AddTransaction = () => {
  const [text, setText] = useState("");
  const [amount, setAmount] = useState(0);
  const { addTransaction } = useContext(Globalcontext);
  const onSubmit = (e) => {
    e.preventDefault();
    if (!text || !amount) {
      alert("Both Required");
      return;
    }
    const newtransaction = {
      id: Math.floor(Math.random() * 10000),
      text,
      amount: +amount,
    };
    addTransaction(newtransaction);
  };
  return (
    <>
      <h3>Add new transaction</h3>
      <form onSubmit={onSubmit}>
        <div className="form-control">
          <label htmlFor="text">Text</label>
          <input
            type="text"
            required
            value={text}
            onChange={(e) => setText(e.target.value)}
            placeholder="Enter text..."
          />
        </div>
        <div className="form-control">
          <label htmlFor="amount">
            Amount <br />
            (negative - expense, positive - income)
          </label>
          <input
            type="number"
            required
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
            placeholder="Enter amount..."
          />
        </div>
        <button className="btn">Add transaction</button>
      </form>
    </>
  );
};
