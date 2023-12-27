import React, { useState } from 'react';

const Button = (props) => {
  return (
    <button onClick={props.onClick}>{props.text}</button>
  );
};

const StatisticLine = ({ text, value }) => {
  return (
    <tr>
      <td>{text}</td>
      <td>{value}</td>
    </tr>
  );
};

const Statistics = ({ good, bad, neutral }) => {
  if (good + bad + neutral === 0) {
    return (
      <p>No feedback given</p>
    );
  }
  
  return (
    <table>
      <tbody>
        <StatisticLine text="good" value={good} />
        <StatisticLine text="neutral" value={neutral} />
        <StatisticLine text="bad" value={bad} />
        <StatisticLine text="all" value={good + bad + neutral} />
        <StatisticLine text="average" value={(good - bad) / (good + bad + neutral)} />
        <StatisticLine text="positive" value={`${((good / (good + bad + neutral)) * 100).toFixed(2)} %`} />
      </tbody>
    </table>
  );
};

const App = () => {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const goodClick = () => setGood(good + 1);
  const neutralClick = () => setNeutral(neutral + 1);
  const badClick = () => setBad(bad + 1);

  return (
    <div>
      <h1>give feedback</h1>
      <Button onClick={goodClick} text="good" />
      <Button onClick={neutralClick} text="neutral" />
      <Button onClick={badClick} text="bad" />
      <h1>statistics</h1>
      <Statistics good={good} bad={bad} neutral={neutral} />
    </div>
  );
};

export default App;
