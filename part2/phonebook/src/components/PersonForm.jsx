const PersonForm = ({addNewInfo, newName, handleNewName, newNumber, handleNewNumber }) => {
    return (
      <form onSubmit={addNewInfo}>
        <div>
          name: <input required value={newName} onChange={handleNewName} />
        </div>
        <div>
          number: <input required value={newNumber} onChange={handleNewNumber} />
        </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
    )
  }

  export default PersonForm