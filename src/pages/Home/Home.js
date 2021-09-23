import React from "react";
import Book from "components/Book";

import "./Home.css";

const Home = () => {
  return (
    <div>
      <header>
        <nav>
          <a href="/">Home</a>
        </nav>
      </header>
      <Book />
    </div>
  );
};

export default Home;
