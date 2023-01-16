import { useState } from 'react'

const Header = (props) => {
  return (
      <h1>{props.text}</h1>
 )
}

const Button = (props) => {
  return (
    <button onClick={props.handleClick}>
      {props.text}
    </button>
  )

}

const StatisticLine = (props) => {
  return (
    <div>
      <table>
        <tbody>
          <tr>
            <td>{props.text}</td>
            <td>{props.value}</td>
          </tr>
        </tbody>
      </table>
    </div>
  )
}

const Stats = (props) => {
  const sum = props.good + props.bad + props.neutral
  if (sum === 0) {
    return (
      <div>
        No feedback given
      </div>
    )
  }
  return (
    <div>
      <StatisticLine text="good" value = {props.good} />
      <StatisticLine text="neutral" value = {props.neutral} />
      <StatisticLine text="bad" value = {props.bad} />
      <StatisticLine text="all" value = {sum} />
      <StatisticLine text="average" value = {(1*props.good + -1*props.bad) / sum}/>
      <StatisticLine text="positive" value = {props.good / sum*100 + " %"} />
    </div>
  )
}

const App = () => {
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  const handleGoodClick = () => {
    setGood(good+1)
  }

  const handleNeutralClick = () => {
    setNeutral(neutral+1)
  }

  const handleBadClick = () => {
    setBad(bad+1)
  }

  return (
    <div>
      <Header text="give feedback"/>
      <Button handleClick = {handleGoodClick} text = "good"
      />
      <Button handleClick={handleNeutralClick} text = "neutral"
      />
      <Button handleClick={handleBadClick} text = "bad" />
      <Header text= "statistics"/>
      <Stats good = {good} bad = {bad} neutral = {neutral} />
    </div>
  )
}

export default App