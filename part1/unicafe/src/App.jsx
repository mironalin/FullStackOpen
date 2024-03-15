import { useState } from "react";

const Heading = ({ text }) => {
  return <h1>{text}</h1>;
};

const Button = ({ onClick, text }) => {
  return <button onClick={onClick}>{text}</button>;
};

const Display = ({ text, value }) => {
  return (
    <p>
      {text} {value}
    </p>
  );
};

const Average = ({ good, neutral, bad }) => {
  return <p>average {(good - bad) / (good + neutral + bad)}</p>;
};

const Positive = ({ good, count }) => {
  return <p>positive {(good / count) * 100} %</p>;
};

function App() {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  return (
    <div>
      <Heading text="give feedback" />
      <Button onClick={() => setGood(good + 1)} text="good" />
      <Button onClick={() => setNeutral(neutral + 1)} text="neutral" />
      <Button onClick={() => setBad(bad + 1)} text="bad" />
      <Heading text="statistics" />
      <Display text="good" value={good} />
      <Display text="neutral" value={neutral} />
      <Display text="bad" value={bad} />
      <Display text="all" value={good + neutral + bad} />
      <Average good={good} neutral={neutral} bad={bad} />
      <Positive good={good} count={good + neutral + bad} />
    </div>
  );
}

export default App;
