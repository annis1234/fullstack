import { useState } from 'react'

const Button = (props) => {
  return(
    <button onClick= {props.handleClick}>
      {props.text}
    </button>
  )
}

const Votes = (props) => {
  return(
    <div>
      has {props.votes} votes
    </div>
  )
}

const Header = (props) => {
  return(
    <div>
      <h1>{props.text}</h1>
    </div>
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
    'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when dianosing patients.',
    'The only way to go fast, is to go well.'
  ]
   
  const [selected, setSelected] = useState(0)

  const [points, setPoints] = useState(new Uint8Array(8))

  let max = Math.max(...points)

  const handleNextClick = () => {
    setSelected(Math.floor(Math.random()*8))
  }

  const handleVoteClick = () => { 
    const copy = [...points]
    copy[selected] += 1
    setPoints(copy)
  }

  return (
    <div>
      <Header text = "Anecdote of the day"/>
      {anecdotes[selected]}
      <Votes votes = {points[selected]}/>
      <Button handleClick = {handleVoteClick} text = "vote" />
      <Button handleClick = {handleNextClick} text = "next anecdote" />
      <Header text = "Anecdote with most votes"/>
      {anecdotes[points.indexOf(max)]}
      <Votes votes = {max} />
    </div>
    
  )
}

export default App