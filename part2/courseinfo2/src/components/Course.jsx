const Part = ({ name, exercises }) => {
    return (
      <p>{name} {exercises}</p>
    )
  }
  
  const Total = ({ parts }) => {
    const exercises = parts.map(part => part.exercises)
    return (
      <p><strong>total of {exercises.reduce((tally, value) => tally + value, 0)} exercises</strong></p>
    )
  }
  
  const Content = ({ parts }) => {
    return (
      <>
        {parts.map(part =>
          <Part key={part.id} name={part.name} exercises={part.exercises} />
        )}
        <Total parts={parts} />
      </>
    )
  }
  
  const Header = ({ name }) => {
    return (
      <h1>{name}</h1>
    )
  }
  
  const Course = ({ course }) => {
    //Conditional Rendering so if courses don't have any parts a message indicates that
    if (course.parts == undefined || course.parts.length == 0) {
      return (
        <>
          <Header name={course.name} />
          <p>No Parts Available</p>
        </>
      )
    } else {
      return (
        <>
          <Header name={course.name} />
          <Content parts={course.parts} />
        </>
      )
    }
  }

  export default Course