const Persons = ({ search, searchResults, persons }) => {
    return (
      <div>
        {search
          ? searchResults.map(results => <p key={results.name}>{results.name} {results.number}</p>)
          : persons.map(person => <p key={person.name}>{person.name} {person.number}</p>)}
      </div>
    )
  }

  export default Persons