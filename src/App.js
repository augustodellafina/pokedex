import Home from "./components/pages/Home";
import Favorites from "./components/pages/Favorites";
import PokemonDetail from "./components/pages/PokemonDetail";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// Add style CSS
import "./assets/scss/App.scss";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/favorites" element={<Favorites />} />
          <Route exact path="/pokemon/:name" element={<PokemonDetail />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
