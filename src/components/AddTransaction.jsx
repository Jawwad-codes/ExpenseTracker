import React, { useContext, useState } from "react";
import { Globalcontext } from "../context/GlobalContext";

export const AddTransaction = () => {
  const [text, setText] = useState("");
  const [amount, setAmount] = useState(0);
  const [isactive, setActive] = useState(false);
  const { addTransaction } = useContext(Globalcontext);
  const category = [
    "Budget",
    "gas",
    "Electricity",
    "Groceries",
    "Internet",
    "Rent",
    "Water Bill",
    "Phone Bill",
    "Car Insurance",
    "Health Insurance",
    "Eating Out",
    "Utilities",
    "Entertainment",
    "Transportation",
    "Other",
  ];
  const dropdownStyles = {
    backgroundColor: "white",
    color: "Black",
    padding: "10px",
    borderRadius: "5px",
    border: "1px solid gray",
    width: "100%",
    fontSize: "16px",
  };
  const handleAmountChange = (e) => {
    setAmount(e.target.value);
  };

  const handleIncomeClick = () => {
    setActive(true);
    setAmount(Math.abs(amount));
  };
  const handleExpenseClick = () => {
    setActive(false);
    setAmount(-Math.abs(amount));
  };
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
    setAmount(0);
    setText("");
  };
  return (
    <>
      <h3>Add new transaction</h3>
      <div className="CheckButton">
        <button
          className={`Income-btn ${isactive ? "active" : ""}`}
          onClick={handleIncomeClick}
        >
          Income
        </button>
        <button
          className={`Expense-btn ${isactive ? "active" : ""}`}
          onClick={handleExpenseClick}
        >
          Expence
        </button>
      </div>
      <form onSubmit={onSubmit}>
        <div className="form-control">
          <label htmlFor="text">Expense Category</label>
          <br />
          <select
            id="category"
            name="category"
            style={dropdownStyles}
            required
            value={text}
            onChange={(e) => setText(e.target.value)}
          >
            <option value="" disabled>
              select a category
            </option>
            {category.map((category, index) => (
              <option key={index} value={category}>
                {category}
              </option>
            ))}
          </select>
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
            onChange={handleAmountChange}
            placeholder="Enter amount..."
          />
        </div>
        <p>Fill form and select Income or Expense</p>
        <button className="btn">Add transaction</button>
      </form>
    </>
  );
};
