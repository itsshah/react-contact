import React, {Component} from 'react';
import {Consumer} from '../context.js';
import uuid from 'uuid';

class AddContact extends Component {
    state = {
        name:'',
        email: '',
        phone:''
    }
    onChange = (e) => this.setState({[e.target.name]: e.target.value});
    onSubmit = (dispatch,e) => {
        e.preventDefault();
        console.log(this.state);
        const {name, email, phone} = this.state;
        const newContact = {
            id: uuid(),
            name,
            email,
            phone
        }
        dispatch({type:'ADD_CONTACT', payload:newContact});
    }
    render(){
        const {name, email, phone} = this.state;
        return(
            <Consumer>
                {value => {
                    const {dispatch} = value;
                    return(
                        <div className="col-md-12">
                            <form onSubmit={this.onSubmit.bind(this,dispatch)}>
                            <div className="form-group">
                                <label htmlFor="name">Name</label>
                                <input type="text" name="name" className="form-control"  placeholder="Enter name" value={name} onChange={this.onChange} />
                            </div>
                            <div className="form-group">
                                <label htmlFor="email">Email address</label>
                                <input type="email" name="email" className="form-control"  placeholder="Enter email" value={email} onChange={this.onChange}/>
                            </div>
                            <div className="form-group">
                                <label htmlFor="phone">Phone</label>
                                <input type="text" name="phone" className="form-control"  placeholder="Enter phone" value={phone} onChange={this.onChange} />
                            </div>
                            <button type="submit" className="btn btn-primary">Submit</button>
                            </form>
                            
                        </div>
                    )
                }}
            </Consumer>
            // <div>
            //     <form onSubmit={this.onSubmit}>
            //     <div className="form-group">
            //         <label htmlFor="name">Name</label>
            //         <input type="text" name="name" className="form-control"  placeholder="Enter name" value={name} onChange={this.onChange} />
            //     </div>
            //     <div className="form-group">
            //         <label htmlFor="email">Email address</label>
            //         <input type="email" name="email" className="form-control"  placeholder="Enter email" value={email} onChange={this.onChange}/>
            //     </div>
            //     <div className="form-group">
            //         <label htmlFor="phone">Phone</label>
            //         <input type="text" name="phone" className="form-control"  placeholder="Enter phone" value={phone} onChange={this.onChange} />
            //     </div>
            //     <button type="submit" className="btn btn-primary">Submit</button>
            //     </form>
                
            // </div>
        )
    }
}

export default AddContact;