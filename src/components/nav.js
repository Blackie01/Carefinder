import React from "react";
import './nav.css'

function Nav() {
  return (
    <section className="overall-nav-container">
      <section>CareFinder</section>

      <section className="nav-mid-section">
        <p>Prescription Laws</p>
        <p>Right to Health</p>
        <p>How to use CareFinder</p>
      </section>

      <section className="signin-button">
        <div>Sign in</div>
      </section>
    </section>
  );
}

export default Nav;
