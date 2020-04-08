import React from 'react';


class Hello extends React.Component {
   constructor(props) {
       super(props)
       this.state = {
           who: 'world'
       }
   }

   changeState = e => {
       this.setState({
          who: e.target.value
       })
   }
   render() {
       
        return (

        <div>
            <p> Hello {this.state.who} </p>
            <button value = {'World'} onClick = {this.changeState}> World </button>
            <button value = {'Friend'} onClick = {this.changeState}> Friend </button>
            <button value = {'React'} onClick = {this.changeState}> React </button>

        </div>
)}
     
    
}

export default Hello;