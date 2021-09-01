// import React, { Component } from 'react';
// import "./App.css";
// import Nav from './Nav';

// class App extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       theme: "light"
//     }

//     this.toggleTheme = this.toggleTheme.bind(this)
//   }

//   toggleTheme() {
//     const theme = this.state.theme === "light" ? "dark" : "light";
//     const tmp=document.getElementById("themeButton");

//     if(theme==="light"){
//       tmp.className="btn btn-dark btn-lg text-white"
//     }
//     else{
//       tmp.className="btn btn-light btn-lg text-black"
//     }

//     this.setState({theme})
//   }

//   render() {
//     return (
//       <div className ={`${this.state.theme}-theme`}>
//         <Nav/>
//         <div className="container text-center changeThemeContainer">
//           <h1>Welcome</h1>
//           <p>Click the button to change theme</p>
//           <button id="themeButton" className="btn btn-dark btn-lg text-white"
//            onClick={this.toggleTheme}>Change theme</button>

//            <br/><br/><br/><br/>

//         </div>
//       </div>
//     );
//   }

// }

// export default App;

import { HelloMsg } from './HelloMsg'

import React, { Component } from 'react'
import Display from './Display';
import { bookData } from './Data.js'
import Nav from './Nav';
import Animal from './Animal';

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      text: undefined,
    }
  }
  render() {
    const details = [
      { name: "Tiger", number: 800, endangered: true, age: 87 },
      { name: "Lion", number: 800, endangered: true, age: 87 },
      { name: "Dog", number: 800, endangered: true, age: 87 },
      { name: "Cat", number: 800, endangered: true, age: 87 },
      { name: "Panda", number: 800, endangered: true, age: 87 },
    ];

    return (
      <div>
        {/* <Animal details={details}>
          <h1>Endangered Animal</h1>
        </Animal> */}

        <Display bookData={bookData} />
      </div>
    )
  }

}
