import React, { Component } from 'react';
import "./App.css";
import TodoList from './TodoList.js';
import { Button, Row, Col } from 'react-bootstrap';

class TodoApp extends React.Component {

  constructor(props) {
    super(props);
    this.state = { 
      items: [],
       text: '' 
      };
    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
    this.delete = this.delete.bind(this);
    this.done = this.done.bind(this);
  
  }


  render() {
    return (
      <Row >
      <Col xs={0} md={1}></Col>
      <Col xs={12} md={7}>
        <h3 className="center">TO DO LIST</h3>
        <TodoList items={this.state.items} onDelete={this.delete} onDone={this.done}/>
      </Col>
      <Col xs={12} md={3} className="card">

        <form onSubmit={this.onSubmit} >
          <label  htmlFor="new" >What needs to be done?</label>
          <br/>
          <input id="new" onChange={this.onChange} value={this.state.text}/>
          <Button bsStyle="primary" onSubmit={this.onSubmit} onClick={this.onSubmit}>agregar</Button>
        </form>
      </Col>
      <Col xs={0} md={1}></Col>
      </Row>
    )
  }

  onChange(e){
    this.setState({ text: e.target.value });
  }

  onSubmit(e){
    e.preventDefault();
    if (!this.state.text.length) {
      return;
    }
    const newItem = {
      text: this.state.text,
      id: Date.now(),
      done: false
    };
    this.setState(state => ({
      items: state.items.concat(newItem),
      text: ''
    }));
  }
  
  delete(TodoId){
    this.setState((state)=>{
      return {
        text: '',
        items: state.items.filter((item)=>{ 
          return item.id !== TodoId
        })
      }
    })

  }

  done(todoId){
    this.setState((state)=>{
      return{
      item : state.items.map((state)=>{
            if(state.id==todoId){
              state.done = !state.done;
            }
            return state

              })
            }
          })
  }

  
  
}


export default TodoApp;

