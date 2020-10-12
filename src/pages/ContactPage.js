import React from "react";
import '../styles/contactPage.css';
import {Prompt} from 'react-router-dom'

class ContactPage extends React.Component{

  state = {
    value :""
  }

  handleTextArea = (event) =>{
    this.setState({
      value: event.target.value
    })
  }

  handleSubmit = (e) => {
    e.preventDefault()
    this.setState({value: ""})
  }

  render(){return( 
  <div className = 'contact'><form onSubmit = {this.handleSubmit}>
    <h3>Napisz do nas</h3>
    <textarea value = {this.state.value} onChange = {this.handleTextArea} placeholder = 'wpisz wiadomosc...'></textarea>
    <button >Wyslij</button>
    </form>
    <Prompt when = {this.state.value} message = 'mesydz'/>
    </div>
  );
}};

export default ContactPage;
