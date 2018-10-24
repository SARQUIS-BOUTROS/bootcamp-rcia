import React, { Component } from 'react';
import { Button, Row, Col, Glyphicon, ListGroupItem } from 'react-bootstrap';
class Todo extends React.Component{
    constructor(props) {
        super(props);
        this.state = { 
            id: 0,
             text: '' 
            };
      }

    render(){
        return (  
        <Row>
            <Col xs={6} md={2} ></Col>
            <Col xs={6} md={6} >
                <ListGroupItem className={this.props.Element.done? "done" : "pending"} key={this.props.Key} >{this.props.Texto}</ListGroupItem>
            </Col>  
            <Col xs={6} md={2}>
                <Button bsStyle="danger" onClick={()=>{this.props.onDelete(this.props.Key)}}>
                <Glyphicon glyph="glyphicon glyphicon-trash" />
                </Button>
                <Button bsStyle="success" onClick={()=>{this.props.onDone(this.props.Key)}}>
                <Glyphicon glyph="glyphicon glyphicon-ok" />
                </Button>
            </Col>
            <Col xs={6} md={2} ></Col>
        </Row>

        )
    }
    
}

export default Todo;