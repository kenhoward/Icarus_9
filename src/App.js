import React, { Component } from 'react';
import './App.css';
import firebase from 'firebase/app';
import config from './Config/config';

class App extends Component {
  constructor() {
    super();

    this.state = {
      currentItem: '',
      username: '',
    }
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(e) {
    this.setState({
      [e.target.name]: e.target.value,
    });
  }

  handleSubmit(e) {
    e.preventDefault();
    const itemsRef = firebase.database().ref('items');
    const item = {
      title: this.state.currentItem,
      user: this.state.username,
    }
    itemsRef.push(item);
    this.setState({
      currentItem: '',
      username: '',
    })
  }

  render() {
    return (
      <div className='app'>
        <header>
            <div className='wrapper'>
              <h1>Icarus 9 - i9 Initiative</h1>
              
            </div>
        </header>
        <div className='container'>
          <section className='add-item'>
              <form onSubmit={this.handleSubmit}>
                <input type="text" name="username" placeholder="Name..." onChange={this.handleChange} value={this.state.username} />
                <input type="text" name="currentItem" placeholder="Item..." onChange={this.handleChange} value={this.state.currentItem} />
                <button>Add Item</button>
              </form>
          </section>
          <section className='display-item'>
            <div className='wrapper'>
              <ul>
              </ul>
            </div>
          </section>
        </div>
      </div>
    );
  }
}
export default App;