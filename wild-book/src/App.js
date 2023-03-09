import "./App.css";
import Wilder from "./components/wilder";

const wildersData = [
  {
    name: "Ringo",
    city: "London",
    skills: [
      { title: "JS", votes: 10 },
      { title: "React", votes: 8 },
    ],
  },
  {
    name: "John",
    city: "Paris",
    skills: [
      { title: "PHP", votes: 9 },
      { title: "Symfony", votes: 9 },
    ],
  },
  {
    name: "George",
    city: "Berlin",
    skills: [
      { title: "Ruby", votes: 10 },
      { title: "JS", votes: 8 },
    ],
  },
  {
    name: "Paul",
    city: "Reims",
    skills: [
      { title: "C++", votes: 10 },
      { title: "Rust", votes: 8 },
    ],
  },
];

function App() {
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
          {wildersData.map((wilder) => {
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
