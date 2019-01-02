// import React from 'react';
// import ReactDOM from 'react-dom';
// import './index.css';
// import App from './App';
// import * as serviceWorker from './serviceWorker';

// // ReactDOM.render(<App />, document.getElementById('root'));

// // // If you want your app to work offline and load faster, you can change
// // // unregister() to register() below. Note this comes with some pitfalls.
// // // Learn more about service workers: http://bit.ly/CRA-PWA
// // serviceWorker.unregister();

import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import logo from './logo.svg';
import './App.css';
import {Header} from './components/header';
class App extends Component {
  render() {
    return (
      <div className="App container-fluid">
      <div className="row">
      <div className="col-md-12 col-sm-6 col-lg-6">
      <Header/>
      </div>
      </div>
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>Hello this is Gagan Gaur.</p>
          <a
            className="App-link"
            href="https://github.com/gagangaur"
            target="_blank"
            rel="noopener noreferrer"
          >
            My Github Link
          </a>
        </header>
      </div>
    );
  }
}
ReactDOM.render(<App />, document.getElementById('root'));

// export default App;
class Application extends Component{
  render(){
    return(
      <div className="App">
      <header className="App-header">
      <img src={logo} className="App-logo" alt="logo" />
      <p> Hello world this is beautiful to write the code in <code>react.js</code></p>
      </header>
      </div>
    );
  }
}
ReactDOM.render(<Application />,document.getElementById('rootni'));