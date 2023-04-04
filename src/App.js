import React from 'react';
import './App.css';
import example1 from './resources/images/example1.png';
import logo from './resources/images/logo.jpeg';
const App = () => {
  return (
      <div className="App">
        <header className="App-header">

          <h1>  <img src={logo} height={64} width={64}/> Welcome to OSH!</h1>
          <h2>Introducing OSH - Your commandline copilot for an emergency</h2>
        </header>
        <section className="App-content">
          <p>
            Have you ever been stuck with a command-line error and didn't know what to do? OSH is here to help! OSH is short for 'Oh Shit' or 'Oh Shell,' a clever AI-powered tool designed to assist you when your command fails.
          </p>
          <p>
            With OSH, you can get immediate guidance and solutions to fix common errors in your command line. Our ChatGPT-based helper is here to make your command-line experience smoother and more efficient.
          </p>
          <h3>Features:</h3>
          <ul>
            <li>Instant help for common command-line errors</li>
            <li>AI-powered suggestions and guidance</li>
            <li>Easy integration with popular shells</li>
          </ul>
          <h3>Get started with OSH:</h3>
          <ol>
            <li>Download the OSH tool</li>
            <li>Follow the installation instructions</li>
            <li>Start using OSH to improve your command-line experience!</li>
          </ol>
            <div>
                <img src={example1} className={'exampleImg'}/>
            </div>
          <div className="cta">
            <button className="download-btn">Download OSH</button>
          </div>
        </section>
        <footer className="App-footer">
          <p>© 2023 GetOSH.com. All rights reserved.</p>
        </footer>
      </div>
  );
};

export default App;
