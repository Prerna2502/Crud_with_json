import axios from 'axios'
import React, { Component } from 'react'
import './AddProduct.css'

export default class AddProduct extends Component {
    constructor(){
        super()
        this.state={
            id: '',
            name: '' ,
            price: '',
            product: []
        }
    }
    ClickHandler(){
        axios.post('http://localhost:3000/products',{id: this.state.id, name: this.state.name, price: this.state.price});
        alert('Product Added');
    }
    
    render() {
        return (
            <div>
                <div className="accordion" id="accordionExample">
                    <div className="accordion-item p-0">
                        <h2 className="accordion-header e-header" id="headingOne">
                            <button className="accordion-button mt-5" type="button" 
                            data-bs-toggle="collapse" data-bs-target="#collapseOne" 
                            aria-expanded="false" aria-controls="collapseOne">
                                Expand to add product!!
                            </button>
                        </h2>
                        <div id="collapseOne" className="accordion-collapse collapse hide" 
                        aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                            <div className="accordion-body">
                                    <div class="form-group">
                                        <label for="id">Product-ID:</label>
                                        <input type="text" class="form-control" id="id" 
                                        onChange={(data)=>this.setState({id:data.target.value})} required/>
                                    </div>
                                    <div class="form-group">
                                        <label for="name">Name:</label>
                                        <input type="text" class="form-control" id="name"
                                        onChange={(data)=>this.setState({name:data.target.value})} required/>
                                    </div>
                                    <div class="form-group">
                                        <label for="price">Price:</label>
                                        <input type="text" class="form-control" id="price"
                                        onChange={(data)=>this.setState({price:data.target.value})} required/>
                                    </div>
                                    <button type="submit" class="btn btn-info"
                                    onClick={this.ClickHandler.bind(this)}>Add</button>
                            </div>
                        </div>
                    </div>
                </div>
                
        </div>
        )
    }
}