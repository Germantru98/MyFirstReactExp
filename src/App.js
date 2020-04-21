import React from 'react';
import './App.css';
import ListItems from "./ListItems"
import { library } from '@fortawesome/fontawesome-svg-core'
import { faTrash } from '@fortawesome/free-solid-svg-icons'
library.add(faTrash)
class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      items: [],
      currentItem: {
        text: '',
        key: '',
        done: false
      }
    }
    this.addItem = this.addItem.bind(this)
    this.handleInput = this.handleInput.bind(this)
    this.deleteItem = this.deleteItem.bind(this)
    this.setUpdate = this.setUpdate.bind(this)
    this.handleChange = this.handleChange.bind(this)
  }
  handleChange = (key) => {
    const items = this.state.items
    items.map(item => {
      if (item.key === key) {
        item.done = !item.done
      }
    })
    this.setState({
      items: items
    })
  }
  addItem(e) {
    e.preventDefault()
    const newItem = this.state.currentItem
    if (newItem.text !== "") {
      const items = [...this.state.items, newItem]
      this.setState({
        items: items,
        currentItem: {
          text: '',
          key: ''
        }
      })
    }
  }
  handleInput(e) {
    this.setState({
      currentItem: {
        text: e.target.value,
        key: Date.now()
      }
    })
  }
  deleteItem(key) {
    const filteredItems = this.state.items.filter(item =>
      item.key !== key)
    this.setState({
      items: filteredItems
    })

  }
  setUpdate(text, key) {
    const items = this.state.items
    items.map(item => {
      if (item.key === key) {
        item.text = text
      }
    })
    this.setState({
      items: items
    })


  }
  render() {
    const activeTasksCounter = this.state.items.filter(item => !item.done).length
    return (
      <div>
        <div className="App">
          <form id="to-do-form" onSubmit={this.addItem}>
            <input type="text" placeholder="Enter task" value={this.state.currentItem.text} onChange={this.handleInput}></input>
            <button type="submit">Add</button>
          </form>
          <ListItems items={this.state.items} deleteItem={this.deleteItem} setUpdate={this.setUpdate} handleChange={this.handleChange} />
        </div>
        <div className="footer">Active tasks: {activeTasksCounter}</div>
      </div>
    );
  }
}

export default App;
