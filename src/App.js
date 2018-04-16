import React, { Component } from 'react';
// import { Router, browserHistory, Route, Link } from 'react-router';
// import logo from './logo.svg';
import './App.css';
import Home from './components/home';
import About from './components/about';
import "typeface-oswald";

class Page extends Component { 
  render () {
    var title = this.props.title;
    var sectionClass = title.replace(/\s+/g, '-').toLowerCase();;
    return (
      <section className={sectionClass}>
        <div className="container">
          <h1>{title}</h1>
        </div>
      </section>
    )
  }
}


const Settings = (props) => (
  <Page title="Settings"/>
);

class App extends Component {
  render() {
    return (
      <div className="App">
        <Home />
        <About />
        <Settings />
      </div>
//       <Router history={browserHistory}>
//         <Route path="/" component={Home}/>
//         <Route path="/about" component={About}/>
//         <Route path="/settings" component={Settings}/>
//       </Router>
    );
  }
}

export default App;
