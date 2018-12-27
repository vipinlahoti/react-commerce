import React, { Component } from 'react';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

import Events from '/modules/events';

export default class AddEvent extends Component {
  state = {
    title: '',
    description: ''
  }

  handleChange = event => {
    const field = event.target.name;

    // we use square braces around the key `field` coz its a variable (we are setting state with a dynamic key name)
    this.setState({
      [field]: event.target.value
    })
  }

  handleSubmit = (event) => {
    event.preventDefault();

    // TODO: Create backend Meteor methods to save created events
    const { title, description, date } = this.state;

    Events.insert({
      title,
      description,
      date: new Date()
    })

  }

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <div className="form-group">
            <label>Title:</label>
            <TextField
              variant="outlined"
              fullWidth
              margin="dense"
              label="Enter event title"
              name="title"
              value={this.state.title}
              onChange={this.handleChange}
            />
          </div>

          <div className="form-group">
            <label>Description:</label>
            <TextField
              variant="outlined"
              fullWidth
              margin="dense"
              label="Enter event title"
              name="description"
              value={this.state.description}
              onChange={this.handleChange}
            />
          </div>

          <Button variant="contained" color="primary" type="submit">
            Add Event
          </Button>
        </form>
      </div>
    );
  }
}
