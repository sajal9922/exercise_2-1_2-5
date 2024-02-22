import Header from './Header';
import Content from './Content';
import Total from './Total';
const Course = ({ course }) => {
  const [firstCourse, secondCourse] = course;
  // const totalFirstCourse = firstCourse.parts.reduce(
  //   (total, part) => total + part.exercises,
  //   0
  // );
  // const totalSecondCourse = secondCourse.parts.reduce(
  //   (total, part) => total + part.exercises,
  //   0
  // );
  return (
    <>
      <Header course={firstCourse} />
      <Content course={firstCourse} />
      {/* <h3>Total of {totalFirstCourse} exercises</h3> */}
      <Total course={firstCourse} />
      <Header course={secondCourse} />
      <Content course={secondCourse} />
      {/* <h3>Total of {totalFirstCourse} exercises</h3> */}
      <Total course={secondCourse} />
    </>
  );
};

export default Course;
