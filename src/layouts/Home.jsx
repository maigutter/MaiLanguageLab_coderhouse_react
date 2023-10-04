import ItemListContainer from "./Components/ItemListContainer";
import PageTitle from "./Components/PageTitle";

function Home() {
  return (
    <>
      <PageTitle title="Cursos" />
      <ItemListContainer greeting="You can find the different courses to buy here" />
    </>
  );
}

export default Home;
