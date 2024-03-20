import { useState } from "react";
import "./App.css";

const App = () => {
  const [persons, setPersons] = useState([
    { name: "Arto Hellas", number: "040-123456", id: 1 },
    { name: "Ada Lovelace", number: "39-44-5323523", id: 2 },
    { name: "Dan Abramov", number: "12-43-234345", id: 3 },
    { name: "Mary Poppendieck", number: "39-23-6423122", id: 4 },
  ]);
  const [newName, setNewName] = useState("");

  const [newNumber, setNewNumber] = useState("");

  const addName = (event) => {
    const id = persons.length + 1;
    event.preventDefault();
    const nameObject = {
      name: newName,
      number: newNumber,
      id: id,
    };

    if (persons.some((person) => person.name === nameObject.name)) {
      alert(`${newName} is already added to phonebook`);
    } else {
      setPersons(persons.concat(nameObject));
    }
  };

  const addNumber = (event) => {
    event.preventDefault();
    const numberObject = {
      number: newNumber,
    };

    setNumbers(numbers.concat(numberObject));
  };

  const handleNameChange = (event) => {
    setNewName(event.target.value);
  };

  const HandleNumberChange = (event) => {
    setNewNumber(event.target.value);
  };

  return (
    <div>
      <h2>Phonebook</h2>
      {/* <div>debug: {newName}</div> */}

      <form onSubmit={addName}>
        <h2>add a new</h2>
        <div>
          name: <input onChange={handleNameChange} />
        </div>
        <div>
          number: <input onChange={HandleNumberChange} />
        </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
      <h2>Numbers</h2>
      <div>
        {" "}
        {persons.map((person) => {
          return (
            <p key={person.id}>
              {person.name} {person.number}
            </p>
          );
        })}
      </div>
      <div></div>
    </div>
  );
};

export default App;
