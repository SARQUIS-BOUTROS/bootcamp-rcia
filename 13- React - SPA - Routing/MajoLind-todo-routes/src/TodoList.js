import React, { Component } from 'react';
import Todo from './Todo.js';
import { ListGroup} from 'react-bootstrap';



class TodoList extends React.Component {
    constructor(props) {
      super(props);
      this.onDeleteClick = this.onDeleteClick.bind(this);
      this.onDoneClick = this.onDoneClick.bind(this);
    }
  
    onDeleteClick(todo_id){
      this.props.onDelete(todo_id) 
    }

    onDoneClick(todo_id){
        this.props.onDone(todo_id)


    }

    render() {
  
      return (
        <ListGroup>
          {this.props.items.map(item => (
           <Todo onDelete={this.onDeleteClick} onDone={this.onDoneClick} Key={item.id} Texto={item.text} Element={item}/>
          ))}
        
        </ListGroup>
      );
    }
}

export default TodoList;
  