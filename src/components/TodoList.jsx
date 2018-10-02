import React, { Component } from 'react';
import TodoItems from './TodoItems';

export default class TodoList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      items: [],
    };
    this.addItem = this.addItem.bind(this);
  }

  addItem(e) {
    if (this.InputElement !== '') {
      const newItem = {
        text: this.InputElement.value,
        key: Date.now(),
      };
      this.setState(prevState => ({
        items: prevState.items.concat(newItem),
      }));
      this.InputElement.value = '';
    }
    e.preventDefault();
  }

  render() {
    const { items } = this.state;
    return (
      <div className="todoListMain">
        <div className="header">
          <form onSubmit={this.addItem}>
            <input
              placeholder="Enter Task"
              ref={(a) => {
                this.InputElement = a;
                return a;
              }}
            />
            <button type="submit">
              Add
            </button>
          </form>
        </div>
        <TodoItems entries={items} />
      </div>
    );
  }
}
