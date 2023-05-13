import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Navbarr from "./Components/Navbarr";
import Home from "./Components/Home";
import MovieList from "./Components/MovieList";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { movies } from "./data/movies";


function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Navbarr />
      <h1>Checkpoint Hooks: Movie Project</h1>

      <br/>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/MovieList" element={<MovieList movies={movies}/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
