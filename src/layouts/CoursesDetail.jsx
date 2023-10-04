import ItemListContainer from "./Components/ItemListContainer";
import PageTitle from "./Components/PageTitle";

function CoursesDetail() {
  return (
    <>
      <PageTitle title="Detalle del Curso" />
      <ItemListContainer greeting="You can find the details of the course here" />
    </>
  );
}

export default CoursesDetail;
