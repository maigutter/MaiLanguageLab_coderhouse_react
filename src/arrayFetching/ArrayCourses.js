//const ArrayCourses = "../public/ArrayCourses.json";

function getArrayCourses() {
  return fetch("../ArrayCourses.json");
}

export default getArrayCourses;

/*const getCourses = () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve();
    }, 1000);
  });
};

export default getCourses;

retrieveAsyncArray.then((CoursesArray) => {
  console.log(CoursesArray);
});*/
