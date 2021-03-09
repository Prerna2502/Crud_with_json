import React, { Component } from 'react'
import './ProductCard.css'
import axios from 'axios'
import { Link } from 'react-router-dom'

export default class ProductCard extends Component {    
    DeleteHandler(){
        axios.delete(`http://localhost:3000/products/${this.props.id}`);
        this.props.reRender(false);
        alert(`Product with ID:${this.props.id} is deleted.`)
    }
    UpdateHandler(){
        this.props.updateHandler(this.props.id);
    }
    render() {
        return (
        <div className='card bg-info m-5'>
            <div className='card-body'>
                <div className='card-title font-weight-bold'>ID:{this.props.id}</div>
                <div className='card-text'>Name:{this.props.name}</div>
                <div className='card-text'>Price:{this.props.price}</div>
                <br/>
                <Link to='/show_product' className='btn btn-primary mr-5' onClick={this.UpdateHandler.bind(this)}>Update</Link>
                <Link to='/show_product' className='btn btn-primary' onClick={this.DeleteHandler.bind(this)}>Delete</Link>
            </div>
        </div>
        )
    }
}

