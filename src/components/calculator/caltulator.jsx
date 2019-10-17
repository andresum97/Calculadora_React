import React, { Component } from 'react';
import Buttons from '../buttons/buttons.jsx';
import Display from '../display/display.jsx';
import './calculatordesign.scss';
// import { thisExpression } from '@babel/types';

class Calculator extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: '',
      operation: 0,
      num1: 0,
    };
    // Sum: 1 Min: 1 Mul:3 Div:4
    this.dataButton = this.dataButton.bind(this);
    this.clear = this.clear.bind(this);
  }

  dataButton(valuecalc) {
    const { value } = this.state;
    const aprove = this.lenDisplay();
    if (aprove) {
      if (valuecalc === 'C') {
        this.clear();
      } else
      if (valuecalc === '+') {
        this.sum();
      } else
      if (valuecalc === '-') {
        this.min();
      } else
      if (valuecalc === 'x') {
        this.multiply();
      } else
      if (valuecalc === '/') {
        this.divide();
      } else
      if (valuecalc === '-/+') {
        this.negative();
      } else
      if (valuecalc === '%') {
        this.percentage();
      } else
      if (valuecalc === '=') {
        this.equal();
      } else {
        this.setState({ value: value + valuecalc });
      }
    } else if (valuecalc === 'C') {
      this.clear();
    }
  }

  // Metodo Clear para borrar el contenido del Display
  clear() {
    this.setState({ value: '' });
  }

  // Metodo para confirmar que se realizara una suma
  sum() {
    const { value, operation } = this.state;
    if (operation === 0) {
      this.setState({
        num1: Number(value),
        operation: 1,
      });
      this.clear();
    }
  }

  // Metodo para confirmar que se realizara una resta
  min() {
    const { value, operation } = this.state;
    if (operation === 0) {
      this.setState({
        num1: Number(value),
        operation: 2,
      });
      this.clear();
    }
  }

  // Metodo para confirmar que se realizara una multiplicacion
  multiply() {
    const { value, operation } = this.state;
    if (operation === 0) {
      this.setState({
        num1: Number(value),
        operation: 3,
      });
      this.clear();
    }
  }

  // Metodo para confirmar que se realizara una division
  divide() {
    const { value, operation } = this.state;
    if (operation === 0) {
      this.setState({
        num1: Number(value),
        operation: 4,
      });
      this.clear();
    }
  }

  // Metodo para cambiar el signo del numero que se encuentra en el display
  negative() {
    const { value } = this.state;
    const numt = -1 * Number(value);
    this.setState({ value: `${numt}` });
  }

  // Metodo para obtener el porcentaje del numero que se encuentra en el display
  percentage() {
    const { value } = this.state;
    const numt = Number(value) / 100;
    this.setState({ value: `${numt}` });
  }

  // Metodo de Igual que segun la operacion que se solicito, realiza el calculo
  equal() {
    const { value, operation, num1 } = this.state;
    if (operation !== 0) {
      const numt = Number(value);
      let result = 0;
      this.clear();
      if (operation === 1) {
        result = num1 + numt;
      }
      if (operation === 2) {
        result = num1 - numt;
      }
      if (operation === 3) {
        result = num1 * numt;
      }
      if (operation === 4) {
        result = num1 / numt;
      }
      result = this.valResult(result);
      this.setState({ value: `${result}`, operation: 0 });
    }
  }

  lenDisplay() {
    const { value } = this.state;
    let res;
    if (value.length > 8) {
      res = false;
    } else {
      res = true;
    }
    return res;
  }

  valResult(num) {
    let val;
    let dec;
    const proof = `${num}`;
    if (proof.indexOf('.') !== -1) {
      dec = num.toFixed(2);
    } else {
      dec = num;
    }
    const word = `${dec}`;
    if (dec > 999999999 || word.length > 8 || dec < 0) {
      val = 'ERROR';
    } else {
      val = dec;
    }
    return val;
  }

  render() {
    const { value } = this.state;
    return (
      <div className="bodyCalculator">
        <Display value={value} />
        <div className="calcButtons">
          <Buttons valor="C" color="1" click={this.dataButton} />
          <Buttons valor="-/+" color="1" click={this.dataButton} />
          <Buttons valor="%" color="1" click={this.dataButton} />
          <Buttons valor="/" color="2" click={this.dataButton} />
        </div>
        <div className="calcButtons">
          <Buttons valor="7" color="1" click={this.dataButton} />
          <Buttons valor="8" color="1" click={this.dataButton} />
          <Buttons valor="9" color="1" click={this.dataButton} />
          <Buttons valor="x" color="2" click={this.dataButton} />
        </div>
        <div className="calcButtons">
          <Buttons valor="4" color="1" click={this.dataButton} />
          <Buttons valor="5" color="1" click={this.dataButton} />
          <Buttons valor="6" color="1" click={this.dataButton} />
          <Buttons valor="-" color="2" click={this.dataButton} />
        </div>
        <div className="calcButtons">
          <Buttons valor="1" color="1" click={this.dataButton} />
          <Buttons valor="2" color="1" click={this.dataButton} />
          <Buttons valor="3" color="1" click={this.dataButton} />
          <Buttons valor="+" color="2" click={this.dataButton} />
        </div>
        <div className="calcButtons">
          <Buttons valor="0" color="1" size="2" click={this.dataButton} />
          <Buttons valor="." color="1" click={this.dataButton} />
          <Buttons valor="=" color="2" click={this.dataButton} />
        </div>
      </div>
    );
  }
}

export default Calculator;
