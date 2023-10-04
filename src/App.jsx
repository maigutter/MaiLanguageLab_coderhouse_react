import "./App.css";
import { BrowserRouter, Routes, Route, NavLink } from "react-router-dom";
import GeneralTitle from "./Components/GeneralTitle";
import ItemListContainer from "./Components/ItemListContainer";
import Navbar from "./Components/Navbar/Navbar";
import PageTitle from "./Components/PageTitle";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <GeneralTitle />
      <PageTitle title="Cursos" />
      <ItemListContainer greeting="You can find the different courses to buy here" />
      <Routes>
        <Route exact path="/" element={<h1>HOME</h1>} />
        <Route exact path="/pokemons" element={<Pokemons />} />
        <Route exact path="/pokemon/:pokemonName" element={<PokemonByName />} />

        <Route
          path="*"
          element={
            <h2>¡Lo sentimos! No pudimos encontrar lo que estás buscando.</h2>
          }
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
