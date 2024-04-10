import { useState } from 'react'

const Header = ({text}) => <h1>{text}</h1>

const Display = ({text}) => <p>{text}</p>

const Votes = ({votes, quoteIndex}) => {
  return (
    <p>Has {votes[quoteIndex]} Votes</p>
  )
}

const Button = ({onAction, text}) => {
  return (
    <button onClick={onAction}>{text}</button>
  )
}

const App = () => {
  const anecdotes = [
    'If it hurts, do it more often.',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
    'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients.',
    'The only way to go fast, is to go well.'
  ]
   
  const [selected, setSelected] = useState(0)
  const [votes, setVotes] = useState(new Array(8).fill(0))

  const onGetQuote = () => {
    let rng = Math.floor(Math.random() * anecdotes.length)
    setSelected(rng)
  }

  const onVote = () => {
    const copyVotes = [...votes]
    copyVotes[selected] += 1
    setVotes(copyVotes)
  }

  const largestIndex = votes.indexOf(Math.max(...votes))

  return (
    <>
      <div>
        <Header text='Anectdote of the Day' />
        <Display text={anecdotes[selected]} />
        <Votes votes={votes} quoteIndex={selected}/>
        <Button onAction={onGetQuote} text='Generate Quote' />
        <Button onAction={onVote} text='Vote' />
      </div>
      <div>
        <Header text='Anectdote with the Most Votes' />
        <Display text={anecdotes[largestIndex]} />
        <Votes votes={votes} quoteIndex={largestIndex}/>
      </div>
    </>
  )
}

export default App