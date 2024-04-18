import { useState, useEffect } from 'react'
import SearchBar from './components/SearchBar'
import Results from './components/Results'
import countriesData from './services/countries.js'

function App() {
  const [search, setSearch] = useState('')
  const [countryList, setCountryList] = useState([])

  useEffect(() => {
    countriesData
      .getAll()
      .then(countries => {
        setCountryList(countries)
      })
  }, [])

  const onSearch = (event) => {
    setSearch(event.target.value)
  }


  return (
    <>
    <SearchBar onSearch={onSearch}/>
    <Results list={countryList} search={search}/>
    </>
  )
}

export default App
