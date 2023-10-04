import ItemListContainer from "../Components/ItemListContainer";
import PageTitle from "../Components/PageTitle";
import { useParams } from "react-router-dom";
import useArrayCoursesDetail from "../hooks/useArrayCoursesDetail";
import CardShopDetail from "../Components/CardDetail";

function CoursesDetail() {
  const { course } = useParams();
  const { courseID, loading } = useArrayCoursesDetail(course);

  if (loading) {
    return <h4>Loading...</h4>;
  }

  if (!courseID) {
    return <h3>Sorry! We can not find the course</h3>;
  }
  return (
    <>
      <PageTitle title="Detalle del Curso" />
      <ItemListContainer greeting="You can find the details of the course here" />
      <CardShopDetail
        key={course.id}
        id={course.id}
        Name={course.title}
        Category={course.category}
        Description={course.description}
      />
    </>
  );
}

export default CoursesDetail;
