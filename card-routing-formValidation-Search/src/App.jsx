// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import "./App.css";
import Routee from "./Routee";
import { BrowserRouter as Router, Route, Link, Routes } from "react-router-dom";
import Card from "./Card";
import FormValidation from "./FormValidation";
import Search from "./Search";

function App() {
  // const [count, setCount] = useState(0)

  return (
    <div>
      <div>
        <Card />
        <Card />
      </div>
      <Router>
        <Routes>
          <Route path="/search" Component={<Search />} exact />
          <Route path="/Ro" element={<Routee />} />
        </Routes>
        <nav>
          <ul>
            <li>
              <Link to="/Ro">Routcer</Link>
            </li>
          </ul>
        </nav>
      </Router>
      <div>
        <FormValidation />
        <Search />
      </div>
    </div>
  );
}

export default App;
