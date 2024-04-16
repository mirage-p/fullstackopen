import { useState, useEffect } from 'react'
import contactServices from './services/contact'
import Filter from './components/Filter'
import PersonForm from './components/PersonForm'
import Persons from './components/Persons'

const App = () => {
  const [persons, setPersons] = useState([])
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')
  const [search, setSearch] = useState('')

  useEffect(() => {
    contactServices
      .getAll()
      .then(contacts => {
        setPersons(contacts)
      })
  }, [])

  const addNewInfo = (event) => {
    event.preventDefault()

    if (persons.some((existing) => existing.name.toLowerCase() === newName.toLowerCase())) {
      if (confirm(`${newName} is already added to phonebook, replace the old number with a new one?`)) {
        const person = persons.find(person => person.name.toLowerCase() === newName.toLowerCase())
        const changedPerson = {...person, number: newNumber}

        contactServices
          .update(changedPerson.id, changedPerson)
          .then(returnedPerson => {
            setPersons(persons.map(person => person.id !== changedPerson.id ? person : returnedPerson))
          })
      }
    } else {
      const personObject = {
        name: newName,
        number: newNumber
      }
      contactServices
        .create(personObject)
        .then(returnedPersons => {
          setPersons(persons.concat(returnedPersons))
        })
    }
    setNewName('')
    setNewNumber('')
  }

  const deletePersons = (name, id) => {
    if (confirm(`Delete ${name}?`)) {
      contactServices
        .deleteContact(id)
        .then(
          setPersons(persons.filter(person => person.id !== id))
        )
    }
  }

  const handleNewName = (event) => setNewName(event.target.value)

  const handleNewNumber = (event) => setNewNumber(event.target.value)

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

      <Persons search={search} searchResults={searchResults} persons={persons} deletePersons={deletePersons}/>
    </div>
  )
}

export default App