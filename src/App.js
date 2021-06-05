import "./App.css";
import Banner from "./Components/Banner/Banner";
import Navbar from "./Components/Navbar/Navbar";
import RowPost from "./Components/RowPost/RowPost";
import {
  trending,
  action,
  originals,
  ComedyMovies,
  HorrorMovies,
  ActionMovies,
  RomanceMovies,
} from "./Constants/url";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Banner />
      <RowPost type="Trending" url={trending} />
      <RowPost type="Action" url={action} />
      <RowPost type="Orginals" url={originals} />
      <RowPost type="Comedy" url={ComedyMovies} />
      <RowPost type="Horror" url={HorrorMovies} />
      <RowPost type="Action " url={ActionMovies} />
      <RowPost type="Romance" url={RomanceMovies} />
    </div>
  );
}
export default App;
