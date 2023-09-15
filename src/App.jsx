import "./App.css";
import GeneralTitle from "./Components/GeneralTitle";
import ItemListContainer from "./Components/ItemListContainer";
import Navbar from "./Components/Navbar/Navbar";
import PageTitle from "./Components/PageTitle";

function App() {
  return (
    <div className="app">
      <Navbar />
      <GeneralTitle />
      <PageTitle title="Cursos" />
      <ItemListContainer greeting="You can find the different courses to buy here" />
    </div>
  );
}

export default App;
