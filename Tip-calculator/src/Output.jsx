import React from "react";

export default function Output({ totalBill, billAmount, tipAmount }) {
  return (
    <h2>
      You pay ${totalBill === null ? "0" : totalBill}($
      {billAmount === null ? "0" : billAmount} + ${tipAmount} Tip)
    </h2>
  );
}
