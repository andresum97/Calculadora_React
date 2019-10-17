import React, { Component } from 'react';
import './buttons.scss';

class Buttons extends Component{
  constructor(props){
    super(props)
    this.state = {
    }
  }
  getValue(valor){
    this.props.click(valor);
  }
    render(){
      let { valor } = this.props;
      let { color } = this.props;
      let { size } = this.props;
      let style = {
      }
      if(color =="1"){
        style ={
          color: "black"
        }
      }else{
        style = {
          background: "#F18E24",
          color: "white"
        }
      }
      if(size == "2"){
        style = {
          width : "184px"
        }
      }
      return(
        <div>
          <button className="buttondesign" style={style} onClick={()=> this.getValue(this.props.valor)}>{valor}</button>
        </div>
      )
    }
}

export default Buttons;