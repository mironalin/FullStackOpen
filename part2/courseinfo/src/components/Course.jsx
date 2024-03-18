const Header = ({ header }) => <h2>{header}</h2>;

const Total = ({ course }) => {
  const total = course.reduce(
    (totalPoints, part) => totalPoints + part.exercises,
    0
  );

  return <strong>total of {total} exercises</strong>;
};

const Part = ({ name, exercises }) => (
  <p>
    {name} {exercises}
  </p>
);

const Content = ({ course }) => (
  <div>
    {course.map(({ name, exercises, id }) => {
      return <Part key={id} name={name} exercises={exercises} />;
    })}
  </div>
);

const Course = ({ course }) => {
  return (
    <div>
      <Header header={course.name} />
      <Content course={course.parts} />
      <Total course={course.parts} />
    </div>
  );
};

export default Course;
