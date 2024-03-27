const Persons = ({ personsAfterFilter }) => {
  return (
    <div>
      {" "}
      {personsAfterFilter.map((person) => {
        return (
          <p key={person.id}>
            {person.name} {person.number}
          </p>
        );
      })}
    </div>
  );
};

export default Persons;
