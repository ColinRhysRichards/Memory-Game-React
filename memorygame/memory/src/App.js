// import React, { Component } from 'react';
// // import logo from './logo.svg';
// import './App.css';
// import './components/Nav/Nav';

import React from "react";
import Nav from "./components/Nav";
import Jumbotron from "./components/Jumbotron";
// import Grid from "./components/Grid";

const App = () => (
  <div className="container">
    <Nav />
    <Jumbotron />
    {/* <Grid/> */}
  </div>
);

// class App extends Component {

//   state = {
//     grid: [
//       {
//         name: "Image 1",
//         url: "https://www.yo.com/photos/eroiwjet",
//         clicked: false
//       },
//       {
//         name: "Image 1",
//         url: "https://www.yo.com/photos/eroiwjet",
//         clicked: false
//       },
//       {
//         name: "Image 1",
//         url: "https://www.yo.com/photos/eroiwjet",
//         clicked: false
//       }
//     ],
//     usersScore: 0,
//     name: "devyn"
//   }
 
//   clickImage = (imageObj, index) => {
//     if (!imageObj.clicked) {
//       let newGrid = this.state.grid;
//       newGrid[index].clicked = true;
//       this.setState({
//         grid: newGrid,
//         ...this.state
//       })
//     }
//   }
 
//   render() {
//     return (
//       <div className="App">
//         <Nav />
//         <div>Jumbotron</div>
//         <div>
//           {this.state.grid.map((imageObj, index) => (
//             <Image key={index} image={imageObj} onClick={() => this.clickImage(imageObj, index)} />
//           ))}
//         </div>
//       </div>
//     );
//   }
//  }

// class App extends Component {
//   render() {
//     return (
//       <div className="App">
//         <header className="App-header">
//           <img src={logo} className="App-logo" alt="logo" />
//           <h1 className="App-title">Welcome to React</h1>
//         </header>
//         <p className="App-intro">
//           To get started, edit <code>src/App.js</code> and save to reload.
//         </p>
//       </div>
//     );
//   }
// }

export default App;
