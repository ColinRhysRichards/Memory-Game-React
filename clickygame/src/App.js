import React, { Component } from 'react';
import Nav from './components/Nav/Nav';
import Image from './components/Image/Image';
import Grid from './components/Grid/Grid';
import Jumbotron from './components/Jumbotron/Jumbotron';

import './App.css';

class App extends Component {

 state = {
   grid: [
     {
       name: "Image 1",
       url: "https://www.yo.com/photos/eroiwjet",
       clicked: false
     },
     {
       name: "Image 1",
       url: "https://www.yo.com/photos/eroiwjet",
       clicked: false
     },
     {
       name: "Image 1",
       url: "https://www.yo.com/photos/eroiwjet",
       clicked: false
     },
     {
      name: "Image 1",
      url: "https://www.yo.com/photos/eroiwjet",
      clicked: false
    },
    {
      name: "Image 1",
      url: "https://www.yo.com/photos/eroiwjet",
      clicked: false
    },
    {
      name: "Image 1",
      url: "https://www.yo.com/photos/eroiwjet",
      clicked: false
    },
    {
      name: "Image 1",
      url: "https://www.yo.com/photos/eroiwjet",
      clicked: false
    },
    {
      name: "Image 1",
      url: "https://www.yo.com/photos/eroiwjet",
      clicked: false
    },
    {
      name: "Image 1",
      url: "https://www.yo.com/photos/eroiwjet",
      clicked: false
    },
    {
      name: "Image 1",
      url: "https://www.yo.com/photos/eroiwjet",
      clicked: false
    },
    {
      name: "Image 1",
      url: "https://www.yo.com/photos/eroiwjet",
      clicked: false
    },
    {
      name: "Image 1",
      url: "https://www.yo.com/photos/eroiwjet",
      clicked: false
    }
   ],
   usersScore: 0,
   name: "devyn"
 }

 clickImage = (imageObj, index) => {
   if (!imageObj.clicked) {
     let newGrid = this.state.grid;
     newGrid[index].clicked = true;
     this.setState({
       grid: newGrid,
       ...this.state
     })
   }
 }

 render() {
   return (
     <div className="App">
       <Nav />
       <div>Jumbotron</div>
       <div>
         {this.state.grid.map((imageObj, index) => (
           <Image key={index} image={imageObj} onClick={() => this.clickImage(imageObj, index)} />
         ))}
       </div>
     </div>
   );
 }
}

export default App;