import React from "react";
import "./Header.css";
import { useState } from "react";

function Header(props) {
  const [search, setsearch] = useState("");

  function handleChange(event) {
    setsearch(event.target.value);
  }

  return (
    <header>
      <form
        id="form"
        onSubmit={(event) => {
          event.preventDefault();
          props.handleSubmit(search);
        }}
      >
        <input
          type="text"
          placeholder="Search"
          onChange={handleChange}
          name="search"
          className="search"
        />
      </form>
    </header>
  );
}
export default Header;
// onSubmit={handleSubmit}
