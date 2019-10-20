import React, { Component } from 'react';
import './buttonsdesign.scss';

class Buttons extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  getValue(valor) {
    this.props.click(valor);
  }

  render() {
    const { valor, color, size } = this.props;
    let style = {
    };
    if (color === '1') {
      style = {
        color: 'black',
      };
    } else {
      style = {
        background: '#F18E24',
        color: 'white',
      };
    }
    if (size === '2') {
      style = {
        width: '184px',
      };
    }
    return (
      <div>
        <button type="button" className="buttondesign" style={style} onClick={() => this.getValue(valor)}>{valor}</button>
      </div>
    );
  }
}

export default Buttons;
