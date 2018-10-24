import React, { Component } from 'react';
import "./App.css";
import TodoList from './TodoList.js';
import { Button, Row, Col } from 'react-bootstrap';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

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


class Done extends React.Component{
  componentDidMount(){
    const {items}= this.props.location.state
    return items
  }
  render(){
    return (
      <Row>
        <Col xs={0} md={2}></Col>
      <Col xs={12} md={8}>
        <h3 className="center">Done</h3>
        <TodoList items= {this.componentDidMount().filter((item)=>{ return item.done})} onDelete={this.delete} onDone={this.done}/>
       
      </Col>
      <Col xs={0} md={2}></Col>
      </Row>

    )
  }
}

class NotDone extends React.Component{
  componentDidMount(){
    const {items}= this.props.location.state
    return items
  }
  render(){
    return (
      <Row>
        <Col xs={0} md={2}></Col>
      <Col xs={12} md={8}>
        <h3 className="center">Done</h3>
        <TodoList items= {this.componentDidMount().filter((item)=>{ return !item.done})} onDelete={this.delete} onDone={this.done}/>
       
      </Col>
      <Col xs={0} md={2}></Col>
      </Row>

    )
  }
}


const NavRoutes = () => (
  <Router>
    <div>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to={{
            pathname: '/done',
            state:{
              items:[{text: 'majo', id: 1, done:true},{text: 'mati', id: 2, done:true},{text: 'nicole', id: 3, done:false}]
            }
          }}>Done</Link>
          
        </li>
        <li>
          <Link to={{
            pathname: '/notdone',
            state:{
              items:[{text: 'majo', id: 1, done:true},{text: 'mati', id: 2, done:true},{text: 'nicole', id: 3, done:false}]
            }
          }}>Not Done</Link>
          
        </li>
      </ul>

      <hr />

      <Route exact path="/" component={TodoApp} />
      <Route path="/done" component={Done} />
      <Route path="/notdone" component={NotDone} />
    </div>
  </Router>
);
export default NavRoutes;
