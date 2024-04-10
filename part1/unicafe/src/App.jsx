import { useState } from 'react'

const Section = ({text}) => <h1>{text}</h1>

const Button = ( {feedback, text} ) => <button onClick={feedback}>{text}</button>

const StatisticLine = ( {text, value} ) => {
  return (
    <tr>
      <td>{text}: </td>
      <td>{value}</td>
    </tr>
  )
}

const Statistics = ( {goodCount, neutralCount, badCount} ) => {
  const getTotal = () => goodCount + neutralCount + badCount
  const getAvg = () =>  ((goodCount - badCount)/ (goodCount + neutralCount + badCount)).toFixed(1)
  const getPositivePercentage = () => ((goodCount / getTotal()) * 100).toFixed(1)
  
  if (getTotal() == 0) {
    return (<p>No Feedback Given</p>)
  } else {
    return (
      <table>
        <tbody>
          <StatisticLine text='good' value={goodCount}/>
          <StatisticLine text='neutral' value={neutralCount}/>
          <StatisticLine text='bad' value={badCount}/>
          <StatisticLine text='all' value={getTotal()}/>
          <StatisticLine text='average' value={getAvg()}/>
          <StatisticLine text='positive' value={getPositivePercentage() + `%`}/>
        </tbody>
      </table>
    )
  }
}

const App = () => {
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  const onGood = () => {
    setGood(good + 1)
  }
  const onNeutral = () => {
    setNeutral(neutral + 1)
  }
  const onBad = () => {
    setBad(bad + 1)
  }

  return (
    <>
      <Section text="Give Feedback" />
      <Button feedback={onGood} text='good' />
      <Button feedback={onNeutral} text='neutral' />
      <Button feedback={onBad} text='bad' />
      <Section text="Statistics" />
      <Statistics goodCount={good} neutralCount={neutral} badCount={bad}/>
    </>
  )
}

export default App