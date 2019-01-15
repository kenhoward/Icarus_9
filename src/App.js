import React, { Component } from 'react';
import './App.css';
import firebase from 'firebase/app';
import './Config/config';

class App extends Component {
  constructor() {
    super();

    this.state = {
      currentItem: '',
      username: '',
      items: [],
    }
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentDidMount() {
    const itemsRef = firebase.database().ref('items');
    itemsRef.on('value', (snapshot) => {
      let items = snapshot.val();
      let newState = [];
      for (let item in items) {
        newState.push({
          id: item,
          title: items[item].title,
          user: items[item].user,
        });
      }
      this.setState({
        items: newState,
      });
    });
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

  loadItems() {
    return this.state.items.map((item) => {
      return (
        <ul>
          <li key={item.id}>
            <h3>{item.title}</h3>
            <p>item: {item.users}</p>
          </li>
        </ul>
      )
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
              {this.loadItems()}
            </div>
          </section>
        </div>
      </div>
    );
  }
}
export default App;