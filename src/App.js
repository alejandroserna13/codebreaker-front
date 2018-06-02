import React, { Component } from 'react';
import logo from './logo.svg';
import axios from 'axios';
import './App.css';

class App extends Component {

  constructor(props){
    super(props)
    this.state = {number: "", resultado: "", url: "http://localhost:9000/answer/"}
    this.ingresartexto = this.ingresartexto.bind(this)
    this.adivinarNumero = this.adivinarNumero.bind(this)
  }

  ingresartexto(event){
    this.setState({number: event.target.value})
  }

  adivinarNumero(event){
    console.log("holi")
    axios.get(this.state.url+this.state.number)
  .then(response => {
    console.log(response);
    this.setState({resultado: response.data})
  })
  .catch(error => {
    console.log(error);
    this.setState({resultado: "Error de conexión"})
  });
  event.preventDefault();
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Alejandro y Johanna Codebreaker</h1>
        </header>
        <p className="App-intro"></p>
        <div>
          <form onSubmit = {this.adivinarNumero}>
          <input type="number" placeholder="Ingrese un número"  onChange={this.ingresartexto}></input>
          <input type="submit" value="Adivinar"></input>  
          </form>
        </div>
      <div><label>Respuesta: {this.state.resultado}</label></div>
      </div>
    );
  }
}

export default App;
