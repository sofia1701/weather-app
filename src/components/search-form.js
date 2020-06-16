import React from 'react';
import '../styles/search-form.css'

const SearchForm = props => {
  const handleInputChange = (event) => {
    props.setSearchText(event.target.value)
  }
  
  return (
    <div className='search-form'>
      <input 
        type="text" 
        placeholder="Search for city.."
        onChange={handleInputChange}
        value={props.searchText}
      />
      <button onClick={() => props.onSearch(props.searchText)}>Search</button>
    </div>
  )
}

export default SearchForm;