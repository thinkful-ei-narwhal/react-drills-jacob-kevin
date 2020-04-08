import React from 'react'

class Accordion extends React.Component{
  
  constructor(props) {
    super(props);
    this.state = {
      isOpen: false
    }
  };

handleClick = () => {
  this.setState({
    isOpen: !this.state.isOpen
  });
};

  render () {
    console.log(this.props.key);
    console.log(this.props.title)
    return (
      <li>
        <button type='button' onClick={this.handleClick}>{this.props.title}</button>
        {this.state.isOpen && <div>{this.props.content}</div>}
      </li>
    )
  }
};


// render(props) {
//   let listElements = props.items.map(item => <GenerateListElements key={item.it} title={item.title} content={item.content}/>)
//   return (
//     <ul>
//       {listElements}
//     </ul>
//   )

// 

export default Accordion