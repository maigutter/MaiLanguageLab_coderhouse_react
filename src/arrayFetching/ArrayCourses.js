const ArrayCourses = "ArrayCourses.json";

function getArrayCourses() {
  return fetch(ArrayCourses);
}

export default getArrayCourses;
