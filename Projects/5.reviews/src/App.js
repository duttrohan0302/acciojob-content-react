import React from "react";
import './App.css';
import './Generic-css.css';
import Reviews from "./Components/Reviews";

function App() {
  return (
    <main>
      <section className="container">
        <div className="title">
          <h2>Our Reviews</h2>
          <div className="underline"></div>
        </div>
        <Reviews />
      </section>
    </main>
  );
}

export default App;
