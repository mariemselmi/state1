import React, {useState, useEffect, useRef} from 'react';
import './App.css';
import pfp from './pfp.png';

class Person extends React.Component {
    state={ fullName: 'Mariem Selmi', bio: '21/12/2004', imgSrc: pfp, profession: 'student', show: true, timeStamp: 0}
    handleClick=()=>this.setState({show:!this.state.show})
    

  render(){
    
    return(
    <>
     {this.state.show && ( <> <h1> {this.state.fullName}</h1>
       <h1>{this.state.bio}</h1>
       <img src={this.state.imgSrc}/>
       <h1>{this.state.profession}</h1> 
       <h1>{this.state.timeStamp}</h1>
       </>) }
       <button onClick={()=>{this.handleClick()}}> Click Me </button>
    </>
      )
    
  }
}
 export default Person;