import CourseCard from "../components/CourseCard";

export default function Courses() {
  const courses = [
    "React 18 Course 2025 - Learn React JS the fast way",
    "Vue - The Complete Guide (incl. Router & Composition API)",
    "OPEN A2 - Kurs do uprawnień A2",
  ];
  return (
    <div className="course-list">
      <h1>All my ended courses</h1>
      {courses.map((course) => (
        <CourseCard key={course} name={course} />
      ))}
    </div>
  );
}
