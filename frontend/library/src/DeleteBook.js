import React, { Component } from 'react';
import { Form, Col, Checkbox, Button, FormControl, FormExample, FormGroup, HelpBlock, ControlLabel } from 'react-bootstrap';
import Listcontainer from './Listcontainer.js'


class DeleteBook extends React.Component {
    constructor(props, context) {
      super(props, context);
  
    }
    render() {
      return (
        <div>
                    <h1>
                   <center> Delete a Book <small>Enter Book ID of the book you want to delete</small></center>
                    </h1>
                <Form horizontal>
                        <br/><br/>
                <FormGroup controlId="formHorizontalEmail">
                    <Col componentClass={ControlLabel} sm={2}>
                    Enter Book ID
                    </Col>
                    <Col sm={10}>
                    <FormControl type="text" placeholder="Eg. 15" />
                    </Col>
                </FormGroup>

                 

                <FormGroup>
                    <Col smOffset={2} sm={10}>
                    <Button type="submit">Submit</Button>
                    </Col>
                </FormGroup>
                </Form>
            </div>
        

      );
    }
  }
  

  export default DeleteBook;