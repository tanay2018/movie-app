import React from "react";
import "./Header.css";

function Header() {
  return (
    <header>
      <form id="form">
        <input
          type="text"
          placeholder="Search"
          //   onChange={handleChange}
          name="search"
          className="search"
        />
      </form>
    </header>
  );
}
export default Header;
