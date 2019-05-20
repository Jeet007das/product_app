import React, { Component } from 'react';
import swal from 'sweetalert';
import axios from 'axios';
import baseUrl from '../common/config';


class CustomerDetailsForm extends Component {
    constructor(props) {
        console.log(props.location.state);
        super(props)
        this.state = {
          name:'',
          Street:'',
          city:'',
          State:'',
          prod_id:props.location.state._id,
          store_id:props.location.state.storeId
        }
    }

    submit = async(props) =>{
        console.log("Here we register store");
        if(this.state.name !== '' && this.state.Street !== '' && this.state.city !== '' && this.state.State !== ''){
             axios.post(baseUrl+'/purchase/_buyBook', {
                name: this.state.name,
                Street: this.state.Street,
                city:this.state.city,
                State:this.state.State,
                id:this.state.prod_id,
                storeId:this.state.store_id
             })
              .then(function (response) {
                if(response === 200){
                    swal("Purchase successfully", "success")
                }else if(response === 401){
                    swal("Address is not valid", "warning")
                }else{
                    swal("Delivery is not possible you are of range")
                }
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
                <h3>Customer Details form</h3>
                <section className="form__register">

<div className="form-group">
        <label>Name:</label>
        <input type="text" 
                className="form-control" 
                id="name"  
                placeholder="Enter name"
                value={this.state.storeName} 
                onChange={(name) => this.setState({name:name.target.value})} required />
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
  
  <br />
    <button type="submit" className="btn btn-primary" onClick = {() => this.submit()}>Submit</button>

</section>
            </div>
        )
    }
}

export default CustomerDetailsForm;
