import React, { Component } from 'react';
import Contact from "./Contact.js";
import {Consumer} from "../context.js";

class Contacts extends Component{

    render(){
        
        return(
            <Consumer>
                {value => {
                    const {contacts} = value;
                    return(
                        <div className="col-md-12">
                            {contacts.map(contact => (
                                <Contact 
                                key={contact.id}
                                contact={contact}/>
                            ))}
                        </div> 
                    )
                }}
            </Consumer>
        )

        // 
        // return(
            
        // );
    }

}


export default Contacts;