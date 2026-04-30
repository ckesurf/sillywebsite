import React, { useState } from "react";

function Search({ onSearch }) {
  const [search, setSearch] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    onSearch(search);
  }

  function handleChange(e) {
    setSearch(e.target.value)
    console.log(search)
    onSearch(search)
  }

  return (
    <form className="searchbar" onSubmit={handleSubmit} >
      <input
        type="text"
        id="search"
        placeholder="search free stuff"
        value={search}
        onChange={(e) => handleChange(e)}
      />
      <button type="submit">🔍</button>
    </form>
  );
}

export default Search;
