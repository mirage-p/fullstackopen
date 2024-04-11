import { useState } from 'react'
import Filter from './components/Filter'
import PersonForm from './components/PersonForm'
import Persons from './components/Persons'

const App = () => {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas', number: '040-123456', id: 1 },
    { name: 'Ada Lovelace', number: '39-44-5323523', id: 2 },
    { name: 'Dan Abramov', number: '12-43-234345', id: 3 },
    { name: 'Mary Poppendieck', number: '39-23-6423122', id: 4 }
  ])

  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')
  const [search, setSearch] = useState('')

  const handleNewName = (event) => setNewName(event.target.value)

  const handleNewNumber = (event) => setNewNumber(event.target.value)

  const addNewInfo = (event) => {
    event.preventDefault()

    if (persons.some((existing) => existing.name == newName)) {
      setNewName('')
      setNewNumber('')
      window.alert(`${newName} is already added to phonebook`)
    } else {
      const personObject = {
        name: newName,
        number: newNumber
      }

      setPersons(persons.concat(personObject))
      setNewName('')
      setNewNumber('')
    }
  }

  const handleSearch = (event) => setSearch(event.target.value)

  const searchResults = persons.filter(person => person.name.toLowerCase().includes(search.toLowerCase()))

  return (
    <div>
      <h2>Phonebook</h2>

      <Filter search={search} handleSearch={handleSearch} />

      <h2>add a new</h2>

      <PersonForm addNewInfo={addNewInfo}
        newName={newName} handleNewName={handleNewName}
        newNumber={newNumber} handleNewNumber={handleNewNumber}
      />

      <h2>Numbers</h2>

      <Persons search={search} searchResults={searchResults} persons={persons} />
    </div>
  )
}

export default App