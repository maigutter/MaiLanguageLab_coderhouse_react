import ItemListContainer from "../Components/ItemListContainer";
import PageTitle from "../Components/PageTitle";
import Button from "@mui/material/Button";
import { Link } from "react-router-dom";

function Home() {
  return (
    <>
      <PageTitle title="Welcome!" />
      <ItemListContainer greeting="Welcome to Mai Language Lab" />
      <div className="center">
        <Button variant="outlined" color="primary" size="large">
          <Link to={"/coursesShop"}>Go to shop</Link>
        </Button>
      </div>
    </>
  );
}

export default Home;
