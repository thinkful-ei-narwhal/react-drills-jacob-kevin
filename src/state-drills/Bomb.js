import React from 'react';

class Bomb extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0
    }
  }

  componentDidMount() {
    this.interval = setInterval(() => {
      if (this.state.count <= 8) {
        this.setState({
          count: this.state.count + 1
        })
      } else {
        clearInterval(this.interval)
      }
    }, 1000)
  }



  componentWillUnmount() {
    clearInterval(this.interval)
    this.setState({
      count: this.interval
    })
  }

  clock() {
      if (this.state.count >= 8) {
        return 'Boom!';
      } else if (this.state.count % 2 === 0) {
        return 'tick';
      } else {
        return 'tock';
      }
    }

  render() {
    console.log(this.state.count);
    return (
      <div>
        <p>{this.clock()}</p>
      </div>
    )
  }
}

export default Bomb