const PersonForm = ({ addPerson, handleNameChange, HandleNumberChange }) => {
  return (
    <form onSubmit={addPerson}>
      <div>
        name: <input onChange={handleNameChange} />
      </div>
      <div>
        number: <input onChange={HandleNumberChange} />
      </div>
      <div>
        <p></p>
        <button type="submit">add</button>
      </div>
    </form>
  );
};

export default PersonForm;
