import React, { Component } from 'react';
import './App.css';

class App extends Component {
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
              <form>
                <input type="text" name="username" placeholder="Name..." />
                <input type="text" name="currentItem" placeholder="Item..." />
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