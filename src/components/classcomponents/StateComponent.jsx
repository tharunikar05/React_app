import React from 'react';
class StateComponent extends React.Component{
   constructor(){
    super()
    this.state= {
        name:"KEC"  ,                            
        course:"MERN"
    }
   }
 Changestate=()=>{
  console.log("Kongu Engineering College")//useState should be used when we come to hooks
 }
    render(){
 return(
    <div>
    <h1>This is my State Component</h1>
    <h2>Hello,{this.state.name}<br></br> This is again {this.state.course}</h2>
     <h3>I am changing the State of the {this.state.name} to {this.Changestate()}</h3>
    <button onMouseOver={this.Changestate}>Click me to change the state</button>
    </div>
 )
}
}
export default StateComponent;
//npm i react-router-dom