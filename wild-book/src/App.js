import { useState, useEffect } from "react";
import "./App.css";
import Wilder from "./components/wilder";
import axios from "axios";

function App() {
  const [wilder, setWilder] = useState([]);
  useEffect(() => {
    axios.get("http://localhost:5000/api/wilder").then((data) => {
      setWilder(data.data);
    });
  }, []);
  return (
    <div className="App">
      <header>
        <div className="container">
          <h1>Wilder Book</h1>
        </div>
      </header>
      <main className="container">
        <h2>Wilders</h2>
        <section className="card-row">
          {wilder.map((wilder) => {
            console.log(wilder);
            return <Wilder name={wilder.name} skills={wilder.skills} />;
          })}
        </section>
      </main>
      <footer>
        <div>
          <p>&copy; 2022 Wild code school</p>
        </div>
      </footer>
    </div>
  );
}

export default App;
