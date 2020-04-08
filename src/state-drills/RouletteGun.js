import React from 'react';

class RouletteGun extends React.Component {


    constructor(props) {
        super(props);
        this.state = {
          spinningTheChamber: false,
          chamber: null
        }
      }


      triggerPull = () => {
        this.setState({
            spinningTheChamber: !this.state.spinningTheChamber
        })
         setTimeout(() =>
            this.setState({
            spinningTheChamber: !this.state.spinningTheChamber,
            chamber: Math.ceil(Math.random() * 8)
        }) , 2000)
      }
   
    result() {
        console.log(this.state.chamber)
        console.log(this.props.bulletInChamber)
        if(this.state.spinningTheChamber) {
            return 'spinning the chamber and pulling the trigger'
        }
        else if(this.state.chamber === this.props.bulletInChamber) {
            return 'BANG!!!'
        }

        else {
            return 'You are safe!!'
        }
    }

    render() {
    
        // console.log(this.state.spinningTheChamber)
        return (
            <div>
                <p>{this.result()}</p>
                <button onClick = {this.triggerPull}> Pull the trigger </button>
            </div>
        )
    }
  


}




export default RouletteGun;