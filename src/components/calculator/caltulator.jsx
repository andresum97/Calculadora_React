import React, { Component } from 'react';
import Buttons from '../buttons/buttons.jsx';
import Display from '../display/display.jsx';
import './calculatordesign.scss';

class Calculator extends Component{
    constructor(props){
        super(props)
        this.state = {
            value: "",
            operation: 0, 
            num1: 0,
            num2: 0
        }
        //Sum: 1 Min: 1 Mul:3 Div:4
        this.dataButton = this.dataButton.bind(this);
        this.clear = this.clear.bind(this);
      }
    dataButton(valuecalc){
        if(valuecalc=="C"){
            this.clear();
        }
        else
        if(valuecalc=="+"){
            console.log("Va a sumar");
            this.sum();
        }else
        if(valuecalc=="="){
            this.equal();
        }
        else
        {
            this.setState({value: this.state.value + valuecalc});
        }
        console.log(this.state.value);
    }
    clear(){
        this.setState({value: ""});
    }
    sum(){
        if(this.state.operation==0){
            this.setState({
                num1: Number(this.state.value),
                operation: 1
            });
            this.clear();
        }
    }
    equal(){
        if(this.state.operation != 0){
            console.log("segundo numero",this.state.value);
            this.setState({
                num2: Number(this.state.value)
            });
            this.clear();
            if(this.state.operation == 1){
                console.log("num1",this.state.num1);
                console.log("num2",this.state.num2);
                let result = this.state.num1+this.state.num2;
                console.log("Llego a sumar y el resultado es",result);
                this.setState({value:''+result});
            }
        }
    }
    render(){
        return(
            <div className="bodyCalculator">
                <Display value={this.state.value}/>
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
        )
    }
}

export default Calculator;