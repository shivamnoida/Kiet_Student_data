import React from 'react';
import './Home.css';
import Navbar from '../header/Navbar';

function App() {
  return (
    <div className="App">
        <Navbar/>
      <header className="App-header">
        <div className="logo"><img src='data:image/jpeg;base64,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' /></div>
        {/* <button className="get-started"></button> */}
      </header>
      <main>
        <section className="hero">
          <div className="hero-text">
            <h1>TO GET DATA !</h1>
            <p>
              Far far away, behind the word mountains, far from the countries
              Vokalia and Consonantia, there live the blind texts.
            </p>
            <button className="get-in-touch">Get in Touch</button>
          </div>
          <div className="hero-image">
            <img src="https://media.istockphoto.com/id/480952865/photo/graduating-class.jpg?s=612x612&w=0&k=20&c=CrKZsKaSiyvn96yrlJ2QurlC9ZQ_1b5Y-hIfuOP7kdY=" alt="Hero Illustration" />
          </div>
        </section>
        <section className="domain-search">
          <h2>Search Your  Name</h2>
          <p>
            A small river named Duden flows by their place and supplies it with the necessary regelialia.
          </p>
          <div className="search-bar">
            <input type="text" placeholder="Enter your name..." />
           
            <button className="search-button">Search</button>
          </div>
          <div className="domain-pricing">
           
          </div>
        </section>
      </main>
      <footer>
        {/* Footer content */}
      </footer>
    </div>
  );
}

export default App;
