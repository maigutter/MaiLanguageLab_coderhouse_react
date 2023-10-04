import ItemListContainer from "../Components/ItemListContainer";
import PageTitle from "../Components/PageTitle";

function Home() {
  return (
    <>
      <PageTitle title="Welcome!" />
      <ItemListContainer greeting="Welcome to Mai Language Lab" />
    </>
  );
}

export default Home;
