import React, { Component } from 'react';
import './App.css';
import SignupForm from './components/SignupForm';

class App extends Component {
  render() {
    return (
      <div className="container demo mt-4">
       <div className='row'>
        
        <div className='col-lg-7'>
          <img src='https://images.unsplash.com/photo-1489110804417-276c3f517515?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80' className='img-fluid img-thumbnail rounded' />
        </div>
        <div className='col-lg-5'>
          <SignupForm />
        </div>
       </div>
      </div>
    );
  }
}

export default App;
