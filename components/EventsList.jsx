import React, { Component } from 'react';
import { withTracker } from 'meteor/react-meteor-data';
import moment from 'moment';

import Events from '/modules/events';

class EventsList extends Component {
  renderEventList(event) {
    return (
      <div key={event._id}>
        <h4>{event.title}</h4>
        <p>{event.description}</p>
        <small>{moment(new Date(event.date)).fromNow()}</small>
      </div>
    );
  }

  render() {
    const events = this.props.events.map(event => {
      return this.renderEventList(event);
    });

    return (
      <div>
        <h2>Events lists</h2>
        {events}
        <pre>DB Stuff: {JSON.stringify(this.props, null, ' ')} </pre>
      </div>
    );
  }
}

export default EventsContainer = withTracker(() => {
  return {
    events: Events.find().fetch(),
  };
})(EventsList);
