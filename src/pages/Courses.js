import CourseCard from "../components/CourseCard";
import { useContext } from "react";
import { LanguageContext } from "../Context/LanguageContext";

export default function Courses() {
  const { languageData } = useContext(LanguageContext);
  const courses = [
    "React 18 Course 2025 - Learn React JS the fast way",
    "Vue - The Complete Guide (incl. Router & Composition API)",
    "OPEN A2 - Kurs do uprawnień na drony A2",
  ];
  return (
    <div className="course-list">
      <h1>{languageData.course_header}</h1>
      {courses.map((course) => (
        <CourseCard key={course} name={course} />
      ))}
    </div>
  );
}
