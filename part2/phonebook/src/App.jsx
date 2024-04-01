import { useEffect, useState } from "react";
import "./App.css";
import Filter from "./components/Filter";
import PersonForm from "./components/PersonForm";
import Persons from "./components/Persons";
import axios from "axios";

const App = () => {
  const [persons, setPersons] = useState([]);
  const [filter, setFilter] = useState("");

  const [newName, setNewName] = useState("");
  const [newNumber, setNewNumber] = useState("");

  const hook = () => {
    axios.get("http://localhost:3002/persons").then((response) => {
      setPersons(response.data);
    });
  };

  useEffect(hook, []);

  const addPerson = (event) => {
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

  const handleFilter = (event) => {
    setFilter(event.target.value);
  };

  const personsAfterFilter =
    filter === ""
      ? persons
      : persons.filter((person) =>
          person.name.toLowerCase().includes(filter.toLowerCase())
        );

  return (
    <div>
      <h2>Phonebook</h2>

      <Filter filter={filter} handleFilter={handleFilter} />

      <h2>add a new</h2>

      <PersonForm
        addPerson={addPerson}
        handleNameChange={handleNameChange}
        HandleNumberChange={HandleNumberChange}
      />

      <h2>Numbers</h2>

      <Persons personsAfterFilter={personsAfterFilter} />
    </div>
  );
};

export default App;
