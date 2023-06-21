import React from "react";
import "./homepage.css";
import Nav from "./nav";

function Home() {
  return (
    <section className="homepage-x">
      <Nav />

      <main>
        <section className="container">
          <section className="form-area">
            <h3>Find the care you need</h3>
            <form>
              <input type="text" placeholder="Enter your city" />
            </form>
          </section>

          <section className="right-side"></section>
        </section>
      </main>
    </section>
  );
}

export default Home;
