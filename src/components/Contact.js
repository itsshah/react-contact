import React, { Component } from 'react';
import {Consumer} from '../context.js';
class Contact extends Component {
    state = {
        showInfo : true
    }
    onDeleteClick = (id, dispatch) => {
        dispatch({type: 'DELETE_CONTACT', payload:id}) 
    }
    onShowClick = (e) => {
        this.setState({showInfo: !this.state.showInfo})
    }
    render(){
        const {id, name, address, email, phone} = this.props.contact;
        const {showInfo} = this.state;
        return(
            <Consumer>
                {value => {
                    const {dispatch} = value;
                    return(
                        <div className="contact-container col-md-4" style={{float:'left'}}>
                            <div className="card" >
                                <div className="card-body">
                                    <h4 className="close-btn" style={{cursor:"pointer", display:"block", float:"right"}}
                                    onClick={this.onDeleteClick.bind(this, id, dispatch)}>X</h4>
                                    <h5 className="card-title" style={{cursor:"pointer"}} onClick={this.onShowClick}>Contact +</h5>
                                    <h6 className="card-subtitle mb-2 text-muted">{name}</h6>
                                    {showInfo ? (
                                    <div>
                                        <p className="card-text">Relationship: </p>
                                        <p className="card-text">Phone: {phone}</p>
                                        <p className="card-text">Email: {email}</p>
                                        <p className="card-text">Address: {address} </p>
                                    </div>) : null}
                                    
                                </div>
                            
                            </div>
                        
                        </div>
                    )
                }}
            </Consumer>
            
            
        );


    }


}

export default Contact;