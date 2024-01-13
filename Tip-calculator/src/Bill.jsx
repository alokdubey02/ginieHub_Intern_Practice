import React from "react";
export default function Bill({ children, billAmount, setBillAmount }) {
  function handleBill(e) {
    setBillAmount(e.target.value);
  }
  return (
    <div>
      {children}
      <input
        type="number"
        onChange={handleBill}
        value={billAmount}
        placeholder="Bill-value"
      ></input>
      {/* console.log(onInput); */}
    </div>
  );
}
