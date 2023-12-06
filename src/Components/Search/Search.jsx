import React from "react";
import "./search.css";
const Search = () => {
  return (
    <section className="search">
      <div className="searchDiv">
        <div className="inputDiv flex">
          <input className="input" type="text" placeholder="Tìm kiếm....." />
        </div>
        <button className="btn flex" type="submit">
          <a href="#">Tìm kiếm</a>
        </button>
      </div>
    </section>
  );
};

export default Search;
