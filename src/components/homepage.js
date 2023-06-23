import React from "react";
import "./homepage.css";
import Nav from "./nav";
import homeDoctor from '../components/assets/home-doctor.png'
import caduceus from '../components/assets/caduceus.png'

function Home({ getInput, fixInput }) {
  return (
    <section className="homepage-x">
      <Nav />

      <main>
        <section className="container">
          <section className="form-area">
            <h3>Find the care you need.</h3>
            <form>
              <input 
              type="text" 
              placeholder="Enter your city" 
              onChange={getInput}
              />

              <input onSubmit={fixInput} type="submit"/>
            </form>
          </section>

          <section className="right-side">
            <img src={homeDoctor}/>
          </section>
        </section>
      </main>
    </section>
  );
}

export default Home;
