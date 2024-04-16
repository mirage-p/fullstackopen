const Persons = ({ search, searchResults, persons, deletePersons }) => {
  return (
    <div>
      {search
        ? searchResults
          .map(results =>
            <p key={results.name}>
              {results.name} {results.number} <button onClick={() => deletePersons(results.name, results.id)}>delete</button>
            </p>
          )
        : persons
          .map(person =>
            <p key={person.name}>
              {person.name} {person.number} <button onClick={() => deletePersons(person.name, person.id)}>delete</button>
            </p>
          )
      }

    </div>
  )
}

export default Persons