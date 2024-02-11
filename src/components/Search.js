import React, { useState } from 'react'

const Search = (props) => {

  const [searchBox, setSearchBox] = useState('');

  return (
    <section className="search-box-container">
            
            <form action="" className="grid grid-col-1">
                <input placeholder="Enter Movie Title" className="form-control" type="text" id="filter"
                value={searchBox} 
                onChange={(e) => {
                  
                  setSearchBox(e.target.value);
                  props.onFilter(e.target.value);
                }}/>
            </form>
    
        </section>
  )
}

export default Search