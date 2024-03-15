import { useState } from "react";

const Button = ({ onClick, text }) => {
  return <button onClick={onClick}>{text}</button>;
};

const Display = ({ grade, value }) => {
  return (
    <p>
      {grade} {value}
    </p>
  );
};

function App() {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  return (
    <div>
      <h1>give feedback</h1>
      <Button onClick={() => setGood(good + 1)} text="good" />
      <Button onClick={() => setNeutral(neutral + 1)} text="neutral" />
      <Button onClick={() => setBad(bad + 1)} text="bad" />
      <h1>statistics</h1>
      <Display grade="good" value={good} />
      <Display grade="neutral" value={neutral} />
      <Display grade="bad" value={bad} />
    </div>
  );
}

export default App;
