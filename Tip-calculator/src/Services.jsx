import React from "react";
export default function Services({ children, setTip }) {
  function handleTip(e) {
    setTip(e.target.value);
  }
  return (
    <div>
      {children}
      <select onChange={handleTip}>
        <option value={0}>Dissatisfied (0%)</option>
        <option value={5}>It was okay (5%)</option>
        <option value={10}>It was good (10%)</option>
        <option value={20}>Absolutely amazing! (20%)</option>
      </select>
    </div>
  );
}
