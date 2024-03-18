const Header = ({ header }) => <h1>{header}</h1>;

const Part = ({ name, exercises }) => (
  <li>
    {name} {exercises}
  </li>
);

const Content = ({ course }) => (
  <div>
    <ul>
      {course.map(({ name, exercises, id }) => {
        return <Part key={id} name={name} exercises={exercises} />;
      })}
    </ul>
  </div>
);

const Course = ({ course }) => {
  return (
    <div>
      <Header header={course.name} />
      <Content course={course.parts} />
    </div>
  );
};

export default Course;
