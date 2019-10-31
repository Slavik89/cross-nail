import React, {Component} from 'react';

class Square extends Component {
    render() {
      return (
        <button className="square" onClick={()=>alert('клац')}>
          {this.props.value}
        </button>
      );
    }
  }

export default Square;
