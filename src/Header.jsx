import React from "react";
import Search from "./Search";

function Header({ onSearch }) {
  return (
    <header>
      <h1>
        <span className="logo" role="img">
          🎭
        </span>
        The Character Clinic
      </h1>
      <Search onSearch={onSearch} />
    </header>
  );
}

export default Header;
