const Header = (props) => {
  return (
    <div>
      <h1>
        {props.name}
      </h1>
    </div>
  )
}

const Part = ({part, exercises}) => {
  return (
    <div>
      <p>
        {part} {exercises}
      </p>
    </div>
  )
}

const Content = (props) => {
  return (
    <div>
      <Part part={props.part1.name} exercises={props.part1.exercises}/>
      <Part part={props.part2.name} exercises={props.part2.exercises}/>
      <Part part={props.part3.name} exercises={props.part3.exercises}/>
    </div>
  )
}

const Total = (props) => {
  const totalExercises = props.part1.exercises + props.part2.exercises + props.part3.exercises
  return (
    <div>
    <p>
      Number of exercises {totalExercises}
    </p>
  </div>
  )
}

const App = () => {
  // PART 1.2
  // const course = {
    // name: 'Half Stack application development',
    // parts: [
      // {
        // name: 'Fundamentals of React',
        // exercises: 10
      // },
      // {
        // name: 'Using props to pass data',
        // exercises: 7
      // },
      // {
        // name: 'State of a component',
        // exercises: 14
      // }
  //   // ]
  // }
  // PART 1.3
  const course = 'Half Stack application development'
  const part1 = {
    name: 'Fundamentals of React',
    exercises: 10
  }
  const part2 = {
    name: 'Using props to pass data',
    exercises: 7
  }
  const part3 = {
    name: 'State of a component',
    exercises: 14
  }

  return (
    <div>
      {/* PART 1.2 */}
      {/* <Header name = {course.name} /> */}
      {/* <Content parts = {course.parts} /> */}
      {/* <Total parts = {course.parts}/> */}

    {/* PART 1.3 */}
    <Header name = {course} />
    <Content part1 = {part1} part2 = {part2} part3 = {part3} />
    <Total part1 = {part1} part2 = {part2} part3 = {part3} />

    </div>
  )
}

export default App