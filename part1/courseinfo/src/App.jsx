const Header = (header) => {
  return (
    <h1>{header.course.name}</h1>
  )
}

const Part = (part) => {
  return (
    <p>{part.name} {part.exercises}</p>
  )
}

const Content = (content) => {
  return (
    <>
      <Part name={content.course.parts[0].name} exercises={content.course.parts[0].exercises} />
      <Part name={content.course.parts[1].name} exercises={content.course.parts[1].exercises} />
      <Part name={content.course.parts[2].name} exercises={content.course.parts[2].exercises} />
    </>
  )
}

const Total = (number) => {
  return (
    <p>Number of exercises {number.course.parts[0].exercises + number.course.parts[1].exercises + number.course.parts[2].exercises}</p>
  )
}

const App = () => {
  const course = {
    name: 'Half Stack application development',
    parts: [
      {
        name: 'Fundamentals of React',
        exercises: 10
      },
      {
        name: 'Using props to pass data',
        exercises: 7
      },
      {
        name: 'State of a component',
        exercises: 14
      }
    ]
  }

  return (
    <>
      <Header course={course} />
      <Content course={course} />
      <Total course={course} />
    </>
  )
}

export default App