import React, { useState } from 'react';

const SearchBar=(props)=>{

  

  /*const handleSubmit = event => {
    event.preventDefault();
    console.log(searchTerm, searchBy, searchType);
  };*/

  return (
    <form id="search-bar">
      <label >
        <span style={{color: "white"}}>Rechercher:</span>
        <input
          type="text"
          placeholder="Rechercher"
          value={props.searchTerm}
          onChange={props.handleSearchTermChange}
        />
      </label>
      <br />
      <label>
        Rechercher par:
        <select value={props.searchBy} onChange={props.handleSearchByChange}>
          <option value="firstname">firstname</option>
          <option value="lastname">lastname</option>
          <option value="city">city</option>
          <option value="country">country</option>
        </select>
      </label>
      <br />
      <label>
        Catégorie:
        <select value={props.searchType} onChange={props.handleSearchTypeChange}>
          <option value="Technique">Technique</option>
          <option value="Commercial">Commercial</option>
          <option value="Marketing">Marketing</option>
          <option value="Client">Client</option>
        </select>
      </label>
    </form>
  );
}

export default SearchBar;
