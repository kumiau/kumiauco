import React, { Component } from 'react';
// import { Router, browserHistory, Route, Link } from 'react-router';
// import logo from './logo.svg';
import './App.css';
import Home from './components/home';
import About from './components/about';
import Portfolio from './components/portfolio';
import "typeface-oswald";
import "typeface-slabo-27px";
// import styled from 'styled-components';

// const Section = styled.section`
//   color: ${props => props.theme.fontColor}
// `
// 
// class Page extends Component { 
//   render () {
//     var title = this.props.title;
//     var sectionClass = title.replace(/\s+/g, '-').toLowerCase();;
//     return (
//       <Section className={sectionClass}>
//         <div className="container">
//           <h1>{title}</h1>
//         </div>
//       </Section>
//     )
//   }
// }

class App extends Component {
  render() {
    return (
      <div className="App">
        <Home />
        <About />
        <Portfolio />
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
