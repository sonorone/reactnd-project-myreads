import React, { Component } from "react";

class Action extends Component {
  state = {
    optionsState: this.props.optionsState
  };

  handleChange = event => {
    this.setState({ optionsState: event.target.value });
    this.props.onShelfChange(event.target.value);
  };

  render() {
    const { optionsState } = this.state;

    return (
      <div className="book-shelf-changer">
        <select value={optionsState} onChange={this.handleChange}>
          <option value="move" disabled>
            Move to...
          </option>
          <option value="currentlyReading">Currently Reading</option>
          <option value="wantToRead">Want to Read</option>
          <option value="read">Read</option>
          <option value="none">None</option>
        </select>
      </div>
    );
  }
}

export default Action;
