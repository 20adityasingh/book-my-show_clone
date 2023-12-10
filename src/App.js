import HomePage from './pages/Home.page';
import MoviesPage from './pages/Movies.page';
import PlaysPage from './pages/Plays.page';
import './App.css';
import {Routes, Route} from "react-router-dom";
function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/movie/:id" element={<MoviesPage />} />
      <Route path="/Plays" element={<PlaysPage/>} />
    </Routes>
  );
}
export default App;
