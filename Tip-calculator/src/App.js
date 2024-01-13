import { useState } from "react";
import Output from "./Output";
import "./App.css";
import Bill from "./Bill";
import Reset from "./Reset";
import Services from "./Services";

function App() {
  const [billAmount, setBillAmount] = useState("");
  const [tipPercent, setTipPercent] = useState(0);
  const [frndTipPercent, setFrndTipPercent] = useState(0);

  const totalBill = Number(billAmount);
  const totalTip = (Number(tipPercent) + Number(frndTipPercent)) / 2;
  const tipAmount = (totalTip * totalBill) / 100;

  function handleReset() {
    setTipPercent(0);
    setFrndTipPercent(0);
    setBillAmount("");
  }
  return (
    <div className="App">
      <Bill setBillAmount={setBillAmount} billAmount={billAmount}>
        How much was the bill ?
      </Bill>
      <Services setTip={setTipPercent}>
        How did you like the services ?
      </Services>
      <Services setTip={setFrndTipPercent}>
        How did your friend like the services ?
        {/* <select>
          <option>Dissatisfied (0%)</option>
          <option>It was okay (5%)</option>
          <option>It was good (10%)</option>
          <option>Absolutely amazing! (20%)</option>
        </select> */}
      </Services>
      {totalBill > 0 && (
        <>
          <Output
            totalBill={totalBill}
            billAmount={billAmount}
            tipAmount={tipAmount}
          />
          <Reset onClick={handleReset} />
        </>
      )}
    </div>
  );
}

export default App;
