const Total = ({ course }) => {
  const totalExercises = course.parts.reduce(
    (total, part) => total + part.exercises,
    0
  );

  return <h3>Total of {totalExercises} exercises</h3>;
};

export default Total;
