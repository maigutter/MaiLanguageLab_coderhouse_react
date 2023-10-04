import ItemListContainer from "../Components/ItemListContainer";
import PageTitle from "../Components/PageTitle";
import getCourses from "../CoursesArray";
import CardShop from "../Components/Card";

function CoursesShop() {
  return (
    <>
      <PageTitle title="Cursos" />
      <ItemListContainer greeting="You can find the different courses to buy here" />
      {getCourses.map((course) => (
        <CardShop
          Key={course.id}
          Name={course.title}
          Category={course.category}
          Description={course.description}
        />
      ))}
    </>
  );
}

export default CoursesShop;
