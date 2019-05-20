import React, { Component } from 'react';
import swal from 'sweetalert';
import axios from 'axios';
import baseUrl from '../common/config';


class RegisterStore extends Component {
    constructor(props) {
        super(props)
        this.state = {
            storeName:'',
            Street:'',
            city:'',
            State:'',
            deliveryUpto:''

        }
    }

registerStore = async() =>{
    console.log("Here we register store");
    console.log(this.state.city);
    

    if(this.state.storeName !== '' && this.state.Street !== '' && this.state.city !== '' && this.state.State !== '' && this.state.deliveryUpto !== ''){
        console.log(baseUrl);
        
        axios.post(baseUrl+'/register/_registerStore', {
            store_name: this.state.storeName,
            street: this.state.Street,
            city:this.state.city,
            state:this.state.State,
            deliveryUpto:this.state.deliveryUpto
          })
          .then(function (response) {
            console.log(response);
          })
          .catch(function (error) {
            console.log(error);
          });
    }else{
        swal("Something is missing", "error");
    }
    
    
}

    render(){
        return(
            <div className="form">
            <h2> Register Store </h2>
            <section className="form__register">

            <div className="form-group">
                    <label>Store Name:</label>
                    <input type="text" 
                            className="form-control" 
                            id="name"  
                            placeholder="Enter name"
                            value={this.state.storeName} 
                            onChange={(name) => this.setState({storeName:name.target.value})} required />
                </div>
                <div className="form-group">
                    <label>Street:</label>
                    <input type="text" 
                            className="form-control" 
                            id="street"  
                            placeholder="Enter Street"
                            value={this.state.street} 
                            onChange={(street) => this.setState({Street:street.target.value})} required />
                </div>
                <div className="form-group">
                    <label>City:</label>
                    <input type="text" 
                            className="form-control" 
                            id="city"  
                            placeholder="Enter City"
                            value={this.state.city} 
                            onChange={(city) => this.setState({city:city.target.value})} required />
                </div>
                <div className="form-group">
                    <label>State:</label>
                    <input type="text" 
                            className="form-control" 
                            id="state"  
                            placeholder="Enter State"
                            value={this.state.State} 
                            onChange={(state) => this.setState({State:state.target.value})} required />
                </div>
                <div className="form-group">
                    <label>Delivery Upto:</label>
                    <input type="number" 
                            className="form-control" 
                            id="delivery"  
                            placeholder="Enter Delivery upto km"
                            value={this.state.deliveryUpto} 
                            onChange={(delivery) => this.setState({deliveryUpto:delivery.target.value})} required />
                </div>
              <br />
                <button type="submit" className="btn btn-primary" onClick = {() => this.registerStore()}>Register</button>

            </section>
        </div>
        )
    }
}

export default RegisterStore;