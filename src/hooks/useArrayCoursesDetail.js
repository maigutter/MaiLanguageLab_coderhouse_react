import { useEffect, useState } from "react";
import getArrayCourses from "../arrayFetching/ArrayCourses";

const useArrayCoursesDetail = (course) => {
  const [courseID, setCourseID] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getArrayCourses(course)
      .then((data) => data.json())
      .then((data) => setCourseID(data.CoursesArray.id))
      .finally(() => setLoading(false));
  }, [course]);

  return {
    courseID,
    loading,
  };
};

export default useArrayCoursesDetail;
