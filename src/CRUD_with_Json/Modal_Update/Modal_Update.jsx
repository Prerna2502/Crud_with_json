import React, { Component } from 'react'
import Modal from 'react-bootstrap/Modal'
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import axios from 'axios';

export default class Modal_Update extends Component {
    constructor(props){
        super(props);
        this.state={
            name:'',
            price:'',
            reRender: this.props.reRender
        }
    }
    updateHandler = ()=>{
        axios.put(`http://localhost:3000/products/${this.props.updateId}`
        ,{name: this.state.name, price: this.state.price})
        .then(()=> {this.state.reRender(false);
            this.props.onHide();})
        alert(`Successfuly updated Product Id: ${this.props.updateId}`);
    }
    render() {
        return (
            <Modal {...this.props} aria-labelledby="contained-modal-title-vcenter">
                <Modal.Header closeButton>
                    <Modal.Title id="contained-modal-title-vcenter">
                        Enter details for Product ID: {this.props.updateId}
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body className="show-grid">
                    <Container>
                        <Row>
                            <label for="name">Name:</label>
                            <input type="text" class="form-control" id="name"
                                onChange={(data) => this.setState({name:data.target.value})} name='name' />
                        </Row>
                        <Row>
                            <label for="price">Price:</label>
                            <input type="text" class="form-control" id="price"
                                onChange={(data) => this.setState({price:data.target.value})} name='price' />
                        </Row>
                    </Container>
                </Modal.Body>
                <Modal.Footer>
                    <Button onClick={this.updateHandler}>Update</Button>
                    <Button onClick={this.props.onHide}>Close</Button>
                </Modal.Footer>
            </Modal>
        )
    }
}