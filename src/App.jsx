import "./App.css";
import GeneralTitle from "./Components/GeneralTitle";
import Navbar from "./Components/Navbar/Navbar";
import PageTitle from "./Components/PageTitle";

function App() {
  return (
    <div className="app">
      <Navbar />
      <GeneralTitle />
      <PageTitle title="Cursos" />
    </div>
  );
}

export default App;
