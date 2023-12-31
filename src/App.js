import React, { useState, useEffect } from "react";
import "./App.css";
import WishForm from "./components/WishForm";
import WishList from "./components/WishList";
import Travel from "./components/Travel";

function App() {
  const [input, setInput] = useState("");
  const [wishes, setWishes] = useState([]);
  const [status, setStatus] = useState("all");
  const [filteredWishes, setFilteredWishes] = useState([]);

  useEffect(() => {
    filteredHandler();
  }, [wishes, status]);

  const filteredHandler = () => {
    switch (status) {
      case "completed":
        setFilteredWishes(wishes.filter((wish) => wish.completed === true));
        break;
        case "uncompleted":
          setFilteredWishes(wishes.filter((wish) => wish.completed === false));
        break;
      default:
        setFilteredWishes(wishes);
        break;
    }
  };

  return (
    <div className="App">
      <header>
        <h1>Nikola's bucket list</h1>
      </header>
      <WishForm 
        input={input}
        wishes={wishes} 
        setWishes={setWishes} 
        setInput={setInput} 
        setStatus={setStatus}
      />
      <WishList
        wishes={wishes}
        setWishes={setWishes}
        filteredWishes={filteredWishes}
      />

     <footer><a href="/travel">Bucket list for destinations</a></footer>

    </div>
  );
}
export default App;
