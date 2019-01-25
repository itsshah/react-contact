import React, { Component } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'; 
import Header from './components/Header.js';
import Contacts from './components/Contacts.js';
import AddContact from './components/AddContact.js'

import {Provider} from "./context.js";

class App extends Component {
  render() {
    return (
      <Provider>
        <div className="container">
          <Header branding="Contact App"/>
          <div className="row">
            <Contacts />
          </div>
          <div className="row">
            <AddContact />
          </div>
          
      </div>
      </Provider>
      
      
    );
  }
}

export default App;
