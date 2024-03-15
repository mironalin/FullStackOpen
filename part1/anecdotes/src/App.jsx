import { useState } from "react";

const Heading = ({ text }) => {
  return <h1>{text}</h1>;
};

const AnecdoteInfo = ({ anecdote, votes }) => {
  return (
    <div>
      <p>{anecdote}</p>
      <p>has {votes} votes</p>
    </div>
  );
};

const Button = ({ onClick, text }) => {
  return <button onClick={onClick}>{text}</button>;
};

const MostVotedAnecdote = ({ anecdotes, votes }) => {
  const maxVotes = Math.max(...votes);
  const indexOfMaxVoted = votes.indexOf(maxVotes);

  if (maxVotes == 0) {
    return <p>No votes yet</p>;
  }

  return (
    <AnecdoteInfo
      anecdote={anecdotes[indexOfMaxVoted]}
      votes={votes[indexOfMaxVoted]}
    />
  );
};

const App = () => {
  const anecdotes = [
    "If it hurts, do it more often.",
    "Adding manpower to a late software project makes it later!",
    "The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.",
    "Any fool can write code that a computer can understand. Good programmers write code that humans can understand.",
    "Premature optimization is the root of all evil.",
    "Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.",
    "Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients.",
    "The only way to go fast, is to go well.",
  ];

  const [selected, setSelected] = useState(0);
  const [votes, setVotes] = useState(Array(anecdotes.length).fill(0));

  const setToSelected = () => {
    const random = Math.floor(Math.random() * anecdotes.length);
    setSelected(random);
  };

  const setToVotes = () => {
    const updatedVotes = [...votes];
    updatedVotes[selected] += 1;
    setVotes(updatedVotes);
  };

  return (
    <>
      <Heading text="Anecdote of the day" />
      <AnecdoteInfo anecdote={anecdotes[selected]} votes={votes[selected]} />
      <Button onClick={setToVotes} text="vote" />
      <Button onClick={setToSelected} text="next anecdote" />
      <Heading text="Anecdote with most votes" />
      <MostVotedAnecdote anecdotes={anecdotes} votes={votes} />
    </>
  );
};

export default App;
