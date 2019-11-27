import React from 'react';
import Job from './job';
import { selectLocation, clearListings } from './../actions';
import * as Jobs from './../data';

class Widget extends React.Component {

  constructor(props) {
    super(props);
    this.forceUpdate = this.forceUpdate.bind(this);

    // require this component to re-render whenever the store's state changes
    this.props.store.subscribe(this.forceUpdate);
    this.cities = ["San Francisco", "Seattle", "New York", "Austin", "Remote"];
    // this.selectLocation = selectLocation.bind(this);
    this.selectLocation = selectLocation;
    this.clearListings = clearListings;
  }

  fetchJobListings(city) {
    // clearing the list each time, so the state contains only the
    // newest fetch results.
    this.props.store.dispatch(this.clearListings());

    // created data that contains API request responses to mimic ajax
    // request and not be penalized by CORB
    this.props.store.dispatch(
      this.selectLocation(city, Jobs[city.replace(" ", "_")])
    );
  }

  clearAll() {
    this.props.store.dispatch(this.clearListings());
  }

  // fetchJobListings(city) {
  //   $.ajax({
  //     crossDomain: true,
  //     dataType: 'jsonp',
  //     url: `https://jobs.github.com/positions.json?location=${city}&markdown=true`,
  //     type: "GET",
  //     success: function(resp) {
  //       // tell the store to update with the new location and jobs;
  //       // use the action creator 'selectLocation' to build the object to
  //       // be dispatched
  //       this.props.store.dispatch(this.selectLocation(city, resp))

  //     }.bind(this)
  //   });
  // }

  render() {

    // get the store's current state and deconstruct it into 'jobs'
    // and 'city' variables
    const { city, jobs } = this.props.store.getState();
    const cityOptions = this.cities.map(city => (
        <button onClick={ () => { this.fetchJobListings(city) }}
             key={city}
             className="job-option">
          {city}
        </button>
      )
    );
    cityOptions.unshift(
      <button onClick={() => { this.clearAll() }}
        className="job-option">
        CLEAR LISTINGS
      </button>
    );

    const jobListings = jobs.map(job => (
      <Job key={job.id}
            title={job.title}
            company={job.company}
            location={job.location}
            type={job.type}
            description={job.description}
            info = {job.url}/>
    )
    );
    

    return (
      <div>
        <h1>Github Job Listings</h1>
        <h3>City: {city}</h3>

        <div className="location-selector">
          Location:
          {cityOptions}
        </div>
        
        <h3>{jobListings.length} Job Listings</h3>
        <ol className="listings-list">
            {jobListings}
        </ol>
      </div>
    );
  }
};


export default Widget;
